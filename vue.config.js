const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true
})

/*module.exports = {
  chainWebpack: (config) => {
    config.module
        .rule('images') // -> Default configuration
        .test(/\.(png|jpe?g|gif|avif)(\?.*)?$/)
        .use('url-loader')
        .loader('url-loader')
        .options({
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: { name: 'img/[name].[hash:8].[ext]' },
          },
        })
        .end()
  },
}*/
