import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from 'eslint/config';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const sourceFiles = ['**/*.{js,mjs,cjs,ts,tsx}'];

const stylisticRules = {
  '@stylistic/array-bracket-spacing': ['warn', 'never'],
  '@stylistic/arrow-parens': ['warn', 'always'],
  '@stylistic/arrow-spacing': 'warn',
  '@stylistic/block-spacing': 'warn',
  '@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
  '@stylistic/comma-dangle': ['warn', 'always-multiline'],
  '@stylistic/comma-spacing': 'warn',
  '@stylistic/comma-style': ['warn', 'last'],
  '@stylistic/computed-property-spacing': ['warn', 'never'],
  '@stylistic/eol-last': ['warn', 'always'],
  '@stylistic/indent': ['warn', 2, { SwitchCase: 1 }],
  '@stylistic/jsx-curly-spacing': ['warn', 'never'],
  '@stylistic/jsx-equals-spacing': ['warn', 'never'],
  '@stylistic/jsx-indent-props': ['warn', 2],
  '@stylistic/jsx-quotes': ['warn', 'prefer-double'],
  '@stylistic/jsx-tag-spacing': ['warn', { afterOpening: 'never', beforeClosing: 'never', beforeSelfClosing: 'always', closingSlash: 'never' }],
  '@stylistic/key-spacing': ['warn', { beforeColon: false, afterColon: true }],
  '@stylistic/keyword-spacing': 'warn',
  '@stylistic/member-delimiter-style': ['warn', { multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: false } }],
  '@stylistic/no-mixed-spaces-and-tabs': 'warn',
  '@stylistic/no-multi-spaces': 'warn',
  '@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],
  '@stylistic/no-tabs': 'warn',
  '@stylistic/no-trailing-spaces': 'warn',
  '@stylistic/no-whitespace-before-property': 'warn',
  '@stylistic/object-curly-spacing': ['warn', 'always'],
  '@stylistic/padded-blocks': ['warn', 'never'],
  '@stylistic/quotes': ['warn', 'single', { avoidEscape: true, allowTemplateLiterals: 'never' }],
  '@stylistic/rest-spread-spacing': ['warn', 'never'],
  '@stylistic/semi': ['warn', 'always'],
  '@stylistic/semi-spacing': 'warn',
  '@stylistic/space-before-blocks': 'warn',
  '@stylistic/space-before-function-paren': ['warn', { anonymous: 'always', asyncArrow: 'always', named: 'never' }],
  '@stylistic/space-in-parens': ['warn', 'never'],
  '@stylistic/space-infix-ops': 'warn',
  '@stylistic/space-unary-ops': 'warn',
  '@stylistic/template-curly-spacing': ['warn', 'never'],
  '@stylistic/type-annotation-spacing': 'warn',
  '@stylistic/type-generic-spacing': 'warn',
  '@stylistic/type-named-tuple-spacing': 'warn',
};

export default defineConfig(
  globalIgnores(['build/**', '.docusaurus/**', 'node_modules/**', 'static/**']),
  {
    files: sourceFiles,
    plugins: { '@stylistic': stylistic },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: stylisticRules,
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    extends: [js.configs.recommended],
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
);
