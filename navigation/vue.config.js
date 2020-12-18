const path = require('path')
module.exports = {
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:8080', //路径指向本地主机地址及端口号
  //       ws: true,
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': '/static' //路径转发代理
  //       }
  //     }
  //   }
  // },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/*.scss')      //你的.scss文件所在目录
      ]
    }
  }
}