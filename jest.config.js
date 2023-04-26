/* eslint-disable */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    reporters: [
        [
            "jest-compact-reporter",
            { diffs: false, colours: true, showPassoingTest: false },
        ],
    ],
};
