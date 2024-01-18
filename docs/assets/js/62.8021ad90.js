(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{476:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),s("p",[t._v("4年多的React老项目经过多个版本的迭代和持续性重构，积攒了大量的废弃文件，不仅占用了空间，而且增加了维护成本。比如后端问你某个接口是否还在维护，你在项目里面一搜，果然存在，后端就得继续维护这个接口，然后前端使用到这个接口的文件可能是废弃文件，这样自然就增加维护成本了。")]),t._v(" "),s("h2",{attrs:{id:"目标"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[t._v("#")]),t._v(" 目标")]),t._v(" "),s("p",[t._v("把项目中的废弃文件和代码全部删除掉，降低项目维护成本。")]),t._v(" "),s("h2",{attrs:{id:"现状"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现状"}},[t._v("#")]),t._v(" 现状")]),t._v(" "),s("p",[t._v("排除__test__测试文件、.md结尾文件、mock文件、.d.ts声明文件\n项目中src目录中现总共有2836个文件，很多模块经过重构但老代码并没有删除，导致大量废弃文件残留在项目中。")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// getFileCount.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" resolve "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" targetDir "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFileDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("files")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" curPath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" stats "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("statSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.umi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("__tests?__")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readdirSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("stats"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("(\\.test)|(\\.md$)|(\\.d\\.ts$)")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("curPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" count\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFileDirectory")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("targetDir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2836")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br")])]),s("p",[t._v("目前项目代码362823行，文件2836个。")]),t._v(" "),s("h2",{attrs:{id:"方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案"}},[t._v("#")]),t._v(" 方案")]),t._v(" "),s("p",[t._v("手动删除：删除人知道什么文件是可删的，所以风险小，但速度慢，重复劳动，耗费时间")]),t._v(" "),s("p",[t._v("自动删除：可能会误删，所以有一定风险，但速度快，可以批量删除，减少重复劳动")]),t._v(" "),s("p",[t._v("最终选择了自动删除方案，从项目后续还需进行的迭代的重构来看，可以大大提高项目的可维护性。而对于误删风险，可以采取措施进行降低：")]),t._v(" "),s("ol",[s("li",[t._v("建立回收站")]),t._v(" "),s("li",[t._v("自动扫描出废弃文件 + 手动删除")])]),t._v(" "),s("h3",{attrs:{id:"自动删除过程分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动删除过程分析"}},[t._v("#")]),t._v(" 自动删除过程分析：")]),t._v(" "),s("p",[t._v("一、检测要删除的目标")]),t._v(" "),s("ol",[s("li",[t._v("检测未使用变量：通过静态分析，得到exports出去但其它文件未import的变量，并且在当前页面内部也未使用的变量")]),t._v(" "),s("li",[t._v("检测未使用文件：通过静态分析，得到项目中未被引入过的文件")])]),t._v(" "),s("p",[t._v("二、删除检测到的目标")]),t._v(" "),s("h3",{attrs:{id:"技术方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术方案"}},[t._v("#")]),t._v(" 技术方案：")]),t._v(" "),s("h4",{attrs:{id:"一、ts-unused-exports-eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、ts-unused-exports-eslint"}},[t._v("#")]),t._v(" 一、ts-unused-exports + Eslint")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/pzavolinsky/ts-unused-exports",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-unused-exports"),s("OutboundLink")],1),t._v("这个开源库可以找出export出去，但其它文件未import的变量。这个插件也能分析出完整的文件和文件之间的 exports 和 imports 关系。")]),t._v(" "),s("li",[t._v("调用Eslint的API，通过"),s("code",[t._v("no-unused-vars")]),t._v("规则分析出某个变量是否使用，但默认的规则是export出去的变量不属于未使用的变量，所以需要fork改写。")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("rule fixer")]),t._v("删除掉分析出来的变量，然后使用prettier API格式化代码。")])]),t._v(" "),s("p",[t._v("支持自定义文件扫描：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/pzavolinsky/ts-unused-exports",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-unused-exports"),s("OutboundLink")],1),t._v("库中采用的TypeScript 提供的 API，默认只会扫描 .ts, .tsx 后缀的文件，在开启 allowJS 选项后也会扫描 .js, .jsx 后缀的文件。 而项目中很多的 .less, .svg 的文件也都未被使用，但它们都被忽略掉了。于是需要改动源码。")])]),t._v(" "),s("h3",{attrs:{id:"二、webpack-deadcode-plugin-eslint、tslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、webpack-deadcode-plugin-eslint、tslint"}},[t._v("#")]),t._v(" 二、webpack-deadcode-plugin + eslint、tslint")]),t._v(" "),s("p",[t._v("开源的"),s("a",{attrs:{href:"https://github.com/MQuy/webpack-deadcode-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack-deadcode-plugin"),s("OutboundLink")],1),t._v("插件可以快速筛选出：")]),t._v(" "),s("ol",[s("li",[t._v("未使用的文件")]),t._v(" "),s("li",[t._v("未使用的已暴露变量")])]),t._v(" "),s("p",[t._v("结合 eslint、tslint 进行治理：")]),t._v(" "),s("p",[t._v("lint 可以快速的扫描出未使用的变量，这能够极大的提升我们的 deadcode 清理效率。")]),t._v(" "),s("ul",[s("li",[t._v("首先通过 lint 对未使用变量进行清理；")]),t._v(" "),s("li",[t._v("再通过 webpack-deadcode-plugin 再扫描出未使用文件和未使用的导出变量。")])]),t._v(" "),s("p",[t._v("它依赖"),s("code",[t._v("compilation.fileDependencies")]),t._v("这个变量来判断哪些文件未被使用，但项目中如果用了"),s("a",{attrs:{href:"https://github.com/TypeStrong/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("fork-ts-checker-webpack-plugin "),s("OutboundLink")],1),t._v("进行类型检查，就检测不出来未使用的ts文件了，删除方案即失效了，原因是这个插件会将src 目录下的所有ts文 都加入到webpack的依赖中，也就是"),s("code",[t._v("compilation.fileDependencies")]),t._v("（开启这个插件后，在开发环境试着手动改一个未导出的ts文件，一样会触发重新编译）。")]),t._v(" "),s("h4",{attrs:{id:"三、ts-prune"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、ts-prune"}},[t._v("#")]),t._v(" 三、ts-prune")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/nadeesha/ts-prune",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-prune"),s("OutboundLink")],1),t._v(" 是完全基于 TypeScript 服务实现的一个 dead exports 检测方案。")]),t._v(" "),s("p",[t._v("TypeScript 服务提供了一个实用的 API： "),s("a",{attrs:{href:"https://github.com/microsoft/TypeScript/blob/main/src/services/findAllReferences.ts",target:"_blank",rel:"noopener noreferrer"}},[t._v("findAllReferences"),s("OutboundLink")],1),t._v(" ，我们平时在 VSCode 里右键点击一个变量，选择 “Find All References” 时，就会调用这个底层 API 找出所有的引用。")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/dsherret/ts-morph",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-morph"),s("OutboundLink")],1),t._v(" 这个库封装了包括 findAllReferences 在内的一些底层 API，提供更加简洁易用的调用方式。")]),t._v(" "),s("p",[t._v("ts-prune 就是基于 ts-morph 封装而成。")]),t._v(" "),s("p",[t._v("优点:")]),t._v(" "),s("ol",[s("li",[t._v("TS 的服务被各种 IDE 集成，经过无数大型项目检测，可靠性不用多说。")]),t._v(" "),s("li",[t._v("不需要像 ESLint 方案那样，额外检测变量在文件内是否使用，"),s("code",[t._v("findAllReferences")]),t._v("的检测范围包括文件内部，开箱即用。")])]),t._v(" "),s("p",[t._v("缺点:")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("速度慢")]),t._v("，TSProgram 的初始化，以及 "),s("code",[t._v("findAllReferences")]),t._v(" 的调用，在大型项目中速度还是有点慢。")]),t._v(" "),s("li",[s("strong",[t._v("文档和规范比较差")]),t._v("，ts-morph 的文档还是太简陋了，挺多核心的方法没有文档描述，不利于维护。")]),t._v(" "),s("li",[s("strong",[t._v("模块语法不一致")]),t._v("，TypeScript 的"),s("code",[t._v("findAllReferences")]),t._v("并不识别 Dynamic Import 语法，需要额外处理 import() 形式导入的模块。")]),t._v(" "),s("li",[s("strong",[t._v("删除方案难做")]),t._v("，ts-prune 封装了相对完善的 dead exports 检测方案，但作者似乎没有做自动删除方案的意思。")])]),t._v(" "),s("p",[t._v("所以综合评估下来，最后还是选择了 ts-unused-exports + ESLint 的方案。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://eslint.bootcss.com/docs/developer-guide/nodejs-api#cliengine",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eslint Nodejs Api"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/372181145",target:"_blank",rel:"noopener noreferrer"}},[t._v("从0到1开发一个简单的 eslint 插件"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);