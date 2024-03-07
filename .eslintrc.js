module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    '.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    'plugin:case-police/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {


    'vue/multi-word-component-names': 'off',



  },
}
