module.exports = {
  rootDir: './',
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testMatch: ['**/?(*.)test.[jt]s?(x)']
};
