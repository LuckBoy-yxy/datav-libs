const path = require('path')
const resolve = require('rollup-plugin-node-resolve')

const inputPath = path.resolve(__dirname, './src/index.js')
const outputUmdPath = path.resolve(__dirname, './dist/datav-libs.js')
const outputEsPath = path.resolve(__dirname, './dist/datav-libs.es.js')

module.exports = {
  input: inputPath,
  output: [
    {
      file: outputUmdPath,
      format: 'umd',
      name: 'datavLibs'
    },
    {
      file: outputEsPath,
      format: 'es'
    }
  ],
  plugins: [
    resolve()
  ]
}