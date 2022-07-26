(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{542:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("img",{attrs:{src:t.$withBase("/vue/vue2/响应式原理.png"),alt:"图片加载失败"}}),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("我们都知道，"),a("code",[t._v("Vue")]),t._v("的特点之一就是"),a("code",[t._v("数据驱动视图")]),t._v("，就是说数据发生变化之后，视图会进行更新，这背后的原理就是vue的响应式系统。应用在运行时需要不断地进行渲染，而响应式系统的任务就是"),a("code",[t._v("让视图随着状态的变化而变化")]),t._v("。接下来探索一下Vue2.0的响应式原理。")]),t._v(" "),a("h2",{attrs:{id:"正文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正文"}},[t._v("#")]),t._v(" 正文")]),t._v(" "),a("h3",{attrs:{id:"_1-如何监听对象变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-如何监听对象变化"}},[t._v("#")]),t._v(" 1.如何监听对象变化？")]),t._v(" "),a("p",[t._v("对于JavaScript对象来说，如何侦测一个对象的变化？")]),t._v(" "),a("p",[t._v("这主要有两种方式，一个是使用"),a("code",[t._v("Object.defineProperty")]),t._v("，另一个是ES6提供的"),a("code",[t._v("Proxy")]),t._v("。而"),a("code",[t._v("Proxy")]),t._v("在浏览器的支持度并不理想，所以vue2.0当时实现的时候采用了"),a("code",[t._v("Object.defineProperty")]),t._v("，重写属性的代码如下:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineReactive")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        configurable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        enumerable"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" val\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newVal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" val"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n            val "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("我们定义一个"),a("code",[t._v("defineReactive")]),t._v("函数，用"),a("code",[t._v("闭包")]),t._v("保留一个"),a("code",[t._v("val")]),t._v("，当页面取值的时候，会走到"),a("code",[t._v("get")]),t._v("函数，返回"),a("code",[t._v("val")]),t._v("，数据改变会触发"),a("code",[t._v("set")]),t._v("函数，修改"),a("code",[t._v("val")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_2-如何监听数组变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-如何监听数组变化"}},[t._v("#")]),t._v(" 2.如何监听数组变化？")]),t._v(" "),a("p",[t._v("我们都知道，数组其实也是对象，同样可以用"),a("code",[t._v("Object.defineProperty")]),t._v("劫持数组的每一项，但如果数组有100万项，那就要调用"),a("code",[t._v("Object.defineProperty")]),t._v("一百万次，这样的话性能太低了。鉴于平时我们操作数组大都是采用数组提供的原生方法，于是Vue对数组重写原型链，在调用7个能改变自身的原生方法("),a("code",[t._v("push")]),t._v("，"),a("code",[t._v("pop")]),t._v("，"),a("code",[t._v("shift")]),t._v("，"),a("code",[t._v("unshift")]),t._v("，"),a("code",[t._v("splice")]),t._v("，"),a("code",[t._v("sort")]),t._v("，"),a("code",[t._v("reverse")]),t._v(")时，通知页面进行刷新，具体实现过程如下：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先拿到数组的原型")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" oldArrayProtoMethods "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用Object.create创建一个以oldArrayProtoMethods为原型的对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arrayMethods "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("oldArrayProtoMethods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" methods "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'push'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'shift'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unshift'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sort'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reverse'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'splice'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nmethods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("method")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给arrayMethods定义7个方法")]),t._v("\n    arrayMethods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 先找到数组对应的原生方法进行调用")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" oldArrayProtoMethods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明inserted，用来保存数组新增的数据")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" inserted\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// __ob__是Observer类实例的一个属性，data中的每个对象都是一个Observer类的实例")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ob "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__ob__\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'push'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unshift'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                inserted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'splice'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                inserted "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如有新增的数据，新增数据也要被定义为响应式")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inserted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("observeArray")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("inserted"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通知页面更新")]),t._v("\n        ob"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br")])]),a("h3",{attrs:{id:"_3-如何收集依赖以及依赖更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何收集依赖以及依赖更新"}},[t._v("#")]),t._v(" 3.如何收集依赖以及依赖更新？")]),t._v(" "),a("p",[t._v("在Vue的响应式系统中，有三个核心类，它们分别是")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("Observer")]),t._v("：我们data中的每个对象会返回一个Observer类的实例；")]),t._v(" "),a("li",[a("code",[t._v("Dep")]),t._v("：对象中每个属性会创建一个Dep，另外每一个对象还会单独创建一个Dep；")]),t._v(" "),a("li",[a("code",[t._v("Watcher")]),t._v("：也就是"),a("code",[t._v("依赖")]),t._v("，Watcher有三种")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("渲染Watcher")]),t._v("：Vue会为每个组件会创建一个渲染Watcher（函数式组件除外）；")]),t._v(" "),a("li",[a("code",[t._v("用户Watcher")]),t._v("：我们自己在watch对象中写的watch；")]),t._v(" "),a("li",[a("code",[t._v("计算属性Watcher")]),t._v("：我们自己定义的计算属性，最终也是靠Watcher来实现的；")])]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("ol",[a("li",[t._v("创建渲染"),a("code",[t._v("Watcher")]),t._v("，默认会调用this.get方法")]),t._v(" "),a("li",[t._v("将当前渲染"),a("code",[t._v("Watcher")]),t._v("保存在Dep.target上")]),t._v(" "),a("li",[t._v("调用vm._render，会去data上取值，走到"),a("code",[t._v("get")]),t._v("方法，并将当前属性的"),a("code",[t._v("Dep")]),t._v("和Dep.target的渲染Watcher进行关联，")]),t._v(" "),a("li",[t._v("当数据更新时，会走到数据的"),a("code",[t._v("set")]),t._v("方法，"),a("code",[t._v("set")]),t._v("方法中会调用"),a("code",[t._v("Dep.notify")]),t._v("方法，找到当前Dep依赖的Watcher，调用watcher.update方法")]),t._v(" "),a("li",[t._v("重新调用vm._render进行取值。")])]),t._v(" "),a("h3",{attrs:{id:"_4-整体流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-整体流程"}},[t._v("#")]),t._v(" 4.整体流程")]),t._v(" "),a("ol",[a("li",[t._v("遍历data中的数据，如果是"),a("code",[t._v("obj")]),t._v("就创建一个"),a("code",[t._v("Observer")]),t._v("实例，"),a("code",[t._v("new Observer(obj)")])]),t._v(" "),a("li",[t._v("给当前对象增加一个"),a("code",[t._v("Dep实例")]),t._v("，并当前实例保存在"),a("code",[t._v("__ob__")]),t._v("属性上，"),a("code",[t._v("this.__ob__ = this")]),t._v("，表示当前属性已经被代理")]),t._v(" "),a("li",[t._v("判断传入对象是不是数组，如果是数组则重写原型链，拦截"),a("code",[t._v("push")]),t._v(","),a("code",[t._v("pop")]),t._v(","),a("code",[t._v("shift")]),t._v(","),a("code",[t._v("unshift")]),t._v(","),a("code",[t._v("splice")]),t._v(","),a("code",[t._v("sort")]),t._v(","),a("code",[t._v("reverse")]),t._v("七个方法，并调用observeArray遍历数组，将数组的每一项的对象定义为响应式")]),t._v(" "),a("li",[t._v("如果不是数组则是对象，则调用"),a("code",[t._v("walk")]),t._v("方法循环对象，对每个属性调用"),a("code",[t._v("defineReactive")]),t._v("方法，在"),a("code",[t._v("defineReactive")]),t._v("方法中会为当前属性创建一个"),a("code",[t._v("Dep")]),t._v("实例，并调用"),a("code",[t._v("Object.defineProperty")]),t._v("进行重新定义"),a("code",[t._v("get")])]),t._v(" "),a("li",[t._v("创建"),a("code",[t._v("渲染Watcher")]),t._v("进行页面渲染，将当前Watcher放到"),a("code",[t._v("Dep.target")]),t._v("上，"),a("code",[t._v("Dep.target = [Watcher]")])]),t._v(" "),a("li",[t._v("调用"),a("code",[t._v("vm._render")]),t._v("，会取值，走到"),a("code",[t._v("get")]),t._v("方法，将"),a("code",[t._v("Dep")]),t._v("和"),a("code",[t._v("target")]),t._v("关联，再调用"),a("code",[t._v("vm._update")]),t._v("将虚拟节点创建为真实节点并渲染到页面上")]),t._v(" "),a("li",[t._v("数据更新，走到"),a("code",[t._v("set")]),t._v("方法，调用"),a("code",[t._v("Dep.notify")]),t._v("方法，找到当前"),a("code",[t._v("Dep")]),t._v("收集的"),a("code",[t._v("Watcher")]),t._v("，调用"),a("code",[t._v("Watcher.update")])]),t._v(" "),a("li",[t._v("重新调用"),a("code",[t._v("vm._render")]),t._v(",再调用"),a("code",[t._v("vm._update")]),t._v("将虚拟节点创建为真实节点并渲染到页面上")])]),t._v(" "),a("h3",{attrs:{id:"_5-object-defineproperty的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-object-defineproperty的缺点"}},[t._v("#")]),t._v(" 5.Object.defineProperty的缺点")]),t._v(" "),a("ol",[a("li",[t._v("无法监听新增属性和删除属性的变化")]),t._v(" "),a("li",[t._v("监测数组的索引性能太低，故而直接通过数组索引改值无法触发响应式")]),t._v(" "),a("li",[t._v("初始化时需要一次性递归调用，性能较差")])]),t._v(" "),a("h3",{attrs:{id:"_6-proxy和object-defineproperty对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-proxy和object-defineproperty对比"}},[t._v("#")]),t._v(" 6.proxy和Object.defineProperty对比")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Vue3.0")]),t._v("的proxy：代理"),a("code",[t._v("对象")]),t._v("，能监听到对象新增属性和删除属性，以及数组的索引和length变化，可以进行懒递归，性能较好，")]),t._v(" "),a("li",[a("code",[t._v("Vue2.0")]),t._v("的Object.defineProperty: 代理"),a("code",[t._v("属性")]),t._v("，只能能监听到对象已有的属性，监听数组索引性能消耗大，不能进行懒递归，性能较差。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);