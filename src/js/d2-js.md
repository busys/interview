### 1. 什么是闭包
在js中函数嵌套函数,内层函数可访问外层函数中的变量方法,这种特性就叫做闭包

### 2. 闭包的用途
主要为环境隔离. 使用外部的变量,但是不影响外部环境

### 3. 闭包的缺点
内层函数对外层环境的依赖导致外层函数变量持续在内存中无法被GC回收,持续占用内存.

### 4. 闭包应用场景
1. 隔离作用域,防止污染全局命名空间. 几乎每个npm模块都会在外层包一层IIFE函数,对外暴露当前包想要暴露的接口
2. 高阶函数. 调用一个函数,生成一个新的函数.

### 5. JS 有哪些数据类型
string, number, boolean, undefined, null, symbol, object 

### 6. 基本数据类型和引用数据类型有什么区别？
存储上: 基础数据类型在程序运行时存放在栈中, 引用数据类型存放在堆中,引用的指针存放在栈中
使用上: 基础数据类型中两个完全相同(===)的变量其中一个改变不会影响另外一个. 引用数据类型中则会同步改变.

### 7. 判断数据类型的方法有哪些？
1. typeof 可以判断除了null的基础数据类型. 因为js的bug(null存放的位置)导致null会被判定为object. 对于复杂的数据类型,比如array, function等都会被判为object
2. instanceof 是为了判断复杂数据类型,判断左侧是否是右侧的实例. 可弥补typeof的不足, 本质是使用原型链 a.prototype.constructor 做的全等比较, 追溯原型链直至null
3. Object.prototype.toString.call() 可以判断所有数据类型. object对象都实现了该方法,调用该方法时默认会返回`[object xxx]`的字符串

### 8. 浅拷贝与深拷贝有何区别？如何实现？
- 浅拷贝 
  只是栈级别引用指针的拷贝
  简单的新建变量赋值即可
- 深拷贝 
  会在堆空间中生成一份完全相同的数据,但是和原有的数据没有任何关系
  需要递归的遍历所有的数据,生成新的数据.
>常见的拷贝方法 
>1. Object.assign. 只会对第一层数据进行深拷贝; 
>2. {...obj}解构赋值也是对第一层深拷贝; 
>3. JSON.parse(JSON.stringify(obj))可以讲对象先序列化在反序列化, 序列化对Date('string'), regexp({}), Function(丢弃), undefined(丢弃), constructor(丢弃), NaN(null)存在问题

### 9. let、const的区别是什么？
let 定义变量,定义的变量可修改
const 定义常量,仅属性可修改

### 10. 什么是执行上下文和执行栈？
- 执行上下文: 程序运行时当前作用域下全部变量,常量,程序运行所必需环境的集合.
- 执行栈: 存储多个执行上下文. js程序运行时多个会形成多个嵌套的上下文,在js加载新的执行上下文时,会将原有上下文压入到一个执行栈中,待当前上下文执行完毕之后再从执行栈加载原有的上下文继续执行,直到执行栈中没有上下文,即js程序运行完毕.

### 11. 作用域和执行上下文的区别是什么？
js代码在运行时每个作用域(常见的作用域有全局作用域,块级作用域,函数作用域)会生成作用域的上下文(该上下文有自己的专有空间,可访问上层空间,上层空间不可访问该上下文)即执行上下文.

### 12. this指向的各种情况都有什么？
1. 在web中全局this指向window, node中全局this指向global
2. 常规函数中this指向调用该函数的对象
3. 箭头函数中this和该函数上层的this指向一致
4. class中this指向new出来的对象

### 13. 如何改变this指针的指向？
bind(obj) 不会执行函数,只会改变this指向,返回原函数
call(obj[,v1,v2]) 执行函数
apply(obj[, [v1, v2]]) 执行函数

### 14. 如何理解同步和异步？
同步: 代码运行时一次性执行完所有逻辑
异步: 代码运行时会先跳过异步逻辑,待异步的状态ready加入微任务队列之后,在下一次宏任务执行前才会执行

### 15. JS是如何实现异步的？
js引擎维护了一套微任务逻辑,宿主环境允许js引擎在执行完宏任务之后执行自己的任务. 主程序运行时会将遇到的微任务加入微任务队列,主逻辑继续执行,当当前宏任务执行完毕之后才会执行微任务队列,达到异步执行效果.

### 16. 什么是AJAX？如何实现？
异步的javascript和xml,主要是为了实现不刷新页面加载数据的诉求
xhr, fetch

### 17. 实现异步的方式有哪些？
promise, mutationObserve

### 18. 怎么理解Promise对象？
是一个拥有三种状态的异步回调函数对象. 借助了js的微任务能力, 初始化该对象的状态位pending,当微任务执行之后,对象状态会发生变化,转变成success或fail, 该过程不可逆. 状态发生变化的同时会触发resolve或reject的回调.

### 19. 怎么理解宏任务，微任务？
- 宏任务: 由宿主环境发起的任务. 如: 主程序执行, 回调函数执行, 定时器执行等
- 微任务: 由js引擎发起的任务. 如: promise, process.nextTick
### 20. 实现继承的方法有哪些？
构造函数继承
原型链继承
组合继承

### 21. require/import之间的区别？
- 规范上 require是commonjs规范 import是 ECMA 官方规范
- 使用方式上 导入方式
- 实现方式上 require倒入的对象时惰性的,一旦导入不会更改. import导入的可以在后续变更


### 22. 原型和原型链
每个对象都有一个prototype原型属性
每个对象的__proto__都指向其构造函数的prototype,直到指向object.__proto__ => null 整个过程中的链条叫原型链

### 23. 事件委托
将当前对象的事件监听绑定到外层对象上

### 24. 解释一下变量的提升
使用var定义的变量,会在程序执行开始前在顶层先定义为undefined

### 25. 如何理解高阶函数
高阶函数是通过调用函数生成的函数,其中使用了闭包,肯能初始化了一些变量和内部函数方法

### 26. 如何区分声明函数和表达式函数
声明函数: function直接定义的函数
表达式函数: 定义函数并将其赋值给一个变量

### 27. 解释原型继承是如何工作的
一个对象读取属性时会优先从其实例属性中查找,如果查找不到,会尝试使用__proto__从父级的prototype中查找,父级找不到之后会持续通过该方式向上查找,直到找到该属性或者到达终点null
