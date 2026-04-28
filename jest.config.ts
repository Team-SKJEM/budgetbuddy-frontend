/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-fixed-jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  moduleNameMapper: {
    "\\.(png|jpe?g|gif|webp|svg)$": "<rootDir>/src/tests/fileMock.ts",
  },
};
