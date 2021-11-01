# tokenizer-next

## Table of contents

### References

- [default](README.md#default)

### Interfaces

- [Token](interfaces/Token.md)

### Type aliases

- [TokenizerCallableIterable](README.md#tokenizercallableiterable)
- [TokenizerFactory](README.md#tokenizerfactory)

### Functions

- [createTokenizer](README.md#createtokenizer)

## References

### default

Renames and re-exports [createTokenizer](README.md#createtokenizer)

## Type aliases

### TokenizerCallableIterable

Ƭ **TokenizerCallableIterable**: () => [`Token`](interfaces/Token.md) \| `void` & `Iterable`<[`Token`](interfaces/Token.md)\>

Can be called to return next [Token](interfaces/Token.md) or can be used as an [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol).

#### Defined in

[index.ts:71](https://github.com/stagas/tokenizer-next/blob/main/src/index.ts#L71)

___

### TokenizerFactory

Ƭ **TokenizerFactory**: (`input`: `string`) => [`TokenizerCallableIterable`](README.md#tokenizercallableiterable)

#### Type declaration

▸ (`input`): [`TokenizerCallableIterable`](README.md#tokenizercallableiterable)

Create a [TokenizerCallableIterable](README.md#tokenizercallableiterable) for given input string.

```js
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

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `string` | The string to tokenize. |

##### Returns

[`TokenizerCallableIterable`](README.md#tokenizercallableiterable)

#### Defined in

[index.ts:66](https://github.com/stagas/tokenizer-next/blob/main/src/index.ts#L66)

## Functions

### createTokenizer

▸ `Const` **createTokenizer**(...`regexps`): [`TokenizerFactory`](README.md#tokenizerfactory)

Create a [TokenizerFactory](README.md#tokenizerfactory) for the given RegExps.

RegExps must use a [named group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups)
to capture and must not have any flags set:

```js
const tokenize = createTokenizer(
  /(?<ident>[a-z]+)/,
  /(?<number>[0-9]+)/
)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...regexps` | `RegExp`[] | RegExps to match. |

#### Returns

[`TokenizerFactory`](README.md#tokenizerfactory)

#### Defined in

[index.ts:18](https://github.com/stagas/tokenizer-next/blob/main/src/index.ts#L18)
