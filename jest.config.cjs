module.exports = {
  moduleNameMapper: {
    "^~/(.*)$": "<rootDir>/app/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/*.spec.ts"],
};
