import { createTokenizer } from '../src'

const tokenize = createTokenizer(
  /(?<ident>[a-z]+)/, // named groups determine token `group`
  /(?<number>[0-9]+)/
)

// using next()
const next = tokenize('hello 123')
console.log(next()) // => {group: 'ident', value: 'hello', index: 0}
console.log(next()) // => {group: 'number', value: '123', index: 6}
console.log(next()) // => undefined

// using for of
for (const token of tokenize('hello 123')) {
  console.log(token)
  // => {group: 'ident', value: 'hello', index: 0}
  // => {group: 'number', value: '123', index: 6}
}

// using spread
const tokens = [...tokenize('hello 123')]
console.log(tokens)
// => [
//   {group: 'ident', value: 'hello', index: 0},
//   {group: 'number', value: '123', index: 6}
// ]
