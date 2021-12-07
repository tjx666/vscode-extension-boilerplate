const { resolve } = require;

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'prettier',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx', '.js', '.json'],
            },
            typescript: {
                project: [
                    resolve('./src/tsconfig.json'),
                    resolve('./scripts/tsconfig.json'),
                    resolve('./test/tsconfig.json'),
                ],
            },
        },
    },
    rules: {
        'import/extensions': OFF,

        '@typescript-eslint/explicit-function-return-type': OFF,
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,

        'unicorn/consistent-function-scoping': OFF,
        'unicorn/filename-case': [
            ERROR,
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        'unicorn/import-style': OFF,
        'unicorn/no-abusive-eslint-disable': OFF,
        'unicorn/no-array-for-each': OFF,
        'unicorn/no-null': OFF,
        'unicorn/no-process-exit': OFF,
        'unicorn/prefer-module': OFF,
        'unicorn/prefer-node-protocol': OFF,
        'unicorn/prevent-abbreviations': OFF,

        'func-names': OFF,
        'max-classes-per-file': OFF,
        'no-bitwise': OFF,
        'no-console': OFF,
        'no-param-reassign': OFF,
        'no-plusplus': OFF,
        'no-unused-expressions': OFF,
    },
    overrides: [
        {
            files: ['test/**/*.ts'],
            rules: {
                'import/prefer-default-export': OFF,
            },
        },
        {
            files: ['scripts/**/*.ts'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],
};
