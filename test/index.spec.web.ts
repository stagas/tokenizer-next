import Tokenizer from '../src'

describe('tokenizer(...regexps)', () => {
  it('should return an iterator function', () => {
    const tokenizer = Tokenizer(/(?<ident>[a-z]+)/)
    const next = tokenizer('hello world')
    let token
    token = next()!
    expect(token.value).toEqual('hello')
    expect(token.group).toEqual('ident')
    expect(token.index).toEqual(0)
    token = next()!
    expect(token.value).toEqual('world')
    expect(token.group).toEqual('ident')
    expect(token.index).toEqual(6)
    token = next()
    expect(token).toBeUndefined()
  })

  it('should also be an iterator instance', () => {
    const tokenizer = Tokenizer(/(?<ident>[a-z]+)/)
    const iterator = tokenizer('hello world')
    const tokens = [...iterator]
    expect(tokens.map(x => x!.value)).toEqual(['hello', 'world'])
  })

  it('should work with multiple named groups', () => {
    const tokenizer = Tokenizer(/(?<ident>[a-z]+)/, /(?<number>[0-9]+)/)
    const iterator = tokenizer('hello 123')
    const tokens = [...iterator]
    expect(tokens.map(x => [x!.group, x!.value])).toEqual([
      ['ident', 'hello'],
      ['number', '123']
    ])
  })

  it('should fail on unnamed groups', () => {
    const tokenizer = Tokenizer(/([a-z]+)/)
    const iterator = tokenizer('hello')
    expect(() => [...iterator]).toThrow('missing named groups')
  })
})
