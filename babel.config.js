const prodList = ['production', 'prod']
const IS_PROD = prodList.includes(process.env.NODE_ENV)
const plugins = []
if (IS_PROD) {
  plugins.push('transform-remove-console')
}
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins
}
