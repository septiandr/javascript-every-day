// jest.config.js
module.exports = {
  verbose: true, // menampilkan detail test
  testEnvironment: "node", // environment test (node / jsdom)
  roots: ["<rootDir>/test"], // folder root untuk cari test / source file

  passWithNoTests: true,
  collectCoverage: true, // mengumpulkan coverage
  coverageDirectory: "coverage", // output coverage
  collectCoverageFrom: ["src/**/*.js"],
};
