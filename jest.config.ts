import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  rootDir: "src",
  verbose: true,
  ...createDefaultPreset(),
};

export default jestConfig;
