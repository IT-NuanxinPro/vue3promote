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
    'no-console': 'off',    // 禁止使用console
    'no-debugger': 'off',  // 禁止使用debugger
    'no-unused-vars': 'off', // 未使用的变量
    quotes: ['error', 'single'], // 强制使用单引号
    'vue/multi-word-component-names': 'off' , // 允许多个单词的组件名
    indent: ['error', 2], // 缩进2个空格
  }
}
