import { describe, expect, it } from "vitest"
import flow from "../src/flow"

describe("flow", () => {
    it("should flow a single operation", () => {
        expect(flow((x: number) => x * 2)(1)).toBe(2)
    })

    it("should flow 1 operation", () => {
        expect(flow(
            (x: number) => x + 1,
        )(1)).toBe(2)
    })

    it("should flow 2 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
        )(1)).toBe(4)
    })

    it("should flow 3 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
        )(1)).toBe(7)
    })

    it("should flow 4 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
        )(1)).toBe(11)
    })

    it("should flow 5 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
            x => x + 5,
        )(1)).toBe(16)
    })

    it("should flow 6 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
            x => x + 5,
            x => x + 6,
        )(1)).toBe(22)
    })

    it("should flow 7 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
            x => x + 5,
            x => x + 6,
            x => x + 7,
        )(1)).toBe(29)
    })

    it("should flow 8 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
            x => x + 5,
            x => x + 6,
            x => x + 7,
            x => x + 8,
        )(1)).toBe(37)
    })

    it("should flow 9 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
            x => x + 5,
            x => x + 6,
            x => x + 7,
            x => x + 8,
            x => x + 9,
        )(1)).toBe(46)
    })

    it("should flow 10 operations", () => {
        expect(flow(
            (x: number) => x + 1,
            x => x + 2,
            x => x + 3,
            x => x + 4,
            x => x + 5,
            x => x + 6,
            x => x + 7,
            x => x + 8,
            x => x + 9,
            x => x + 10,
        )(1)).toBe(56)
    })
})
