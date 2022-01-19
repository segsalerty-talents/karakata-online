/* vue.config.js */

const { ChakraLoaderPlugin } = require('chakra-loader')

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    plugins: [
      new ChakraLoaderPlugin()
    ]
  }
}
