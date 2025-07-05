# dfdl

<Badge type="info" class="size">
    <span>Minified</span>
    <span>138 B</span>
</Badge>

<Badge type="info" class="size">
    <span>Minzipped</span>
    <span>85 B</span>
</Badge>

**Data-First / Data-Last oriented utilities.**

## Installation

::: code-group

```sh [npm]
npm install @monstermann/dfdl
```

```sh [pnpm]
pnpm add @monstermann/dfdl
```

```sh [yarn]
yarn add @monstermann/dfdl
```

```sh [bun]
bun add @monstermann/dfdl
```

:::

## API

### dfdl

- `dfdl(fn, arity?: boolean)`
- `dfdl(fn, isDataFirst: (args: IArguments) => boolean)`

Creates a function that can be used in both data-first and data-last styles. Types are automatically inferred from the input function.

::: code-group

```ts [Example]
import { dfdl } from "@monstermann/dfdl";

const add = dfdl((a: number, b: number) => a + b);
```

```ts [Data-first]
add(1, 2); // 3
```

```ts [Data-last]
add(2)(1); // 3
pipe(1, add(2)); // 3
```

:::

You can explicitly define the function arity if necessary, otherwise `fn.length` is used:

<!-- prettier-ignore -->
```ts
const add = dfdl(
    (a: number, b: number) => a + b,
    2, // [!code highlight]
);
```

And for functions with optional parameters, you can use a custom predicate:

::: code-group

```ts [Example]
import { dfdl } from "@monstermann/dfdl";

const slice = dfdl(
    (str: string, start: number, end?: number) => str.slice(start, end),
    (args) => typeof args[0] === "string", // [!code highlight]
);
```

```ts [Data-first]
slice("Hello World!", 0, 5); // "Hello"
slice("Hello World!", 6); // "World!"
```

```ts [Data-last]
slice(0, 5)("Hello World!"); // "Hello"
slice(6)("Hello World!"); // "World!"
```

:::

### dfdlT

- `dfdlT(fn, arity?: boolean)`
- `dfdlT(fn, isDataFirst: (args: IArguments) => boolean)`

Same as `dfdl` but allows explicit type definitions, which is in particularly useful if you want to use generics or additional overloads:

::: code-group

```ts [Example (Generics)]
import { dfdlT } from "@monstermann/dfdl";

const map = dfdlT<
    <T, U>(fn: (item: T) => U) => (arr: T[]) => U[],
    <T, U>(arr: T[], fn: (item: T) => U) => U[]
>((arr, fn) => arr.map(fn));
```

```ts [Example (Overloads)]
import { dfdlT } from "@monstermann/dfdl";

const map: {
    <T, U>(fn: (item: T) => U): (arr: T[]) => U[];
    <T, U>(arr: T[], fn: (item: T) => U): U[];
} = dfdlT(<T, U>(arr: T[], fn: (item: T) => U): U[] => arr.map(fn));
```

```ts [Data-first]
map([1, 2, 3], (x) => x * 2); // [2, 4, 6]
```

```ts [Data-last]
map((x) => x * 2)([1, 2, 3]); // [2, 4, 6]

pipe(
    [1, 2, 3],
    map((x) => x * 2),
); // [2, 4, 6]
```

:::

> [!TIP]
> Typically when defining your functions in this case, you should experience better type inference when using [`NoInfer`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4-beta/#the-noinfer-utility-type):

```ts
const map = dfdlT<
    <T, U>(fn: (item: NoInfer<T>) => U) => (arr: T[]) => U[],
    <T, U>(arr: T[], fn: (item: NoInfer<T>) => U) => U[]
>((arr, fn) => arr.map(fn));
```

### pipe

`pipe(input, ...fns)`

Pipes a value through a sequence of functions, passing the output of each function as input to the next.

```ts
import { pipe } from "@monstermann/dfdl";

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;

pipe(5, increment, double); // 12
```

### flow

`flow(...fns)(input)`

A data-last version of `pipe` for use with functions that accept a function parameter (like `map`, `filter`, etc.).

```ts
import { flow, pipe } from "@monstermann/dfdl";

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;

flow(increment, double)(1); // 4

[1, 2, 3, 4].map(flow(increment, double)); // [4, 6, 8, 10]

// In comparison, `pipe` can feel too verbose:

[1, 2, 3, 4].map((num) => pipe(num, increment, double)); // [4, 6, 8, 10]
```

## Credits

- [Effect/dual](https://github.com/Effect-TS/effect/blob/4ce4f824f6fdef492be1d35c05a490ffce518c89/packages/effect/src/Function.ts)
- [Remeda/purry](https://github.com/remeda/remeda/blob/main/packages/remeda/src/purry.ts)
- [Remeda/pipe](https://github.com/remeda/remeda/blob/main/packages/remeda/src/pipe.ts)
- [Remeda/piped](https://github.com/remeda/remeda/blob/main/packages/remeda/src/piped.ts)
- [biggyspender/ts-functional-pipe](https://github.com/biggyspender/ts-functional-pipe)
