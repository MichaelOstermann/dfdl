<div align="center">

<h1>dfdl</h1>

**Data-First / Data-Last oriented utilities.**

![Minified](https://img.shields.io/badge/Minified-1.60_KB-blue)
![Minzipped](https://img.shields.io/badge/Minzipped-402_B-blue)

</div>

## dual

Creates a function that can be used in a data-first or data-last style, making it suitable for usage in `pipe` or `flow`.

```ts
import { dual } from "@monstermann/dfdl";
// import dual from "@monstermann/dfdl/dual"

const sum = dual<
    (b: number) => (a: number) => number,
    (a: number, b: number) => number
>(2, (a, b) => a + b);

console.log(sum(2, 3)); // 5
console.log(sum(3)(2)); // 5
```

```ts
import { dual } from "@monstermann/dfdl";
// import dual from "@monstermann/dfdl/dual"

const sum: {
    (b: number): (a: number) => number;
    (a: number, b: number): number;
} = dual(2, (a: number, b: number): number => a + b);

console.log(sum(2, 3)); // 5
console.log(sum(3)(2)); // 5
```

## pipe

Pipes the value of an expression into a pipeline of functions.

```ts
import { pipe } from "@monstermann/dfdl";
// import pipe from "@monstermann/dfdl/pipe"

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;

pipe(5, increment, double); // => 12
```

## flow

A data-last version of `pipe` that could be used to provide more complex computations to functions that accept a function as a param (like `map`, `filter`, `groupBy`, etc.).

```ts
import { flow } from "@monstermann/dfdl";
// import flow from "@monstermann/dfdl/flow"

const increment = (x: number) => x + 1;
const double = (x: number) => x * 2;

[1, 2, 3, 4].map(flow(increment, double)); // => [4, 6, 8, 10]
```

# Credits

These utilities have been stolen from [Effect](https://effect.website/), with minor adaptations.

> [!NOTE]
> They are also available in [Remeda](https://remedajs.com/) in the form of [`purry`](https://remedajs.com/docs/#purry), [`pipe`](https://remedajs.com/docs/#pipe) and [`piped`](https://remedajs.com/docs/#piped).
