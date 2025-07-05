/* eslint-disable prefer-rest-params */

import type { AnyFn } from "./types"

/**
 * - `dfdlT(fn, arity?: boolean)`
 * - `dfdlT(fn, isDataFirst: (args: IArguments) => boolean)`
 *
 * Same as `dfdl` but allows explicit type definitions, which is in particularly useful if you want to use generics or additional overloads:
 *
 * ```ts
 * import { dfdlT } from "@monstermann/dfdl";
 *
 * // Using generics:
 * const map = dfdlT<
 *     <T, U>(fn: (item: T) => U) => (arr: T[]) => U[],
 *     <T, U>(arr: T[], fn: (item: T) => U) => U[]
 * >((arr, fn) => arr.map(fn));
 *
 * // Using overloads:
 * const map: {
 *     <T, U>(fn: (item: T) => U): (arr: T[]) => U[];
 *     <T, U>(arr: T[], fn: (item: T) => U): U[];
 * } = dfdlT(<T, U>(arr: T[], fn: (item: T) => U): U[] => arr.map(fn));
 *
 * // Data-first
 * map([1, 2, 3], (x) => x * 2); // [2, 4, 6]
 *
 * // Data-last
 * map((x) => x * 2)([1, 2, 3]); // [2, 4, 6]
 *
 * pipe(
 *     [1, 2, 3],
 *     map((x) => x * 2),
 * ); // [2, 4, 6]
 * ```
 *
 * > [!TIP]
 * > Typically when defining your functions in this case, you should experience better type inference when using [`NoInfer`](https://devblogs.microsoft.com/typescript/announcing-typescript-5-4-beta/#the-noinfer-utility-type):
 *
 * ```ts
 * const map = dfdlT<
 *     <T, U>(fn: (item: NoInfer<T>) => U) => (arr: T[]) => U[],
 *     <T, U>(arr: T[], fn: (item: NoInfer<T>) => U) => U[]
 * >((arr, fn) => arr.map(fn));
 * ```
 */
export const dfdlT: {
    <DataLast extends AnyFn, DataFirst extends AnyFn>(body: DataFirst, arity?: Parameters<DataFirst>["length"]): DataLast & DataFirst
    <DataLast extends AnyFn, DataFirst extends AnyFn>(body: DataFirst, isDataFirst: (args: IArguments) => boolean): DataLast & DataFirst
} = function (body: any, arity: any = body.length): any {
    if (typeof arity === "function") {
        return function () {
            if (arity(arguments)) {
                // @ts-expect-error ignore
                return body.apply(this, arguments)
            }
            return ((self: any) => body(self, ...arguments)) as any
        }
    }

    switch (arity) {
        case 0:
        case 1:
            return function (a: any) {
                if (arguments.length >= 1) {
                    return body(a)
                }
                return function (self: any) {
                    return body(self)
                }
            }

        case 2:
            return function (a: any, b: any) {
                if (arguments.length >= 2) {
                    return body(a, b)
                }
                return function (self: any) {
                    return body(self, a)
                }
            } as any

        case 3:
            return function (a: any, b: any, c: any) {
                if (arguments.length >= 3) {
                    return body(a, b, c)
                }
                return function (self: any) {
                    return body(self, a, b)
                }
            } as any

        case 4:
            return function (a: any, b: any, c: any, d: any) {
                if (arguments.length >= 4) {
                    return body(a, b, c, d)
                }
                return function (self: any) {
                    return body(self, a, b, c)
                }
            } as any

        case 5:
            return function (a: any, b: any, c: any, d: any, e: any) {
                if (arguments.length >= 5) {
                    return body(a, b, c, d, e)
                }
                return function (self: any) {
                    return body(self, a, b, c, d)
                }
            } as any

        default:
            return function () {
                if (arguments.length >= arity) {
                    // @ts-expect-error ignore
                    return body.apply(this, arguments)
                }

                const args = arguments
                return function (self: any) {
                    return body(self, ...args)
                }
            } as any
    }
}
