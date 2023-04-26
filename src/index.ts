/**
 * A simple 2D vector with functions for performing mathematical operations.
 */
export class Vector2 {
    x: number;
    y: number;

    /**
     * Creates a 2D vector.
     * @param x The x component
     * @param y The y component
     */
    constructor(x: number, y: number) {
        if (typeof x !== "number" && typeof x !== "bigint")
            throw new TypeError(
                `Expected first argument of Vector2 to be a number or BigInt but got "${typeof x}"`,
            );

        if (typeof y !== "number" && typeof y !== "bigint")
            throw new TypeError(
                `Expected second argument of Vector2 to be a number or BigInt but got "${typeof y}"`,
            );

        this.x = x;
        this.y = y;
    }

    /**
     * Adds another Vector2 to itself, i.e A.add(B) will add the x and y component of B into A. The function returns a reference to A so it is chainable.
     * @param other The other Vector2 to add into this.
     * @returns Itself so it can be chained.
     * @example
     * ```
     * const A = new Vector2(0, 0);
     * A.add(new Vector2(1, 0));
     * // A = (1, 0)
     * ```
     *
     * The function is chainable as it returns a reference to the class instance.
     * ```
     * const A = new Vector2(0, 0);
     * A.add(new Vector2(1, 0)).add(new Vector2(0, 1));
     * // A = (1, 1)
     * ```
     */
    add(other: Vector2): Vector2 {
        if (!(other instanceof Vector2))
            throw TypeError("Can only add with a Vector2");

        this.x += other.x;
        this.y += other.y;
        return this;
    }
}
