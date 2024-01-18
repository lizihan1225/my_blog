(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{490:function(v,_,l){"use strict";l.r(_);var e=l(1),i=Object(e.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[v._v("#")]),v._v(" 性能优化")]),v._v(" "),_("ul",[_("li",[v._v("减少网络请求\n"),_("ul",[_("li",[v._v("base64")]),v._v(" "),_("li",[v._v("缓存")]),v._v(" "),_("li",[v._v("HTTP Cache 强缓存 协商缓存")]),v._v(" "),_("li",[v._v("MemoryCache base64格式的图片 体积不大的js、css文件")]),v._v(" "),_("li",[v._v("Service Worker Cache（对协议有要求，必须是HTTPS协议）")]),v._v(" "),_("li",[v._v("Push Cache HTTP2")]),v._v(" "),_("li",[v._v("离线存储")]),v._v(" "),_("li",[v._v("Cookie")]),v._v(" "),_("li",[v._v("Web Storage")]),v._v(" "),_("li",[v._v("localStorage 图片内容丰富的电商网站会用它来存储 Base64 格式的图片字符串，有的网站还会用它存储一些不经常更新的 CSS、JS 等静态资源。")]),v._v(" "),_("li",[v._v("Session Storage 比如微博的 Session Storage 就主要是存储你本次会话的浏览足迹")]),v._v(" "),_("li",[v._v("IndexedDB IndexedDB 是一个运行在浏览器上的非关系型数据库。当数据的复杂度和规模上升到了 LocalStorage 无法解决的程度，我们毫无疑问可以请出 IndexedDB 来帮忙。")]),v._v(" "),_("li",[v._v("防抖节流")])])]),v._v(" "),_("li",[v._v("请求过程优化\n"),_("ul",[_("li",[v._v("gzip压缩 compression-webpack-plugin")]),v._v(" "),_("li",[v._v("图片优化 WebP")]),v._v(" "),_("li",[v._v("webpack优化")]),v._v(" "),_("li",[v._v("CDN")]),v._v(" "),_("li",[v._v("按需加载、按需打包 vue-lazyload")])])]),v._v(" "),_("li",[v._v("渲染优化\n"),_("ul",[_("li",[v._v("预渲染")]),v._v(" "),_("li",[v._v("服务端渲染")]),v._v(" "),_("li",[v._v("defer/async")]),v._v(" "),_("li",[v._v("prefetch/preload")]),v._v(" "),_("li",[v._v("重绘和回流")]),v._v(" "),_("li",[v._v("异步更新")])])])]),v._v(" "),_("h2",{attrs:{id:"首屏优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化"}},[v._v("#")]),v._v(" 首屏优化")]),v._v(" "),_("p",[v._v("构建工具：")]),v._v(" "),_("ol",[_("li",[v._v("按需打包 组件库 lodash工具库 IgnorePlugin moment")]),v._v(" "),_("li",[v._v("sourcemap 生产none")]),v._v(" "),_("li",[v._v("babel-loader开启缓存")]),v._v(" "),_("li",[v._v("noParse")]),v._v(" "),_("li",[v._v("bundle hash")]),v._v(" "),_("li",[v._v("splitChunks")]),v._v(" "),_("li",[v._v("tree-shaking")]),v._v(" "),_("li",[v._v("external 配置vue.config.js  在html模板中加入定义好的cdn变量使用的代码")])]),v._v(" "),_("p",[v._v("网络请求：")]),v._v(" "),_("ul",[_("li",[v._v("减少请求个数：base64 缓存")]),v._v(" "),_("li",[v._v("请求过程优化：gzip CDN")])]),v._v(" "),_("p",[v._v("静态资源：")]),v._v(" "),_("ol",[_("li",[v._v("图片")])]),v._v(" "),_("ul",[_("li",[v._v("base64")]),v._v(" "),_("li",[v._v("雪碧图（CSS Sprites）")]),v._v(" "),_("li",[v._v("WebP\n"),_("ul",[_("li",[v._v("特点：色彩丰富，支持有损压缩和无损压缩， PNG 一样支持透明，像 GIF 一样可以显示动态图片，集多种图片文件格式的优点于一身")]),v._v(" "),_("li",[v._v("缺点：1. 兼容性 2.WebP 还会增加服务器的负担——和编码 JPG 文件相比，编码同样质量的 WebP 文件会占用更多的计算资源。")]),v._v(" "),_("li",[v._v("应用场景：优雅降级处理，由服务器根据 HTTP 请求头部的 Accept 字段来决定返回什么格式的图片\n渲染：")])])]),v._v(" "),_("li",[v._v("预渲染")]),v._v(" "),_("li",[v._v("ssr\n用户体验：")]),v._v(" "),_("li",[v._v("骨架屏")]),v._v(" "),_("li",[v._v("懒加载")])])])}),[],!1,null,null,null);_.default=i.exports}}]);