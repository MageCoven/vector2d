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

    add(other: Vector2): Vector2 {
        if (!(other instanceof Vector2))
            throw TypeError("Can only add with a Vector2");

        this.x += other.x;
        this.y += other.y;
        return this;
    }
}
