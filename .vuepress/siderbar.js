const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const NET_PATH = '/blogs/net'
const ALGORITHM_PATH = '/blogs/algorithm'
const BROWSER_PATH = '/blogs/browser'
const WEBPACK_PATH = '/blogs/webpack'
const NODE_PATH = '/blogs/node'
const CSS_PATH = '/blogs/css'
const WORK = '/blogs/work'
const NODE = '/blogs/node'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    createSideBarConfig('JS-V8引擎', JAVASCRIPT_PATH + '/v8'),
  ],
  // [CSS_PATH]: [createSideBarConfig('CSS', CSS_PATH)],
  [BROWSER_PATH]: [
    createSideBarConfig('浏览器工作原理', BROWSER_PATH),
  ],
  [WORK]: [
    createSideBarConfig('工作感悟', WORK),
  ],
  [NODE]: [
    createSideBarConfig('Node', NODE),
  ]
}