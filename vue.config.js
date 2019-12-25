module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 23333,
    https: false,
    hotOnly: false,
    proxy: null, // string | Object
    before: app => {
    }
  }
}
