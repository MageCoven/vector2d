import { Vector2 } from ".";

describe("Vector2", () => {
    describe("Has correctly initialized property", () => {
        test.each([["x"], ["y"]])("%s", (property) => {
            expect(new Vector2(0, 0)).toHaveProperty(property, 0);
        });
    });

    describe("Created with arguments", () => {
        describe("That are not numbers should throw an error", () => {
            test.each([
                [typeof "0", "0"],
                [
                    typeof (() => {
                        /**/
                    }),
                    () => {
                        /**/
                    },
                ],
                [typeof undefined, undefined],
                [typeof true, true],
                [typeof Symbol("symbol"), Symbol("symbol")],
                [typeof {}, {}],
            ])("Such as %ss", (type, value) => {
                // @ts-expect-error explicitly testing for type violations
                expect(() => new Vector2(value, value)).toThrow();
                // @ts-expect-error explicitly testing for type violations
                expect(() => new Vector2(0, value)).toThrow();
                // @ts-expect-error explicitly testing for type violations
                expect(() => new Vector2(value, 0)).toThrow();
            });
        });
        describe("That are numbers should not throw an error", () => {
            test.each([
                [typeof 0, 0],
                [typeof BigInt(0), BigInt(0)],
            ])("Such as %ss", (type, value) => {
                // @ts-expect-error explicitly testing for type violations
                expect(() => new Vector2(value, value)).not.toThrow();
            });
        });
    });

    describe("Adding vector A and B", () => {
        test("Vector2.add() passed a Vector2 does not throw an error", () => {
            expect(() =>
                new Vector2(0, 0).add(new Vector2(0, 0)),
            ).not.toThrow();
        });

        test("Vector2.add() passed a non Vector2 throws an error", () => {
            // @ts-expect-error explicitly testing for type violations
            expect(() => new Vector2(0, 0).add("")).toThrow();
        });

        test("Returns a Vector2", () => {
            const A = new Vector2(0, 0);
            const B = new Vector2(1, 1);
            expect(A.add(B)).toBeInstanceOf(Vector2);
        });

        test("Returns A and is thus chainable", () => {
            const A = new Vector2(0, 0);
            const B = new Vector2(1, 1);
            expect(A.add(B)).toBe(A);
        });

        test.each([
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 0],
            [0, 0, 0, 1, 0, 1],
            [-1, 0, 0, 0, -1, 0],
            [0, -1, 0, 0, 0, -1],
            [0, 0, -1, 0, -1, 0],
            [0, 0, 0, -1, 0, -1],
            [1, 0, 1, 0, 2, 0],
            [0, 1, 0, 1, 0, 2],
            [1, 0, -1, 0, 0, 0],
            [0, 1, 0, -1, 0, 0],
            [-1, 0, 1, 0, 0, 0],
            [0, -1, 0, 1, 0, 0],
        ])(
            "Where A = (%d, %d) and B = (%d, %d) should equal (%d, %d)",
            (a_x, a_y, b_x, b_y, expected_x, expected_y) => {
                const A = new Vector2(a_x, a_y);
                const B = new Vector2(b_x, b_y);
                A.add(B);
                expect(A.x).toBe(expected_x);
                expect(A.y).toBe(expected_y);
            },
        );
    });

    describe("Subtracting vector B from A", () => {
        test("Vector2.sub() passed a Vector2 does not throw an error", () => {
            expect(() =>
                new Vector2(0, 0).sub(new Vector2(0, 0)),
            ).not.toThrow();
        });

        test("Vector2.sub() passed a non Vector2 throws an error", () => {
            // @ts-expect-error explicitly testing for type violations
            expect(() => new Vector2(0, 0).sub("")).toThrow();
        });

        test("Returns a Vector2", () => {
            const A = new Vector2(0, 0);
            const B = new Vector2(1, 1);
            expect(A.sub(B)).toBeInstanceOf(Vector2);
        });

        test("Returns A and is thus chainable", () => {
            const A = new Vector2(0, 0);
            const B = new Vector2(1, 1);
            expect(A.sub(B)).toBe(A);
        });

        test.each([
            [0, 0, 0, 0, 0, 0],
            [1, 0, 0, 0, 1, 0],
            [0, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, -1, 0],
            [0, 0, 0, 1, 0, -1],
            [-1, 0, 0, 0, -1, 0],
            [0, -1, 0, 0, 0, -1],
            [0, 0, -1, 0, 1, 0],
            [0, 0, 0, -1, 0, 1],
            [1, 0, 1, 0, 0, 0],
            [0, 1, 0, 1, 0, 0],
            [1, 0, -1, 0, 2, 0],
            [0, 1, 0, -1, 0, 2],
            [-1, 0, 1, 0, -2, 0],
            [0, -1, 0, 1, 0, -2],
        ])(
            "Where A = (%d, %d) and B = (%d, %d) should equal (%d, %d)",
            (a_x, a_y, b_x, b_y, expected_x, expected_y) => {
                const A = new Vector2(a_x, a_y);
                const B = new Vector2(b_x, b_y);
                A.sub(B);
                expect(A.x).toBe(expected_x);
                expect(A.y).toBe(expected_y);
            },
        );
    });
});
