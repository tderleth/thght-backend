module.exports = {
  coveragePathIgnorePatterns: ['/node_modules/'],
  modulePathIgnorePatterns: ['/src/server/test/__mocks__/'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', 'deploy/'],
};
