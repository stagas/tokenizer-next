<h1>
tokenizer-next <a href="https://npmjs.org/package/tokenizer-next"><img src="https://img.shields.io/badge/npm-v3.0.1-F00.svg?colorA=000"/></a> <a href="src"><img src="https://img.shields.io/badge/loc-27-FFF.svg?colorA=000"/></a> <a href="https://cdn.jsdelivr.net/npm/tokenizer-next@3.0.1/dist/tokenizer-next.min.js"><img src="https://img.shields.io/badge/brotli-478b-333.svg?colorA=000"/></a> <a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-F0B.svg?colorA=000"/></a>
</h1>

<p></p>

iterator based tokenizer for writing parsers

<h4>
<table><tr><td title="Triple click to select and copy paste">
<code>npm i tokenizer-next </code>
</td><td title="Triple click to select and copy paste">
<code>pnpm add tokenizer-next </code>
</td><td title="Triple click to select and copy paste">
<code>yarn add tokenizer-next</code>
</td></tr></table>
</h4>

## API

<p>  <details id="createTokenizer$1" title="Function" ><summary><span><a href="#createTokenizer$1">#</a></span>  <code><strong>createTokenizer</strong></code><em>(regexps)</em>     &ndash; Create a {@link TokenizerFactory} for the given RegExps.</summary>  <a href="src/index.ts#L19">src/index.ts#L19</a>  <ul>    <p>  <p>

To capture, RegExps must use a [named group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups).

```ts
const tokenize = createTokenizer(
  /(?<ident>[a-z]+)/, // named groups determine token `group`
  /(?<number>[0-9]+)/
)
```

</p>
  <details id="regexps$3" title="Parameter" ><summary><span><a href="#regexps$3">#</a></span>  <code><strong>regexps</strong></code>     &ndash; RegExps to match.
