/* eslint-disable prefer-rest-params */

/**
 * Creates a function that can be used in a data-first or data-last style,
 * making it suitable for usage in `pipe` or `flow`.
 *
 * The first parameter to `dual` is the arity of the uncurried function.
 *
 * **Example**
 *
 * ```ts
 * const sum = dual<
 *   (b: number) => (a: number) => number,
 *   (a: number, b: number) => number
 * >(2, (a, b) => a + b)
 *
 * sum(2, 3) // => 5
 * pipe(2, sum(3)) // => 5
 * ```
 *
 * **Example** (Using call signatures to define the overloads)
 *
 * ```ts
 * const sum: {
 *   (b: number): (a: number) => number
 *   (a: number, b: number): number
 * } = dual(2, (a: number, b: number): number => a + b)
 *
 * sum(2, 3) // => 5
 * pipe(2, sum(3)) // => 5
 * ```
 */
export default function dual<
    DataLast extends (...args: Array<any>) => any,
    DataFirst extends (...args: Array<any>) => any,
>(
    arity: Parameters<DataFirst>["length"],
    body: DataFirst,
): DataLast & DataFirst {
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
            } as any

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
