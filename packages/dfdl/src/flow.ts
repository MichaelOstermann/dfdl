/* eslint-disable prefer-rest-params */

/**
 * `flow(...fns)(input)`
 *
 * A data-last version of `pipe` for use with functions that accept a function parameter (like `map`, `filter`, etc.).
 *
 * ```ts
 * import { flow, pipe } from "@monstermann/dfdl";
 *
 * const increment = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 *
 * flow(increment, double)(1); // 4
 *
 * [1, 2, 3, 4].map(flow(increment, double)); // [4, 6, 8, 10]
 *
 * // In comparison, `pipe` can feel too verbose:
 *
 * [1, 2, 3, 4].map((num) => pipe(num, increment, double)); // [4, 6, 8, 10]
 * ```
 */
export default function flow<A, B>(ab: (a: A) => B): (a: A) => B
export default function flow<A, B, C>(ab: (a: A) => B, bc: (b: B) => C): (a: A) => C
export default function flow<A, B, C, D>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D): (a: A) => D
export default function flow<A, B, C, D, E>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E): (a: A) => E
export default function flow<A, B, C, D, E, F>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F): (a: A) => F
export default function flow<A, B, C, D, E, F, G>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G): (a: A) => G
export default function flow<A, B, C, D, E, F, G, H>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H): (a: A) => H
export default function flow<A, B, C, D, E, F, G, H, I>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I): (a: A) => I
export default function flow<A, B, C, D, E, F, G, H, I, J>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J): (a: A) => J
export default function flow<A, B, C, D, E, F, G, H, I, J, K>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K): (a: A) => K
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L): (a: A) => L
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M): (a: A) => M
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N): (a: A) => N
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O): (a: A) => O
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P): (a: A) => P
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q): (a: A) => Q
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q, qr: (q: Q) => R): (a: A) => R
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q, qr: (q: Q) => R, rs: (r: R) => S): (a: A) => S
export default function flow<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T>(ab: (a: A) => B, bc: (b: B) => C, cd: (c: C) => D, de: (d: D) => E, ef: (e: E) => F, fg: (f: F) => G, gh: (g: G) => H, hi: (h: H) => I, ij: (i: I) => J, jk: (j: J) => K, kl: (k: K) => L, lm: (l: L) => M, mn: (m: M) => N, no: (n: N) => O, op: (o: O) => P, pq: (p: P) => Q, qr: (q: Q) => R, rs: (r: R) => S, st: (s: S) => T): (a: A) => T
export default function flow(
    ab: any,
    bc?: any,
    cd?: any,
    de?: any,
    ef?: any,
    fg?: any,
    gh?: any,
    hi?: any,
    ij?: any,
): any {
    switch (arguments.length) {
        case 1:
            return ab
        case 2:
            return function (a: unknown) {
                return bc(ab(a))
            }
        case 3:
            return function (a: unknown) {
                return cd(bc(ab(a)))
            }
        case 4:
            return function (a: unknown) {
                return de(cd(bc(ab(a))))
            }
        case 5:
            return function (a: unknown) {
                return ef(de(cd(bc(ab(a)))))
            }
        case 6:
            return function (a: unknown) {
                return fg(ef(de(cd(bc(ab(a))))))
            }
        case 7:
            return function (a: unknown) {
                return gh(fg(ef(de(cd(bc(ab(a)))))))
            }
        case 8:
            return function (a: unknown) {
                return hi(gh(fg(ef(de(cd(bc(ab(a))))))))
            }
        case 9:
            return function (a: unknown) {
                return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))
            }
        default: {
            const fns: any = arguments
            const len = fns.length
            return function (a: unknown) {
                for (let i = 0; i < len; i++) {
                    a = fns[i](a)
                }
                return a
            }
        }
    }
}