</summary>    <ul><p><span>RegExp</span>  []</p>        </ul></details>  <p><strong>createTokenizer</strong><em>(regexps)</em>  &nbsp;=&gt;  <ul><a href="#TokenizerFactory$4">TokenizerFactory</a></ul></p></p>    </ul></details><details id="Token$14" title="Class" ><summary><span><a href="#Token$14">#</a></span>  <code><strong>Token</strong></code>     &ndash; Token interface</summary>  <a href="src/match-to-token/dist/types/token.d.ts#L5">src/match-to-token/dist/types/token.d.ts#L5</a>  <ul>        <p>  <details id="constructor$20" title="Constructor" ><summary><span><a href="#constructor$20">#</a></span>  <code><strong>constructor</strong></code><em>(value, group, source)</em>    </summary>  <a href="src/match-to-token/dist/types/token.d.ts#L23">src/match-to-token/dist/types/token.d.ts#L23</a>  <ul>    <p>  <details id="new Token$21" title="ConstructorSignature" ><summary><span><a href="#new Token$21">#</a></span>  <code><strong>new Token</strong></code><em>()</em>    </summary>    <ul><p><a href="#Token$14">Token</a></p>      <p>  <details id="value$22" title="Parameter" ><summary><span><a href="#value$22">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="group$23" title="Parameter" ><summary><span><a href="#group$23">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="source$24" title="Parameter" ><summary><span><a href="#source$24">#</a></span>  <code><strong>source</strong></code>    </summary>    <ul><p><a href="#RegExpMatchArrayLike$39">RegExpMatchArrayLike</a></p>        </ul></details></p>  </ul></details></p>    </ul></details><details id="group$25" title="Property" ><summary><span><a href="#group$25">#</a></span>  <code><strong>group</strong></code>     &ndash; The group it matched.</summary>  <a href="src/match-to-token/dist/types/token.d.ts#L10">src/match-to-token/dist/types/token.d.ts#L10</a>  <ul><p>string</p>        </ul></details><details id="source$30" title="Property" ><summary><span><a href="#source$30">#</a></span>  <code><strong>source</strong></code>     &ndash; The input string.</summary>  <a href="src/match-to-token/dist/types/token.d.ts#L22">src/match-to-token/dist/types/token.d.ts#L22</a>  <ul><p><a href="#RegExpMatchArrayLike$39">RegExpMatchArrayLike</a></p>        </ul></details><details id="index$28" title="Accessor" ><summary><span><a href="#index$28">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/match-to-token/dist/types/token.d.ts#L18">src/match-to-token/dist/types/token.d.ts#L18</a>  <ul>        </ul></details><details id="value$26" title="Accessor" ><summary><span><a href="#value$26">#</a></span>  <code><strong>value</strong></code>    </summary>  <a href="src/match-to-token/dist/types/token.d.ts#L14">src/match-to-token/dist/types/token.d.ts#L14</a>  <ul>        </ul></details><details id="as$35" title="Method" ><summary><span><a href="#as$35">#</a></span>  <code><strong>as</strong></code><em>(value, group)</em>    </summary>  <a href="src/match-to-token/dist/types/token.d.ts#L25">src/match-to-token/dist/types/token.d.ts#L25</a>  <ul>    <p>    <details id="value$37" title="Parameter" ><summary><span><a href="#value$37">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="group$38" title="Parameter" ><summary><span><a href="#group$38">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>as</strong><em>(value, group)</em>  &nbsp;=&gt;  <ul><a href="#Token$14">Token</a></ul></p></p>    </ul></details><details id="is$31" title="Method" ><summary><span><a href="#is$31">#</a></span>  <code><strong>is</strong></code><em>(group, value)</em>    </summary>  <a href="src/match-to-token/dist/types/token.d.ts#L24">src/match-to-token/dist/types/token.d.ts#L24</a>  <ul>    <p>    <details id="group$33" title="Parameter" ><summary><span><a href="#group$33">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="value$34" title="Parameter" ><summary><span><a href="#value$34">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details>  <p><strong>is</strong><em>(group, value)</em>  &nbsp;=&gt;  <ul>boolean</ul></p></p>    </ul></details><details id="create$15" title="Method" ><summary><span><a href="#create$15">#</a></span>  <code><strong>create</strong></code><em>(value, group, source)</em>    </summary>  <a href="src/match-to-token/dist/types/token.d.ts#L6">src/match-to-token/dist/types/token.d.ts#L6</a>  <ul>    <p>    <details id="value$17" title="Parameter" ><summary><span><a href="#value$17">#</a></span>  <code><strong>value</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="group$18" title="Parameter" ><summary><span><a href="#group$18">#</a></span>  <code><strong>group</strong></code>    </summary>    <ul><p>string</p>        </ul></details><details id="source$19" title="Parameter" ><summary><span><a href="#source$19">#</a></span>  <code><strong>source</strong></code>    </summary>    <ul><p><a href="#RegExpMatchArrayLike$39">RegExpMatchArrayLike</a></p>        </ul></details>  <p><strong>create</strong><em>(value, group, source)</em>  &nbsp;=&gt;  <ul><a href="#Token$14">Token</a></ul></p></p>    </ul></details></p></ul></details>  <details id="RegExpMatchArrayLike$39" title="Interface" ><summary><span><a href="#RegExpMatchArrayLike$39">#</a></span>  <code><strong>RegExpMatchArrayLike</strong></code>    </summary>  <a href="src/match-to-token/dist/types/index.d.ts#L2">src/match-to-token/dist/types/index.d.ts#L2</a>  <ul>        <p>  <details id="index$40" title="Property" ><summary><span><a href="#index$40">#</a></span>  <code><strong>index</strong></code>    </summary>  <a href="src/match-to-token/dist/types/index.d.ts#L3">src/match-to-token/dist/types/index.d.ts#L3</a>  <ul><p>number</p>        </ul></details><details id="input$41" title="Property" ><summary><span><a href="#input$41">#</a></span>  <code><strong>input</strong></code>    </summary>  <a href="src/match-to-token/dist/types/index.d.ts#L4">src/match-to-token/dist/types/index.d.ts#L4</a>  <ul><p>string</p>        </ul></details></p></ul></details>  <details id="Token$13" title="TypeAlias" ><summary><span><a href="#Token$13">#</a></span>  <code><strong>Token</strong></code>    </summary>  <a href="src/match-to-token/dist/types/index.d.ts#L6">src/match-to-token/dist/types/index.d.ts#L6</a>  <ul><p><a href="#MatchToken$14">MatchToken</a> &amp; string</p>        </ul></details><details id="TokenizerCallableIterable$8" title="TypeAlias" ><summary><span><a href="#TokenizerCallableIterable$8">#</a></span>  <code><strong>TokenizerCallableIterable</strong></code>     &ndash; Can be called to return next &lt;a href=&quot;https://github.com/stagas/match-to-token#token&quot;&gt;Token&lt;/a&gt; or can be used as an
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">Iterable</a>
on <strong>for-of</strong> and <strong>spread</strong> operations.</summary>  <a href="src/index.ts#L74">src/index.ts#L74</a>  <ul><p><details id="__type$9" title="Function" ><summary><span><a href="#__type$9">#</a></span>  <em>()</em>    </summary>    <ul>    <p>      <p><strong></strong><em>()</em>  &nbsp;=&gt;  <ul><a href="#Token$13">Token</a></ul></p></p>    </ul></details> &amp; <span>Iterable</span>&lt;<a href="#Token$13">Token</a>&gt;</p>        </ul></details><details id="TokenizerFactory$4" title="TypeAlias" ><summary><span><a href="#TokenizerFactory$4">#</a></span>  <code><strong>TokenizerFactory</strong></code>    </summary>  <a href="src/index.ts#L67">src/index.ts#L67</a>  <ul><p><details id="__type$5" title="Function" ><summary><span><a href="#__type$5">#</a></span>  <em>(input)</em>     &ndash; Create a {@link TokenizerCallableIterable} for given input string.</summary>    <ul>    <p>  <p>

