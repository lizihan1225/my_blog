(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{428:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"render函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#render函数"}},[t._v("#")]),t._v(" render函数")]),t._v(" "),s("p",[t._v("手动调用render函数，React不会根据最新的数据再执行一次渲染，而是会把之前render函数的结果返回给你，所以永远不要手动调用render函数，而是将render函数交给React调用。")]),t._v(" "),s("h2",{attrs:{id:"为什么要采用虚拟dom-而不是直接修改真实的dom呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要采用虚拟dom-而不是直接修改真实的dom呢"}},[t._v("#")]),t._v(" 为什么要采用虚拟DOM，而不是直接修改真实的DOM呢？")]),t._v(" "),s("ol",[s("li",[t._v("很难跟踪状态发生的改变，不方便调试")]),t._v(" "),s("li",[t._v("操作真实DOM性能较低，因为DOM是一个非常复杂的对象，还会引起回流和重绘。")])]),t._v(" "),s("h2",{attrs:{id:"setstate为什么设计为异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate为什么设计为异步"}},[t._v("#")]),t._v(" setState为什么设计为异步？")]),t._v(" "),s("ol",[s("li",[t._v("setState设计为异步，可以显著地提升性能（与MutationObserve的异步回调类似）；")])]),t._v(" "),s("ul",[s("li",[t._v("如果每次调用setState都进行一次更新，会导致render函数调用太频繁，会出现一些无意义的界面渲染；")]),t._v(" "),s("li",[t._v("更好的处理方式是获取到多个更新后，进行异步的批量更新（类似Vue的nextTick）")])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("如果同步更新state，但是没有执行render函数，会导致父组件state和传入子组件的props不能保持同步，在实际开发中产生一些问题。")])]),t._v(" "),s("h2",{attrs:{id:"setstate一定是异步吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setstate一定是异步吗"}},[t._v("#")]),t._v(" setState一定是异步吗？")]),t._v(" "),s("p",[t._v("下面两种情况setState是同步的")]),t._v(" "),s("ol",[s("li",[t._v("将setState放入到定时器中")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handleChange")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new message'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("原生DOM事件")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" btn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  btn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new message'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])]),s("p",[t._v("setState是同步还是异步可以分成两种情况：")]),t._v(" "),s("ul",[s("li",[t._v("在组件生命周期或React合成事件中，setState是异步；")]),t._v(" "),s("li",[t._v("在setTimeout或者原生dom事件中，setState是同步。")])]),t._v(" "),s("h2",{attrs:{id:"react为什么采用合成事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react为什么采用合成事件"}},[t._v("#")]),t._v(" React为什么采用合成事件？")]),t._v(" "),s("p",[t._v("React不仅可以跑在浏览器上，还可以跑在在原生的手机上（React Native），为了保持一致，React将浏览器产生的DOM事件对象或原生控件的对象和自己的一些属性合并为一个"),s("strong",[t._v("合成对象")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"react更新机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react更新机制"}},[t._v("#")]),t._v(" React更新机制")]),t._v(" "),s("p",[t._v("React渲染流程：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/react/react渲染流程.svg"),alt:"图片加载失败"}}),t._v(" "),s("p",[t._v("React的更新流程：")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/react/react更新流程.svg"),alt:"图片加载失败"}}),t._v(" "),s("p",[t._v("React中的diff:")]),t._v(" "),s("p",[t._v("如果一棵树参考另外一棵树进行完全比较更新，即使采用最先进的算法，该算法的复杂度也达到了O（n³），开销过于昂贵")]),t._v(" "),s("p",[t._v("于是，React对算法进行优化，让复杂度降为O（n）：")]),t._v(" "),s("ul",[s("li",[t._v("同层节点之间的相互比较，不会跨层级比较")]),t._v(" "),s("li",[t._v("不同类型的节点，产生不同的树结构，比如老节点是div标签，新节点时p标签，会直接用新节点p及其子节点替换掉div节点及其子节点")]),t._v(" "),s("li",[t._v("通过key指定节点在不同的渲染中保持稳定")])]),t._v(" "),s("h2",{attrs:{id:"ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ref"}},[t._v("#")]),t._v(" ref")]),t._v(" "),s("p",[t._v("在React的开发模式中，通常情况下不需要、也不建议直接操作原生DOM，但有些情况也确实希望对DOM进行操作：")]),t._v(" "),s("ul",[s("li",[t._v("管理焦点，文本选择或媒体播放")]),t._v(" "),s("li",[t._v("触发强制动画")]),t._v(" "),s("li",[t._v("集成第三方DOM库（不推荐）")])]),t._v(" "),s("p",[t._v("ref的转发：forwardRef")]),t._v(" "),s("p",[t._v("函数式组件没有实例，所以不能获取到对应的组件对象，但是我们可能想要获取函数式组件中某个元素的DOM，这时候就可以用React.forwardRef了")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" forwardRef "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'react'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Profile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forwardRef")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ref")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p ref"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("ref"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"受控组件和非受控组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#受控组件和非受控组件"}},[t._v("#")]),t._v(" 受控组件和非受控组件")]),t._v(" "),s("ul",[s("li",[t._v("在HTML中，表单元素（如Input、Select、Textarea）等通常会自己维护state，并根据用户输入来进行更新。")]),t._v(" "),s("li",[t._v("在React中，可变状态（mutable state）通常保存在组件的state属性中，并且只能通过setState来更新。")])]),t._v(" "),s("p",[t._v("我们将组件的state作为表单元素的数据源，同时渲染表单的React组件还控制着用户输入过程中表单发生的操作，我们把以这种方式控制取值的表单输入元素叫做"),s("strong",[t._v("受控组件")]),t._v("。")]),t._v(" "),s("p",[t._v("表单数据交给DOM来处理的表单组件被称为"),s("strong",[t._v("非受控组件")]),t._v("。这时候需要使用ref从DOM节点中获取表单数据（不推荐）。")]),t._v(" "),s("h2",{attrs:{id:"高阶组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件"}},[t._v("#")]),t._v(" 高阶组件")]),t._v(" "),s("p",[t._v("高阶组件（Higher-Order Components），简称HOC，"),s("strong",[t._v("高阶组件是参数为组件，返回值为新组建的函数。")])]),t._v(" "),s("p",[t._v("高阶组件的编写：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("higherOrderComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("WrappedComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InnerComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PurComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WrappedComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  InnerComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("displayName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Inner'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" InnerComponent\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("高阶组件的调用：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" EnhanceComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("higherOrderComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("组件的名称问题：")]),t._v(" "),s("ul",[s("li",[t._v("在ES6中，类表达式中类名是可以省略的")]),t._v(" "),s("li",[t._v("组件的名称都可以通过displayName来修改")])]),t._v(" "),s("p",[t._v("高阶组件并不是ReactApi的一部分，它是基于React的组合特性而形成的设计模式。高阶组件的作用：")]),t._v(" "),s("ol",[s("li",[t._v("增强props")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用高阶组件增强props")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("withUser")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("WrappedComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("UserContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("user")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WrappedComponent "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("UserContext"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("登录鉴权操作")]),t._v(" "),s("li",[t._v("生命周期劫持")])]),t._v(" "),s("p",[t._v("高阶组件可以进行代码的复用（替代早期的mixin）")]),t._v(" "),s("p",[t._v("为什么不推荐使用mixin？")]),t._v(" "),s("ul",[s("li",[t._v("数据来源不明确")]),t._v(" "),s("li",[t._v("mixin可能会相互依赖，相互耦合，不同的mixin方法可能会相互冲突，代码维护性差")]),t._v(" "),s("li",[t._v("mixin非常多，还可能再加上组件为其做的相关处理，会给代码造成滚雪球式的复杂性。")])]),t._v(" "),s("p",[t._v("高阶组件的缺陷：")]),t._v(" "),s("ul",[s("li",[t._v("HOC需要在源组件上进行包裹和嵌套，大量使用会让调试变得困难；")]),t._v(" "),s("li",[t._v("HOC可以劫持props，在不遵守约定的情况下也可能造成冲突；")])]),t._v(" "),s("p",[t._v("Hooks的出现，是开创性的，它解决了很多React之前存在的问题：")]),t._v(" "),s("ul",[s("li",[t._v("this的指向问题，hoc的嵌套复杂度等")])]),t._v(" "),s("p",[t._v("高阶组件在一些React第三方库中非常常见：")]),t._v(" "),s("ul",[s("li",[t._v("redux中的connect")]),t._v(" "),s("li",[t._v("react-router中的withRouter")])]),t._v(" "),s("h2",{attrs:{id:"portals的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#portals的使用"}},[t._v("#")]),t._v(" Portals的使用")]),t._v(" "),s("p",[t._v("某些情况下，我们希望渲染的内容独立于父组件，甚至于独立于当前挂载的DOM元素中。Portals提供了一种将子节点渲染到存在于父组件以外的DOM节点的优秀的方案：")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第一个参数child：任何可渲染的React子元素，例如一个元素，字符串或fragment")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 第二个参数container：挂载容器，比如一个DOM元素")]),t._v("\nReactDOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPortal")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'modal'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"strictmode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#strictmode"}},[t._v("#")]),t._v(" StrictMode")]),t._v(" "),s("p",[t._v("StrictMode是一个用来突出显示应用程序中潜在问题的工具：")]),t._v(" "),s("ul",[s("li",[t._v("与Fragment一样，StrictMode不会渲染任何可见的UI；")]),t._v(" "),s("li",[t._v("它为其后代元素触发额外的检查和警告；")]),t._v(" "),s("li",[t._v("严格模式检查仅在开发模式下运行，不会影响生产构建")])]),t._v(" "),s("p",[t._v("可以为应用程序的任何部分启用严格模式：会检查其中的元素或者组件（包括其子组件）")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StrictMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ComponentOne "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ComponentTwo "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("React"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StrictMode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("p",[t._v("严格模式检查的是什么：")]),t._v(" "),s("ol",[s("li",[t._v("不安全的生命周期")]),t._v(" "),s("li",[t._v("过时的ref API")]),t._v(" "),s("li",[t._v("检查意外的副作用")])]),t._v(" "),s("ul",[s("li",[t._v("这个组件的constructor会被调用两次")]),t._v(" "),s("li",[t._v("这是严格模式下故意进行的操作，让你来查看在这里写的一些逻辑代码被调用多次时，是否会产生一些副作用")]),t._v(" "),s("li",[t._v("在生产环境中，是不会被调用两次的")])]),t._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[t._v("使用废弃的findDOMNode方法")])]),t._v(" "),s("ul",[s("li",[t._v("在之前的React API中，可以使用findDOMNode来获取DOM，现在已经不推荐使用了，推荐使用的是ref")])]),t._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[t._v("检测过时的context API")])]),t._v(" "),s("ul",[s("li",[t._v("早期的Context是通过static属性生命Context对象属性，通过getChildContext返回Context对象等方式来使用Context的，这种使用方式已经不推荐")])]),t._v(" "),s("h2",{attrs:{id:"react中的样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中的样式"}},[t._v("#")]),t._v(" React中的样式")]),t._v(" "),s("h3",{attrs:{id:"内联样式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内联样式"}},[t._v("#")]),t._v(" 内联样式")]),t._v(" "),s("ul",[s("li",[t._v("内联样式是官方推荐的一种css样式的写法：\n"),s("ul",[s("li",[t._v("style接收一个采用小驼峰命令属性的JavaScript对象，而不是CSS字符串")]),t._v(" "),s("li",[t._v("并且可以引用state中的状态来设置相关的样式")])])]),t._v(" "),s("li",[t._v("内联样式的优点：\n"),s("ul",[s("li",[t._v("样式之间不会有冲突")]),t._v(" "),s("li",[t._v("可以动态获取当前state中的状态")])])]),t._v(" "),s("li",[t._v("内联样式的缺点：\n"),s("ol",[s("li",[t._v("写法上都需要使用驼峰标识")]),t._v(" "),s("li",[t._v("某些样式没有提示（抽成一个变量的时候）")]),t._v(" "),s("li",[t._v("大量的样式，代码混乱")]),t._v(" "),s("li",[t._v("某些样式无法编写（比如伪类/伪元素）")])])])]),t._v(" "),s("p",[t._v("官方推荐内联和普通的css来结合编写。")]),t._v(" "),s("h3",{attrs:{id:"css-modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-modules"}},[t._v("#")]),t._v(" CSS modules")]),t._v(" "),s("ul",[s("li",[t._v("css modules并不是React特有的解决方案，而是使用了类似于webpack配置的环境下都可以使用的。\n"),s("ul",[s("li",[t._v("但是，如果在其他项目中使用这个，我们需要自己来进行配置，比如配置webpack.config.js中的modules: true等")])])]),t._v(" "),s("li",[t._v("React的脚手架已经内置了css modules的配置：\n"),s("ul",[s("li",[t._v(".css/.less/.scss等样式文件都修改成.module.css/.module.less/.module.scss等")]),t._v(" "),s("li",[t._v("之后就可以引用并且使用了")])])]),t._v(" "),s("li",[t._v("缺陷\n"),s("ul",[s("li",[t._v("引用的类名，不能使用连接符号（.title-header），在JavaScript是不识别的；")]),t._v(" "),s("li",[t._v("所有的className都必须使用（style.className）的形式来编写；")]),t._v(" "),s("li",[t._v("不方便动态来修改某些样式，依然需要使用内联样式的方式。")])])])]),t._v(" "),s("h3",{attrs:{id:"认识css-in-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识css-in-js"}},[t._v("#")]),t._v(" 认识CSS in JS")]),t._v(" "),s("p",[t._v("“CSS-in-JS”是指一种模式，其中CSS由JavaScript生成而不是在外部文件中定义；")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：此功能并不是React的一部分，而是由第三方库提供。React对样式如何定义并没有明确态度。")])]),t._v(" "),s("p",[t._v("在传统的前端开发中，我们通常会将结构（HTML）、样式（CSS）、逻辑（JavaScript）分离，但是在React的思想中，逻辑和UI是无法分离的，所以才有了JSX。事实上CSS in JS的模式就是一种将CSS也写入到JavaScript的方式，并且可以方便地使用JavaScript的状态，也有人称React是“All in JS”。")]),t._v(" "),s("p",[t._v("虽然对CSS in JS有不少批评的声音，但也无法否定CSS in JS的库依旧强大和方便：")]),t._v(" "),s("ul",[s("li",[t._v("CSS in JS通过JavaScript来为CSS赋予一些能力，包括类似CSS预处理器的样式嵌套、函数定义、逻辑复用、动态修改状态等；")]),t._v(" "),s("li",[t._v("虽然CSS预处理器也具备某些能力，但是获取动态状态依然是一个不好处理的点；")]),t._v(" "),s("li",[t._v("目前可以说CSS in JS是React编写CSS最受欢迎的一种解决方案。")])]),t._v(" "),s("p",[t._v("目前比较流行的CSS-in-JS的库：")]),t._v(" "),s("ul",[s("li",[t._v("styled-components（主流）")]),t._v(" "),s("li",[t._v("emotion")]),t._v(" "),s("li",[t._v("glamorous")])])])}),[],!1,null,null,null);s.default=e.exports}}]);