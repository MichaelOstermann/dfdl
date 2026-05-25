import { describe, expect, it } from "vitest"
import { dfdl } from "../src/dfdl"

describe("dfdl", () => {
    it("should work with data-first style", () => {
        const add = dfdl((a: number, b: number) => a + b)
        expect(add(1, 2)).toBe(3)
    })

    it("should work with data-last style", () => {
        const add = dfdl((a: number, b: number) => a + b)
        expect(add(2)(1)).toBe(3)
    })

    it("should respect arity argument", () => {
        const add = dfdl((...args: [number, number]) => args[0] + args[1], 2)
        expect(add(1, 2)).toBe(3)
        expect(add(2)(1)).toBe(3)
    })

    it("should throw for arity 0", () => {
        expect(() => dfdl((...args: [number, number]) => args[0] + args[1])).toThrow(RangeError)
    })

    it("should respect arity predicate", () => {
        const slice = dfdl(
            (str: string, start: number, end?: number) => str.slice(start, end),
            args => typeof args[0] === "string",
        )

        expect(slice("Hello World!", 0, 5)).toBe("Hello")
        expect(slice("Hello World!", 6)).toBe("World!")

        expect(slice(0, 5)("Hello World!")).toBe("Hello")
        expect(slice(6)("Hello World!")).toBe("World!")
    })
})
