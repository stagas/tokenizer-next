// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { matchToToken, TokenReturn, Token } from 'match-to-token'
import { joinRegExps } from './util'

/**
 * Create a {@link TokenizerFactory} for the given RegExps.
 *
 * To capture, RegExps must use a [named group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups).
 *
 * ```ts
 * const tokenize = createTokenizer(
 *   /(?<ident>[a-z]+)/, // named groups determine token `group`
 *   /(?<number>[0-9]+)/
 * )
 * ```
 *
 * @param regexps RegExps to match.
 */
export const createTokenizer = (...regexps: RegExp[]) => {
  const regexp = joinRegExps(regexps)

  return <TokenizerFactory>((input: string) => {
    const matches = input.matchAll(regexp)

    const next = (): TokenReturn => matchToToken(matches.next().value)

    const iterator = function* (token: TokenReturn) {
      while ((token = next())) yield token
    }

    Object.defineProperty(next, Symbol.iterator, {
      value: iterator
    })

    return <TokenizerCallableIterable>next
  })
}

/**
 * Create a {@link TokenizerCallableIterable} for given input string.
 *
 * ```ts
 * // using next()
 * const next = tokenize('hello 123')
 * console.log(next()) // => {group: 'ident', value: 'hello', index: 0}
 * console.log(next()) // => {group: 'number', value: '123', index: 6}
 * console.log(next()) // => undefined
 *
 * // using for of
 * for (const token of tokenize('hello 123')) {
 *   console.log(token)
 *   // => {group: 'ident', value: 'hello', index: 0}
 *   // => {group: 'number', value: '123', index: 6}
 * }
 *
 * // using spread
 * const tokens = [...tokenize('hello 123')]
 * console.log(tokens)
 * // => [
 * //   {group: 'ident', value: 'hello', index: 0},
 * //   {group: 'number', value: '123', index: 6}
 * // ]
 * ```
 *
 * @param input The string to tokenize.
 */
export type TokenizerFactory = (input: string) => TokenizerCallableIterable

/**
 * Can be called to return next <a href="https://github.com/stagas/match-to-token#token">Token</a> or can be used as an
 * [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol)
 * on **for-of** and **spread** operations.
 */
export type TokenizerCallableIterable = (() => TokenReturn) &
  Iterable<TokenReturn>

export default createTokenizer
