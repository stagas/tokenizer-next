<h1 align="center">tokenizer-next</h1>

<p align="center">
iterator based tokenizer for writing parsers
</p>

<p align="center">
   <a href="#Install">    🔧 <strong>Install</strong></a>
 · <a href="examples">    🧩 <strong>Examples</strong></a>
 · <a href="docs">        📜 <strong>API docs</strong></a>
 · <a href="https://github.com/stagas/tokenizer-next/releases"> 🔥 <strong>Releases</strong></a>
 · <a href="#Contribute"> 💪🏼 <strong>Contribute</strong></a>
 · <a href="https://github.com/stagas/tokenizer-next/issues">   🖐️ <strong>Help</strong></a>
</p>

---

## Install

```sh
$ npm i tokenizer-next
```

## Usage

```js
import { createTokenizer } from 'tokenizer-next'

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
```

## Contribute

[Fork](https://github.com/stagas/tokenizer-next/fork) or
[edit](https://github.dev/stagas/tokenizer-next) and submit a PR.

All contributions are welcome!

## License

MIT &copy; 2021
[stagas](https://github.com/stagas)
