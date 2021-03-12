module.exports = {
  // 配置需要使用的 PostCSS 插件
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作用: 生成浏览器 CSS 样式规则签注
    // 因为 VueCLI 内部已经哦诶之了 所以产生了冲突 注释掉就好了
    /* autoprefixer: { 
      // 配置要兼容到的环境信息
      browsers: ['Android >= 4.0', 'iOS >= 8'],
    }, */
    // 作用将 px 转换成 rem 
    'postcss-pxtorem': {
      // 设置根元素的值  
      // lib-flexible 的 REM 适配方案: 把一行分为10份
      // rootValue 应为你的设计稿宽度的十分之一
      // rootValue: 37.5,
      rootValue ({ file }) {
        // console.log(file);
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      // * 转换全部属性
      propList: ['*'],
    },
  },
};