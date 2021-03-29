// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { resolve, join } = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'main page',
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
    // unknow bug
    // mobile: {
    //   entry: 'src/mobile/main.ts',
    //   template: 'public/index.html',
    //   filename: 'mobile.html',
    //   title: 'mobile page',
    //   chunks: ['mobile'],
    // },
    mobile: 'src/mobile/main.ts',
  },
  devServer: {
    writeToDisk: true,
  },
  chainWebpack: (config) => {
    config.module.rule('eslint')
      .use('eslint-loader')
      .tap((options) => {
        return { ...options, lintOnSave: true }
      })
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        preprocess(md, source) {
          // eslint-disable-next-line @typescript-eslint/no-var-requires
          md.use(require('markdown-it-highlightjs'))
          return md.render(source)
        },
        raw: true,
      })
  },
}
