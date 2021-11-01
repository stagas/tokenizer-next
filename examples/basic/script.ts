import { createTokenizer } from '../../src/index'

const tokenize = createTokenizer(
  /(?<ident>[a-z]+)/, // named groups determine token `kind`
  /(?<number>[0-9]+)/
)

// using next()
const next = tokenize('hello 123')
console.log(next()) // => {kind: 'ident', value: 'hello', index: 0}
console.log(next()) // => {kind: 'number', value: '123', index: 6}
console.log(next()) // => undefined

// using for of
for (const token of tokenize('hello 123')) {
  console.log(token)
  // => {kind: 'ident', value: 'hello', index: 0}
  // => {kind: 'number', value: '123', index: 6}
}

// using spread
const tokens = [...tokenize('hello 123')]
console.log(tokens)
// => [
//   {kind: 'ident', value: 'hello', index: 0},
//   {kind: 'number', value: '123', index: 6}
// ]
