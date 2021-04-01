const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const NET_PATH = '/blogs/net'
const ALGORITHM_PATH = '/blogs/algorithm'
const BROWSER_PATH = '/blogs/browser'
const WEBPACK_PATH = '/blogs/webpack'
const NODE_PATH = '/blogs/node'
const CSS_PATH = '/blogs/css'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    createSideBarConfig('JS-V8引擎原理', JAVASCRIPT_PATH + '/js-v8'),
  ],
  // [CSS_PATH]: [createSideBarConfig('CSS 技巧', CSS_PATH)],
  // [BROWSER_PATH]: [
  //   createSideBarConfig('浏览器渲染', BROWSER_PATH + '/browser-render'),
  //   createSideBarConfig('浏览器安全', BROWSER_PATH + '/browser-security'),
  // ]
}