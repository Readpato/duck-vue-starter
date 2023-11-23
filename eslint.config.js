import antfu from '@antfu/eslint-config'

export default await antfu({
  rules: {
    'antfu/top-level-function': 'off',
    'vue/singleline-html-element-content-newline': 'off',
  },
})
