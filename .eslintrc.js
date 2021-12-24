module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  plugins: ['vue'],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'max-len': 'off'
  }
}
