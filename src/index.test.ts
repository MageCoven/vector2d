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
                expect(new Vector2(value, value)).toThrow();
            });
        });
        describe("That are numbers should not throw an error", () => {
            test.each([
                [typeof 0, 0],
                [typeof BigInt(0), BigInt(0)],
            ])("Such as %ss", (type, value) => {
                // @ts-expect-error explicitly testing for type violations
                expect(new Vector2(value, value)).not.toThrow();
            });
        });
    });
});