```ts
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
```

</p>
  <details id="input$7" title="Parameter" ><summary><span><a href="#input$7">#</a></span>  <code><strong>input</strong></code>     &ndash; The string to tokenize.
</summary>    <ul><p>string</p>        </ul></details>  <p><strong></strong><em>(input)</em>  &nbsp;=&gt;  <ul><a href="#TokenizerCallableIterable$8">TokenizerCallableIterable</a></ul></p></p>    </ul></details></p>        </ul></details><details id="createTokenizer$1" title="Function" ><summary><span><a href="#createTokenizer$1">#</a></span>  <code><strong>createTokenizer</strong></code><em>(regexps)</em>     &ndash; Create a {@link TokenizerFactory} for the given RegExps.</summary>  <a href="src/index.ts#L19">src/index.ts#L19</a>  <ul>    <p>  <p>

To capture, RegExps must use a [named group](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges#using_named_groups).

```ts
const tokenize = createTokenizer(
  /(?<ident>[a-z]+)/, // named groups determine token `group`
  /(?<number>[0-9]+)/
)
```

</p>
  <details id="regexps$3" title="Parameter" ><summary><span><a href="#regexps$3">#</a></span>  <code><strong>regexps</strong></code>     &ndash; RegExps to match.
</summary>    <ul><p><span>RegExp</span>  []</p>        </ul></details>  <p><strong>createTokenizer</strong><em>(regexps)</em>  &nbsp;=&gt;  <ul><a href="#TokenizerFactory$4">TokenizerFactory</a></ul></p></p>    </ul></details></p>

## Credits

- [match-to-token](https://npmjs.org/package/match-to-token) by [stagas](https://github.com/stagas) &ndash; transform a RegExp named group match to a more useful object

## Contributing

[Fork](https://github.com/stagas/tokenizer-next/fork) or [edit](https://github.dev/stagas/tokenizer-next) and submit a PR.

All contributions are welcome!

## License

<a href="LICENSE">MIT</a> &copy; 2022 [stagas](https://github.com/stagas)
