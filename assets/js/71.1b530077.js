(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{388:function(t,s,v){"use strict";v.r(s);var e=v(25),_=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#js的定义"}},[t._v("JS的定义")])]),s("li",[s("a",{attrs:{href:"#异步运行机制"}},[t._v("异步运行机制")]),s("ul",[s("li",[s("a",{attrs:{href:"#什么是event-loop"}},[t._v("什么是Event Loop")])]),s("li",[s("a",{attrs:{href:"#宏任务-task"}},[t._v("宏任务(task)")])]),s("li",[s("a",{attrs:{href:"#微任务-microtasks"}},[t._v("微任务(Microtasks)")])]),s("li",[s("a",{attrs:{href:"#完整的事件循环"}},[t._v("完整的事件循环")])]),s("li",[s("a",{attrs:{href:"#总结"}},[t._v("总结")])])])]),s("li",[s("a",{attrs:{href:"#事件循环在node中和浏览器中的区别"}},[t._v("事件循环在node中和浏览器中的区别")])])])]),s("p"),t._v(" "),s("h1",{attrs:{id:"_33、任务队列"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_33、任务队列"}},[t._v("#")]),t._v(" 33、任务队列")]),t._v(" "),s("h2",{attrs:{id:"js的定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js的定义"}},[t._v("#")]),t._v(" JS的定义")]),t._v(" "),s("blockquote",[s("p",[t._v("JS是一种单线程的语言，这样就意味着同一时间只能完成一件事。在代码中，JS引擎只能在单一线程中处理一次语句。")])]),t._v(" "),s("h2",{attrs:{id:"异步运行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步运行机制"}},[t._v("#")]),t._v(" 异步运行机制")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("callback、setTimeOut、ajax")]),t._v("等都是通过 "),s("em",[t._v("事件循环")]),s("code",[t._v("（envent loop）")]),t._v("来实现的；")])]),t._v(" "),s("h3",{attrs:{id:"什么是event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是event-loop"}},[t._v("#")]),t._v(" 什么是Event Loop")]),t._v(" "),s("blockquote",[s("p",[t._v("主线程运行的时候，产生堆和栈，栈中的代码调用各种API，分发宏任务到任务队列当中，"),s("code",[t._v("event Loop")]),t._v("会一直运行，来执行进入队列的宏任务。一个"),s("code",[t._v("event Loop")]),t._v(" 有多种的宏任务来源。但是浏览器每次都会选择一个源中的一个宏任务去执行。")])]),t._v(" "),s("h3",{attrs:{id:"宏任务-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宏任务-task"}},[t._v("#")]),t._v(" 宏任务(task)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("宏任务")]),t._v(" "),s("p",[t._v("浏览器为了能够使JS内部"),s("code",[t._v("task")]),t._v("与"),s("code",[t._v("DOM")]),t._v("任务之间有序的进行，会在一个"),s("code",[t._v("task")]),t._v("执行结束之后，在下一个"),s("code",[t._v("task")]),t._v("执行开始之前，对页面进行重新渲染（"),s("code",[t._v("task")]),t._v("->渲染->"),s("code",[t._v("task")]),t._v("->渲染->....）")]),t._v(" "),s("p",[t._v("如：鼠标点击会触发一个时间回调，需要执行一个"),s("em",[t._v("宏任务")]),t._v("，然后解析"),s("code",[t._v("HTML")]),t._v("。\n还有"),s("code",[t._v("setTimeout，setTimeout")]),t._v("的作用是等待给定的时间后为它的回调产生一个新的"),s("em",[t._v("宏任务")]),t._v("。\n"),s("img",{attrs:{src:t.$withBase("/assets/js-33-1.png"),alt:"js-33-1"}})])]),t._v(" "),s("h3",{attrs:{id:"微任务-microtasks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微任务-microtasks"}},[t._v("#")]),t._v(" 微任务(Microtasks)")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("微任务")]),t._v(" "),s("p",[t._v("微任务通常来说就是要在当前"),s("code",[t._v("task")]),t._v("执行结束后立即执行的任务，比如对一系列动作做出的反馈，或者是需要异步的执行任务而又不需要分配一个新的"),s("code",[t._v("task")]),t._v("，这样便可以减小一点性能的开销。只要执行栈中没有其他的JS代码正在执行且每个宏任务执行完，微任务队列会立即执行。如果在微任务执行期间微任务队列加入了新的微任务，会将新的微任务加入队列的尾部，之后也会被执行。所有微任务执行的时候，当前执行栈的代码必须已经执行完毕。")]),t._v(" "),s("p",[t._v("如:"),s("code",[t._v("mutation observe")]),t._v(" 的回调\n还有"),s("code",[t._v("promise")]),t._v("的回调\n"),s("img",{attrs:{src:t.$withBase("/assets/js-33-2.png"),alt:"js-33-2"}})])]),t._v(" "),s("h3",{attrs:{id:"完整的事件循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#完整的事件循环"}},[t._v("#")]),t._v(" 完整的事件循环")]),t._v(" "),s("blockquote",[s("img",{attrs:{src:t.$withBase("/assets/js-33-3.png"),alt:"js-33-3"}})]),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("总结")]),t._v(" "),s("p",[t._v("宏任务按照顺序执行，且浏览器在每个宏任务之间渲染页面\n所有微任务也按照顺序执行，且在以下场景会立即执行所有微任务")]),t._v(" "),s("ul",[s("li",[t._v("每个回调之后且"),s("code",[t._v("JS")]),t._v("执行栈中为空")]),t._v(" "),s("li",[t._v("每个宏任务结束后")])]),t._v(" "),s("p",[s("em",[t._v("注意:")]),t._v(" 同步任务执行完成后会先检查微任务队列中是否有任务执行，有的话就挨个执行，没有的话就开始检查宏任务队列中是否有任务，开始执行。")]),t._v(" "),s("h2",{attrs:{id:"事件循环在node中和浏览器中的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件循环在node中和浏览器中的区别"}},[t._v("#")]),t._v(" 事件循环在node中和浏览器中的区别")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("区别")]),t._v(" "),s("p",[t._v("Node中分好多个阶段，每个阶段都相当于一个宏任务，依次执行。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("timers")]),t._v(" 阶段：这个阶段执行 "),s("code",[t._v("timer（setTimeout、setInterval）")]),t._v("的回调")]),t._v(" "),s("li",[s("code",[t._v("I/O callbacks")]),t._v(" 阶段：处理一些上一轮循环中的少数未执行的 "),s("code",[t._v("I/O")]),t._v("回调")]),t._v(" "),s("li",[s("code",[t._v("idle, prepare")]),t._v(" 阶段：仅 "),s("code",[t._v("node")]),t._v(" 内部使用")]),t._v(" "),s("li",[s("code",[t._v("poll")]),t._v(" 阶段：获取新的 "),s("code",[t._v("I/O")]),t._v(" 事件, 适当的条件下 "),s("code",[t._v("node")]),t._v(" 将阻塞在这里")]),t._v(" "),s("li",[s("code",[t._v("check")]),t._v(" 阶段：执行 "),s("code",[t._v("setImmediate()")]),t._v(" 的回调")]),t._v(" "),s("li",[s("code",[t._v("close callbacks")]),t._v(" 阶段：执行 "),s("code",[t._v("socket")]),t._v(" 的 "),s("code",[t._v("close")]),t._v(" 事件回调")])]),t._v(" "),s("p",[t._v("上面六个阶段都不包括 "),s("code",[t._v("process.nextTick()")])]),t._v(" "),s("p",[t._v("node10以前：执行一个阶段的所有任务，再执行"),s("code",[t._v("nextTick")]),t._v("队列里的任务，再执行这个阶段中产生的微任务。\nnode11之后：和浏览器做了统一")])])])])}),[],!1,null,null,null);s.default=_.exports}}]);