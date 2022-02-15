/* @type {
import('ts-jest/dist/types').InitialOptionsTsJest}
*/

module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}'
  ],
  coveragePathIgnorePatterns: [
    '/.*.stories.[jt]sx?$',
    '/.*.test.[jt]sx?$',
    '/node_modules'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
};
