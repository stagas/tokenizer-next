import * as util from './util'

/**
 * Create a [[TokenizerFactory]] for the given RegExps.
 *
 * RegExps must use a [named group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups)
 * to capture and must not have any flags set:
 *
 * ```js
 * const tokenize = createTokenizer(
 *   /(?<ident>[a-z]+)/,
 *   /(?<number>[0-9]+)/
 * )
 * ```
 *
 * @param regexps RegExps to match.
 */
export const createTokenizer = (...regexps: RegExp[]) => {
  const regexp = util.joinRegExps(regexps)
  return <TokenizerFactory>((input: string) => {
    const matches = input.matchAll(regexp)
    const next = (): Token | void => {
      const match = matches.next()
      if (match.done || !match.value.groups || match.value.index == null) return
      const entry = Object.entries(match.value.groups).find(util.NonNull)!
      const [kind, value] = entry
      return { kind, value, index: match.value.index }
    }
    Object.defineProperty(next, Symbol.iterator, {
      value: function* (token: Token | void) {
        while ((token = next())) yield token
      }
    })
    return <TokenizerCallableIterable>next
  })
}

/**
 * Create a [[TokenizerCallableIterable]] for given input string.
 *
 * ```js
 * // using next()
 * const next = tokenize('hello 123')
 * console.log(next()) // => {kind: 'ident', value: 'hello', index: 0}
 * console.log(next()) // => {kind: 'number', value: '123', index: 6}
 * console.log(next()) // => undefined
 *
 * // using for of
 * for (const token of tokenize('hello 123')) {
 *   console.log(token)
 *   // => {kind: 'ident', value: 'hello', index: 0}
 *   // => {kind: 'number', value: '123', index: 6}
 * }
 *
 * // using spread
 * const tokens = [...tokenize('hello 123')]
 * console.log(tokens)
 * // => [
 * //   {kind: 'ident', value: 'hello', index: 0},
 * //   {kind: 'number', value: '123', index: 6}
 * // ]
 * ```
 *
 * @param input The string to tokenize.
 */
export type TokenizerFactory = (input: string) => TokenizerCallableIterable

/**
 * Can be called to return next [[Token]] or can be used as an [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).
 */
export type TokenizerCallableIterable = (() => Token | void) & Iterable<Token>

/**
 * A single Token as returned by the [[TokenizerCallableIterable]].
 */
export interface Token {
  /**
   * RegExp's group name.
   */
  kind: string
  /**
   * Captured string value.
   */
  value: string
  /**
   * Index position of captured string.
   */
  index: number
}

/**
 * Re-export `createTokenizer` as `default` for convenience.
 */
export default createTokenizer
