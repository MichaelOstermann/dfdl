import type { AnyFn } from "./types"
import { dfdlT } from "./dfdlT"

type InferHead<T extends AnyFn> = Parameters<T> extends [infer U, ...infer _] ? U : never
type InferTail<T extends AnyFn> = Parameters<T> extends [infer _, ...infer U] ? U : never
type Dfdl<T extends AnyFn> = ((...args: InferTail<T>) => (target: InferHead<T>) => ReturnType<T>) & T

/**
 * - `dfdl(fn, arity?: boolean)`
 * - `dfdl(fn, isDataFirst: (args: IArguments) => boolean)`
 *
 * Creates a function that can be used in both data-first and data-last styles. Types are automatically inferred from the input function.
 *
 * ```ts
 * import { dfdl } from "@monstermann/dfdl";
 *
 * const add = dfdl((a: number, b: number) => a + b);
 *
 * // Data-first
 * add(1, 2); // 3
 *
 * // Data-last
 * add(2)(1); // 3
 * pipe(1, add(2)); // 3
 * ```
 *
 * You can explicitly define the function arity if necessary, otherwise `fn.length` is used:
 *
 * ```ts
 * const add = dfdl(
 *     (a: number, b: number) => a + b,
 *     2, // [!code highlight]
 * );
 * ```
 *
 * And for functions with optional parameters, you can use a custom predicate:
 *
 * ```ts
 * import { dfdl } from "@monstermann/dfdl";
 *
 * const slice = dfdl(
 *     (str: string, start: number, end?: number) => str.slice(start, end),
 *     (args) => typeof args[0] === "string", // [!code highlight]
 * );
 *
 * // Data-first
 * slice("Hello World!", 0, 5); // "Hello"
 * slice("Hello World!", 6); // "World!"
 *
 * // Data-last
 * slice(0, 5)("Hello World!"); // "Hello"
 * slice(6)("Hello World!"); // "World!"
 * ```
 */
export const dfdl: {
    <T extends AnyFn>(fn: T, arity?: Parameters<T>["length"]): Dfdl<T>
    <T extends AnyFn>(fn: T, isDataFirst: (args: IArguments) => boolean): Dfdl<T>
} = function (fn: any, arity: any = fn.length): any {
    return dfdlT(fn, arity)
}

const slice = dfdl(
    (str: string, start: number, end?: number) => str.slice(start, end),
    args => typeof args[0] === "string",
)

slice("Hello World!", 0, 5) // "Hello"
slice(0, 5)("Hello World!") // "Hello"

slice("Hello World!", 6) // "World!"
slice(6)("Hello World!") // "World!"
