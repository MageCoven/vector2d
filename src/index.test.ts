import { Vector2 } from ".";

describe("Vector2", () => {
    test("Create Vector2", () => {
        expect(Vector2).toBeDefined();

        const vector = new Vector2(0, 1);
        expect(vector).toBeDefined();
        expect(vector.x).toBe(0);
        expect(vector.y).toBe(1);
    });
});
