/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off', 
    'no-unused-vars': 'off',
    quotes: ['error', 'single'],
    'vue/multi-word-component-names': 'off' , // 允许多个单词的组件名
    indent: ['error', 2],
  }
}
