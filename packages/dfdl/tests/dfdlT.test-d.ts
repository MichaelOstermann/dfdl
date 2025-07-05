import { describe, expectTypeOf, it } from "vitest"
import { dfdlT } from "../src"

describe("dfdlT", () => {
    it("should infer data-first style", () => {
        const example = dfdlT<
            (b: string) => (a: number) => [number, string],
            (a: number, b: string) => [number, string]
        >((a, b) => [a, b])
        expectTypeOf(example(1, "1")).toEqualTypeOf<[number, string]>()
    })

    it("should infer data-last style", () => {
        const example = dfdlT<
            (b: string) => (a: number) => [number, string],
            (a: number, b: string) => [number, string]
        >((a, b) => [a, b])
        expectTypeOf(example("1")).toEqualTypeOf<(value: number) => [number, string]>()
        expectTypeOf(example("1")(1)).toEqualTypeOf<[number, string]>()
    })

    it("should error when invalid arity was used", () => {
        dfdlT<
            (b: string) => (a: number) => [number, string],
            (a: number, b: string) => [number, string]
        >(
                (a, b) => [a, b],
                // @ts-expect-error invalid
                1,
                )
    })
})
