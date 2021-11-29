### 1. 什么是 React？

由 facebook 开发的前端库
基于组件的方法,有助于构建可重用的 UI 组件
用于开发复杂和交互式的 web 和移动 UI

### 2. React 有什么特点？

开启了新的前端开发范式,首推了 virtual-dom
可以使用服务端渲染
遵循单向数据流和数据绑定

### 3. 列出 React 的一些主要优点。

提高了应用性能
方便的在客户端和服务端使用
使用 jsx,代码可读性好
编写测试用例方便
开发者只需关注数据层面的操作即可

### 4. React 有哪些限制？

只是一个库,不是一个框架
库非常大,需要时间理解
编码复杂,使用了内联模块和 jsx

### 5. 什么是 JSX？

js 和 xml 的结合,是一种使用 JavaScript 编写 dom 的方式

### 6. 你了解 Virtual DOM 吗？解释一下它的工作原理。

框架在自己的内部维护了一套 Virtual DOM 的 js 对象, 当页面和数据发生变化时,首先在 js 内部的 virtual-dom 内发生变更,然后将变更之后的 dom 一次性渲染到页面上

当底层数据发生变动时,整个 UI 在 virtual-dom 中重新生成
同时计算新旧 dom 的 diff
完成计算后将实际需要更改的内容更新到真实 dom 上

### 7. 为什么浏览器无法读取 JSX？

浏览器只能处理 javascript 对象, jsx 不是 js 对象, 是一种能被框架可识别并被处理成 javascript 对象的字符串

### 8. 如何理解“在 React 中，一切都是组件”这句话？

所有的页面包括页面中的模块都可以抽离成一个一个组件, 每个组件独立, 可重复使用, 且互相之间不会影响

### 9. 解释 React 中 render()/return 的目的。

返回一个 react 元素,用于在父组件中组装 dom

### 10. 什么是 Props?

当前组件接受的参数

### 11. React 中的状态是什么？它是如何使用的？

当前组件维护的一个可变数据集,是组件声明周期中控制组件变化的变量

### 12. React 组件生命周期的阶段是什么？

初始阶段 组件第一次加载, 触发 useEffect
更新阶段 state 或者 props 有变化时会触发页面变动
卸载阶段 useEffect 有 return 一个函数,卸载时会触发该函数

### 13. 详细解释 React 组件的生命周期方法。

hooks 中 useEffect 可以处理初始化,更新,卸载三个时期的任务

### 14. React 中的合成事件是什么？
react事件和dom事件不完全相同, 是根据W3C规范定义的合成事件.
将不同浏览器的行为合并成一个api, 主要是为了兼容各个浏览器,保证一致体验

### 15. 列出一些应该使用 Refs 的情况。
需要使用原生dom api时
需要使用子组件的自定义api时

### 16. 什么是高阶组件（HOC）？
调用组件生产新的组件,是一个组件逻辑重用的方法

### 17. 你能用 HOC 做什么？
代码重用,逻辑抽象
渲染劫持
状态抽象, props控制

### 18. 什么是类组件,无状态组件,函数组件,纯组件
类组件: 一个组件就是一个class
无状态组件: 组件没有state
函数组件: 一个组件就是一个function
纯组件: 一个组件没有副作用,输入由输出决定 类比函数式中的React.memo

### 19. React 中 key 的重要性是什么？
virtual-dom计算过程中唯一标识dom, 通过回收dom中所有元素来帮助react优化渲染

### 20. 什么是 React 路由？
React 路由是基于react的路由库, 使用其来实现切换dom视图来达到切换页面的效果,实现SPA的开发.

### 21. 为什么需要 React 中的路由？
当项目变大后,一个页面无法承载所有的内容,需要将内容拆分到多个页面中,且为了保证切换页面做到无刷新效果,react提供了一种切换路由,变更视图并作用于dom的解决方案.

### 22. 列出 React Router 的优点。


### 23. 类组件和函数组件之间有什么区别？
类组件使用的时候需要实例化,而函数组件直接执行函数,取得返回的结果即可

### 24. state 和 props 有什么区别？
state是组件自身的状态维护
props是父组件给子组件的参数

### 25. constructor 中 super 与 props 参数一起使用的目的是什么？
在es6中子类必须调用super()才能使用this, 将props参数传递给父类, 获取父类的实例属性

### 26. 什么是受控组件？
在html中input,select,textarea这种表单元素会维护自身的状态,并根据用户输入进行更新.
基于表单控件
非受控组件: 组件状态不受react控制
受控组件: 组件状态受react控制. 如input绑定value和onChange事件

### 27. 使用 React Hooks 有什么优势？
1. 编写组件更加简单
2. 更加方便的提供公共逻辑在多个组件之间共享

### 28. React 中的 StrictMode 是什么？
是一种帮助程序组件
验证内部组件是否遵循推荐做法
验证是否使用了不赞成使用的做法
识别潜在风险预防某些副作用

### 29. React context 是什么？
跨组件进行数据传递
const Context = React.createContext();
Context.Provider 在父组件
Context.Consumer 或者 useContext

### 30. React Fiber 是什么？
Fiber时一种基于浏览器单线程调度算法,使用了requestIdleCallback
Fiber是一种将recocilation,拆分成无数个小任务的算法,它能够随时停止,恢复. 停止和恢复的时机取决于当前的一帧内是否有足够的事件来进行计算

### 31. react diff 原理
tree diff 把树形结构按照层级分解,只比较同级元素
component diff 两个相同组件会生成相似的树形结构,不同的组件会生成不同的树形结构
element diff 对于同层的一组子节点,可以通过id进行区分

### 32. setState 和 replaceState 的区别
setState: 修改其中的状态
replaceState: 完全替换原来的状态

### 33. React 中有三种构建组件的方式
React.createClass(), ES6 class, function 

### 34. 应该在 React 组件的何处发起 Ajax 请求
componentDidMount或者useEffect
