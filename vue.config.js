module.exports = {

    lintOnSave: false,
    // css的处理
    css: {
      loaderOptions: {
        sass: {
          prependData: `@import "~@/sass/sass.scss";`
        }
      }
    },
    // alias: {
    //   // 'store': resolve('src/store')
    // }
}