/** @type {import('ts-jest').JestConfigWithTsJest} */

// eslint-disable-next-line
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testEnvironmentOptions: {
    NODE_ENV: "test",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
