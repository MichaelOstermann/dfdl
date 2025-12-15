import { describe, expect, it } from "vitest"
import { dfdlT } from "../src/dfdlT"

describe("dfdlT", () => {
    it("should work with data-first style", () => {
        const add = dfdlT<
            (b: number) => (a: number) => number,
            (a: number, b: number) => number
        >((a: number, b: number) => a + b)
        expect(add(1, 2)).toBe(3)
    })

    it("should work with data-last style", () => {
        const add = dfdlT<
            (b: number) => (a: number) => number,
            (a: number, b: number) => number
        >((a: number, b: number) => a + b)
        expect(add(2)(1)).toBe(3)
    })

    it("should respect arity argument", () => {
        const addA = dfdlT<
            (b: number) => (a: number) => number,
            (a: number, b: number) => number
        >((...args: [number, number]) => args[0] + args[1])
        expect(addA(1, 2)).toBe(Number.NaN)
        expect(() => addA(2)(1)).toThrow()

        const addB = dfdlT<
            (b: number) => (a: number) => number,
            (a: number, b: number) => number
        >((...args: [number, number]) => args[0] + args[1], 2)
        expect(addB(1, 2)).toBe(3)
        expect(addB(2)(1)).toBe(3)
    })

    it("should respect arity predicate", () => {
        const slice = dfdlT<
            (start: number, end?: number) => (str: string) => string,
            (str: string, start: number, end?: number) => string
        >(
            (str, start, end) => str.slice(start, end),
            args => typeof args[0] === "string",
        )

        expect(slice("Hello World!", 0, 5)).toBe("Hello")
        expect(slice("Hello World!", 6)).toBe("World!")

        expect(slice(0, 5)("Hello World!")).toBe("Hello")
        expect(slice(6)("Hello World!")).toBe("World!")
    })
})
