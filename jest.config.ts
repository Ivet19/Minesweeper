import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  rootDir: "src",
  resolver: "ts-jest-resolver",
  verbose: true,
  ...createDefaultPreset(),
};

export default jestConfig;
