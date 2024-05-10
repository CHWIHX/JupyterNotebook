const { defaults: tsjPreset } = require('ts-jest/presets');
const { compilerOptions } = require('./tsconfig.test.json');

module.exports = {
    ...tsjPreset,
    transform: {
        ...tsjPreset.transform,
    },
    globals: {
        'ts-jest': {
            tsconfig: compilerOptions,
        },
    },
    moduleFileExtensions: ['ts', 'js'],
    modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/azureml-js-sdk/'],
    testEnvironment: "node"
};
