(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{438:function(e,a,t){"use strict";t.r(a);var s=t(25),r=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#babel是什么"}},[e._v("babel是什么")])]),a("li",[a("a",{attrs:{href:"#babel核心概念"}},[e._v("babel核心概念")]),a("ul",[a("li",[a("a",{attrs:{href:"#核心库-babel-core"}},[e._v("核心库 @babel/core")])]),a("li",[a("a",{attrs:{href:"#babel-cli"}},[e._v("@babel/cli")])])])]),a("li",[a("a",{attrs:{href:"#babel-插件"}},[e._v("babel 插件")]),a("ul",[a("li",[a("a",{attrs:{href:"#babel-preset-env"}},[e._v("@babel/preset-env")])]),a("li",[a("a",{attrs:{href:"#babel-polyfill"}},[e._v("@babel/polyfill")])]),a("li",[a("a",{attrs:{href:"#babel-plugin-transform-runtime"}},[e._v("@babel/plugin-transform-runtime")])])])]),a("li",[a("a",{attrs:{href:"#插件的顺序"}},[e._v("插件的顺序")])]),a("li",[a("a",{attrs:{href:"#插件的短名称"}},[e._v("插件的短名称")])]),a("li",[a("a",{attrs:{href:"#babel与babel的区别"}},[e._v("@babel与babel的区别")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"babel是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel是什么"}},[e._v("#")]),e._v(" babel是什么")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("babel")]),e._v(" 是一个"),a("code",[e._v("JavaScript")]),e._v("编译器，主要作用是将"),a("code",[e._v("ECMAScript2015+")]),e._v(" 版本的"),a("code",[e._v("js")]),e._v("代码转换为向后兼容的"),a("code",[e._v("js")]),e._v("语法，以便能够运行在当前和旧版本的浏览器环境中")])]),e._v(" "),a("h2",{attrs:{id:"babel核心概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel核心概念"}},[e._v("#")]),e._v(" babel核心概念")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("babel")]),e._v(" "),a("p",[a("code",[e._v("babel")]),e._v(" 能做什么？")]),e._v(" "),a("ul",[a("li",[e._v("语法转换")]),e._v(" "),a("li",[e._v("通过"),a("code",[e._v("Polyfill")]),e._v("方式垫平不同浏览器或者不同环境下的差异,让新的内置函数、实例方法等在低版本浏览器中也可以使用。（"),a("code",[e._v("@babel/polyfill")]),e._v("模块）")]),e._v(" "),a("li",[e._v("源码转换")])])]),e._v(" "),a("h3",{attrs:{id:"核心库-babel-core"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心库-babel-core"}},[e._v("#")]),e._v(" 核心库 @babel/core")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("Babel")]),e._v("的核心功能包含在"),a("code",[e._v("@babel/core")]),e._v("模块中，不安装"),a("code",[e._v("@babel/core")]),e._v("则无法使用")])]),e._v(" "),a("h3",{attrs:{id:"babel-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-cli"}},[e._v("#")]),e._v(" @babel/cli")]),e._v(" "),a("blockquote",[a("p",[a("code",[e._v("Babel")]),e._v("提供的命令行工具，主要是提供"),a("code",[e._v("babel")]),e._v("这个命令，适合安装在项目里。")])]),e._v(" "),a("h2",{attrs:{id:"babel-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-插件"}},[e._v("#")]),e._v(" babel 插件")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("插件")]),e._v(" "),a("p",[a("code",[e._v("Babel")]),e._v("构建在插件之上，使用插件可以组成一个转换通道，"),a("code",[e._v("Babel")]),e._v("的插件分为两种:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("语法插件：只允许"),a("code",[e._v("babel")]),e._v("解析特定类型的语法（不是转换），可以在"),a("code",[e._v("AST")]),e._v("转换时使用，以支持解析新语法")])]),e._v(" "),a("li",[a("p",[e._v("转换插件：会启用相应的语法插件\b（因此不需要同时指定这两种插件），如果不启用响应的语法插件，意味着无法解析，就更不用说转换了。")])])]),e._v(" "),a("p",[e._v("插件的使用")]),e._v(" "),a("p",[e._v("如果插件发布在"),a("code",[e._v("npm")]),e._v("上，可以直接填写插件的名称，"),a("code",[e._v("Babel")]),e._v("会自动检查它是否已经被安装在"),a("code",[e._v("node_modules")]),e._v("目录下，在项目目录下新建"),a("code",[e._v(".babelrc")]),e._v("文件，配置如下")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/plugin-transform-arrow-functions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// 也可以指定插件的相对路径 ["./node_modules/@babel/plugin-transform-arrow-functions"]')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("执行"),a("code",[e._v("npm run compiler")]),e._v(', "compiler": "babel src --out-dir lib --watch"')])]),e._v(" "),a("h3",{attrs:{id:"babel-preset-env"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-preset-env"}},[e._v("#")]),e._v(" @babel/preset-env")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("如果要将其他js特性转换为低版本，需要使用其他"),a("code",[e._v("plugin")]),e._v("，如果我们一个个配置的话，会非常繁琐。"),a("code",[e._v("@babel/preset-env")]),e._v("的主要作用就是对我们所使用的并且目标浏览器中缺失的功能进行代码转换和加载"),a("code",[e._v("polyfill")]),e._v(",在不进行配置的情况下，"),a("code",[e._v("@babel/preset-env")]),e._v("所包含的插件将支持所有最新的"),a("code",[e._v("js")]),e._v("特性（ES2015、ES2016等，不包含stage阶段），将其转换成"),a("code",[e._v("ES5")]),e._v("代码。")]),e._v(" "),a("p",[a("strong",[e._v("注意")]),e._v("：由于"),a("code",[e._v("@babel/preset-env")]),e._v("默认会将任何模块类型都转译成"),a("code",[e._v("CommonJS")]),e._v("类型，这样会导致"),a("code",[e._v("tree-shaking")]),e._v("失效，因为"),a("code",[e._v("tree-shaking")]),e._v("只会对"),a("code",[e._v("ES6module")]),e._v("生效，所以需要设置"),a("code",[e._v("modules:false")]),e._v("属性来解决这个问题。")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("需要说明的是，"),a("code",[e._v("@babel/preset-env")]),e._v("会根据你配置的目标环境，生成插件列表来编译。对于基于浏览器或"),a("code",[e._v("Electron")]),e._v("的项目，官方推荐使用"),a("code",[e._v(".browerslistrc")]),e._v("文件来指定目标环境。默认情况下，如果你没有在"),a("code",[e._v("Babel")]),e._v("配置文件中（如"),a("code",[e._v(".babelrc")]),e._v("）设置"),a("code",[e._v("targets")]),e._v("或 "),a("code",[e._v("ignoreBrowserslistConfig")]),e._v(","),a("code",[e._v("@babel/preset-env")]),e._v("会使用"),a("code",[e._v("browerslist")]),e._v("配置源。")]),e._v(" "),a("p",[e._v("如果不是要兼容所有浏览器和环境，推荐指定目标环境，这样能使编译代码变得更小\n如仅包含浏览器市场份额超过"),a("code",[e._v("1%")]),e._v("的用户所需的"),a("code",[e._v("polyfill")]),e._v("和代码转换（忽略没有安全更新的浏览器，如IE10 和BlackBerry）")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("%")]),e._v("\nnot dead\n")])])])]),e._v(" "),a("h3",{attrs:{id:"babel-polyfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-polyfill"}},[e._v("#")]),e._v(" @babel/polyfill")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("polyfill")]),e._v(" "),a("p",[e._v("语法转换只能将高版本的语法转换为低版本的，但是新的内置函数，实例方法是无法转换的。此时，就需要用到"),a("code",[e._v("polyfill")]),e._v(",也就是垫片。所谓垫片，就是垫平不同浏览器或者不同环境下的差异，让新的内置函数、实例方法等在低版本浏览器中也可以使用")]),e._v(" "),a("p",[a("code",[e._v("@babel/polyfill")]),e._v("模块包括"),a("code",[e._v("core-js")]),e._v("和一个自定义的 "),a("code",[e._v("regenerator runtime")]),e._v(" 模块，可以模拟完整的"),a("code",[e._v("ES2015+")]),e._v("环境（不包含第四阶段前的提议）")]),e._v(" "),a("p",[e._v("这意味的可以使用诸如"),a("code",[e._v("Promise")]),e._v(" 和 "),a("code",[e._v("WeakMap")]),e._v("之类的新的内置组件、"),a("code",[e._v("Array.from")]),e._v(" 或"),a("code",[e._v("Object.assgin")]),e._v(" 之类的静态方法、"),a("code",[e._v("Array.prorotype.includes")]),e._v(" 之类的方法，以及生成器函数（"),a("code",[e._v("yield")]),e._v("函数，前提是使用了"),a("code",[e._v("@babel/plugin-transform-regenerator")]),e._v("插件）")]),e._v(" "),a("p",[e._v("从"),a("code",[e._v("V7.4.0")]),e._v("版本开始"),a("code",[e._v("@babel/polyfill")]),e._v("已经被废弃，需要单独安装"),a("code",[e._v("core-js")]),e._v("和"),a("code",[e._v("regenerator-runtime")]),e._v(" 模块，首先，安装"),a("code",[e._v("@babel/polyfill")]),e._v("依赖")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" @babel/polyfill "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--save")]),e._v("\n")])])]),a("p",[e._v("不使用"),a("code",[e._v("--save-dev")]),e._v("是因为这是一个需要在源码运行之前运行的垫片")]),e._v(" "),a("p",[e._v("我们需要将完整的"),a("code",[e._v("polyfill")]),e._v("在代码之前加载，修改我们的"),a("code",[e._v("src/index.js")]),e._v("，也可以在webpack中进行配置")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("entry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./polyfills'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./index'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[a("code",[e._v("polyfills.js")]),e._v("文件内容如下：")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 可能还有一些其他的polyfill")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@babel/polyfill'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[a("code",[e._v("polyfills")]),e._v("按需引入，且不会污染全局环境和原型")]),e._v(" "),a("p",[a("code",[e._v("@babel/preset-env")]),e._v("提供了一个"),a("code",[e._v("useBuiltIns")]),e._v("参数，设置值为"),a("code",[e._v("usage")]),e._v("时，就只会包含代码需要的"),a("code",[e._v("polyfill")]),e._v("。但是需要注意：值设为"),a("code",[e._v("usage")]),e._v("时，必须要同时设置"),a("code",[e._v("corejs")]),e._v("，如果不设置，会给出警告，如果安装了"),a("code",[e._v("@babel/polyfill")]),e._v("，默认使用的是"),a("code",[e._v("corejs@2")]),e._v("。"),a("code",[e._v("corejs@2")]),e._v("已经不会再加入新的特性，新特性会添加到"),a("code",[e._v("corejs@3")]),e._v("。")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i core-js@3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--save")]),e._v("\n")])])]),a("p",[e._v("现在修改.babelrc配置文件如下")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"useBuiltIns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"usage"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[a("code",[e._v("babel")]),e._v("会检查所有代码，以便查找在目标环境中缺失的功能，然后仅仅把需要的"),a("code",[e._v("polyfill")]),e._v("包含进来。同样的代码，使用webpack构建之后，最终代码会减小不少。\n如果我们源码中使用到了 "),a("code",[e._v("async/await")]),e._v("，那么编译出来的代码需要"),a("code",[e._v('require("regenerator-runtime/runtime")')]),e._v(",可以只安装"),a("code",[e._v("regenerator-runtime/runtime")]),e._v("来取代安装"),a("code",[e._v("@babel/polyfill")])]),e._v(" "),a("p",[e._v("如果我们源码中使用了"),a("code",[e._v("class")]),e._v("，那么"),a("code",[e._v("babel")]),e._v("会使用很小的服务函数来实现类似"),a("code",[e._v("_classCallCheck、_defineProperties、_createClass")]),e._v("等公共方法。默认情况下,它们将被添加到所有使用了"),a("code",[e._v("calss")]),e._v("的"),a("code",[e._v("js")]),e._v("中。")]),e._v(" "),a("p",[e._v("为了避免加载多次，此时就需要用到"),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("插件")])]),e._v(" "),a("h3",{attrs:{id:"babel-plugin-transform-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel-plugin-transform-runtime"}},[e._v("#")]),e._v(" @babel/plugin-transform-runtime")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("是一个可以重复使用"),a("code",[e._v("Babel")]),e._v("注入的帮助函数，使用"),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("插件，所有帮助函数都将引用"),a("code",[e._v("@babel/runtime")]),e._v("模块,这样就可以避免编译后的代码中出现重复的帮助函数，有效减少包体积大小。")]),e._v(" "),a("p",[a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("需要和"),a("code",[e._v("@babel/runtime")]),e._v("配合使用。\n首先安装依赖， "),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("通常仅在开发时使用，但是运行时最终代码需要依赖"),a("code",[e._v("@babel/runtime")]),e._v("，所以"),a("code",[e._v("@babel/runtime")]),e._v("必须要作为生产依赖安装")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @babel/plugin-transform-runtime "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--D")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @babel/runtime "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--save")]),e._v("\n")])])]),a("p",[e._v("此时帮助函数就会从"),a("code",[e._v("@babel/runtime")]),e._v("中引入，而不是直接被注入到源代码当中")]),e._v(" "),a("p",[a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("不仅可以减少帮助函数的注入来减少代码体积，还可以为代码提供一个沙盒环境，他会将诸如"),a("code",[e._v("Promise、Set、Map")]),e._v("的内置别名作为"),a("code",[e._v("core-js")]),e._v("的别名，因此可以无缝使用他们")]),e._v(" "),a("p",[e._v("如果我们希望"),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("不仅处理帮助函数，同时也能处理"),a("code",[e._v("polyfill")]),e._v("的话，我们需要给"),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("增加配置信息，首先添加新增依赖"),a("code",[e._v("@babel/runtime-corejs3")])]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" i @babel/runtime-corejs3 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--save")]),e._v("\n")])])]),a("p",[e._v("然后需要修改"),a("code",[e._v(".babelrc")]),e._v("文件")]),e._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"presets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/preset-env"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"modules"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"plugins"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"@babel/plugin-transform-runtime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[e._v('"corejs"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("3")]),e._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("如果"),a("code",[e._v("corejs")]),e._v("的配置是 "),a("strong",[a("code",[e._v("2")])]),e._v(",那么将不会包含实例方法的"),a("code",[e._v("polyfill")]),e._v("（includes等实例方法不会被转换为兼容版本），需要单独引入。\n如果"),a("code",[e._v("corejs")]),e._v("的配置是 "),a("strong",[a("code",[e._v("3")])]),e._v("，那么不管是实例方法还是全局方法，都不会污染全局环境。")])]),e._v(" "),a("h2",{attrs:{id:"插件的顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件的顺序"}},[e._v("#")]),e._v(" 插件的顺序")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("顺序")]),e._v(" "),a("p",[e._v("插件的排序很重要\n如果两个插件都将处理程序的某个代码片段，则将根据"),a("code",[e._v('"plugins"')]),e._v("或"),a("code",[e._v('"preset"')]),e._v("中的排列顺序依次执行。")]),e._v(" "),a("ul",[a("li",[a("code",[e._v('"plugins"')]),e._v("在"),a("code",[e._v('"preset"')]),e._v("前运行")]),e._v(" "),a("li",[a("code",[e._v('"plugins"')]),e._v("顺序从前往后排列")]),e._v(" "),a("li",[a("code",[e._v('"preset"')]),e._v("顺序是颠倒的（从后往前）。")])])]),e._v(" "),a("h2",{attrs:{id:"插件的短名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插件的短名称"}},[e._v("#")]),e._v(" 插件的短名称")]),e._v(" "),a("blockquote",[a("p",[e._v("如果插件名为"),a("code",[e._v("@babel-plugin-xxx")]),e._v("，可以使用"),a("code",[e._v("@babel/xxx")]),e._v(",如果插件名为"),a("code",[e._v("babel-plugin-xxx")]),e._v("，可以直接使用"),a("code",[e._v("xxx")])])]),e._v(" "),a("h2",{attrs:{id:"babel与babel的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#babel与babel的区别"}},[e._v("#")]),e._v(" @babel与babel的区别")]),e._v(" "),a("blockquote",[a("p",[e._v("升级到"),a("code",[e._v("babel7")]),e._v("之后，就必须使用"),a("code",[e._v("@babel/xxx")]),e._v("了，可以认为"),a("code",[e._v("@babel/xxx")]),e._v("是"),a("code",[e._v("babel/xxx")]),e._v("的最新版,许多"),a("code",[e._v("babel/xxx")]),e._v("也都不再更新了，更新的是"),a("code",[e._v("@babel/xxx")]),e._v("，比如"),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v(",最新版只能使用"),a("code",[e._v("@babel/plugin-transform-runtime")]),e._v("。加"),a("code",[e._v("@")]),e._v("符号是为了区分哪些是官方包，哪些是第三方包")])])])}),[],!1,null,null,null);a.default=r.exports}}]);