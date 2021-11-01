import { expect } from '@esm-bundle/chai'
import Tokenizer, { Token } from './'

describe('tokenizer(...regexps)', () => {
  it('should return an iterator function', () => {
    const tokenizer = Tokenizer(/(?<ident>[a-z]+)/)
    const next = tokenizer('hello world')
    let token: Token | void
    token = <Token>next()
    expect(token.value).to.equal('hello')
    expect(token.kind).to.equal('ident')
    expect(token.index).to.equal(0)
    token = <Token>next()
    expect(token.value).to.equal('world')
    expect(token.kind).to.equal('ident')
    expect(token.index).to.equal(6)
    token = next()
    expect(token).to.equal(undefined)
  })

  it('should also be an iterator instance', () => {
    const tokenizer = Tokenizer(/(?<ident>[a-z]+)/)
    const iterator = tokenizer('hello world')
    const tokens = [...iterator]
    expect(tokens.map(x => x.value)).to.deep.equal(['hello', 'world'])
  })

  it('should work with multiple named groups', () => {
    const tokenizer = Tokenizer(/(?<ident>[a-z]+)/, /(?<number>[0-9]+)/)
    const iterator = tokenizer('hello 123')
    const tokens = [...iterator]
    expect(tokens.map(x => [x.kind, x.value])).to.deep.equal([
      ['ident', 'hello'],
      ['number', '123']
    ])
  })

  it('should not return unnamed groups', () => {
    const tokenizer = Tokenizer(/([a-z]+)/)
    const iterator = tokenizer('hello')
    const tokens = [...iterator]
    expect(tokens.map(x => [x.kind, x.value])).to.deep.equal([])
  })
})
