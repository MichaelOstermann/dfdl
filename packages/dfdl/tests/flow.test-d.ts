import { describe, expectTypeOf, it } from "vitest"
import flow from "../src/flow"

describe("flow", () => {
    it("should handle type transformations", () => {
        expectTypeOf(flow(
            (num: number) => String(num),
            str => [str],
        )(1)).toEqualTypeOf<string[]>()
    })

    it("should infer first operation when used as parameter", () => {
        const example = <T>(value: number, fn: (value: number) => T): T => fn(value)
        expectTypeOf(example(1, flow(
            num => String(num),
            str => [str],
        ))).toEqualTypeOf<string[]>()
    })
})
