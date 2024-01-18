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
const Design_Pattern = '/blogs/design_pattern'
const VUE = '/blogs/vue'
const SKILLS = '/blogs/skills'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/js-base'),
    // createSideBarConfig('JS-V8引擎', JAVASCRIPT_PATH + '/v8'),
  ],
  [VUE]: [
    createSideBarConfig('vue2', VUE + '/vue2'),
    createSideBarConfig('vue3', VUE + '/vue3'),
  ],
  // [CSS_PATH]: [createSideBarConfig('CSS', CSS_PATH)],
  [BROWSER_PATH]: [
    createSideBarConfig('浏览器工作原理', BROWSER_PATH),
  ],
  [WORK]: [
    createSideBarConfig('工作总结', WORK),
  ],
  [NODE]: [
    createSideBarConfig('Node', NODE),
  ],
  [Design_Pattern]: [
    createSideBarConfig('设计模式', Design_Pattern),
  ],
  [SKILLS]: [
    createSideBarConfig('编程技能', SKILLS),
  ]
}