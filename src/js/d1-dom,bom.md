### 1. BOM对象
浏览器对象模型(Browser Obejct Model). js在浏览器中所能使用的浏览器相关api都封装在该对象中

### 2. BOM事件?
浏览器事件, 如鼠标事件,键盘事件,HTML事件

### 3. 常见BOM事件?
blur, click, setTimeout, setInterval, history相关事件, performance事件等

### 4. BOM事件处理程序?
相应某个事件的函数就叫事件处理程序

### 5. DOM
文档对象模型(Document Object Model). js可操作基于XML的html对象

### 6. DOM节点类型有哪些
文档节点
元素节点
文本节点
属性节点
注释节点

### 7. DOM获取节点
document.getElementByxxx
document.querySelector

### 8. DOM创建节点与插入节点
append
insert

### 9. DOM0级和DOM2级事件有什么区别
onclick: 绑定事件时onclick只能绑定一个
addEventListener: 可以绑定/解绑多个事件, 且能制定冒泡捕获

### 10. textContent、innerText、innnerHTML、value的区别
- textContent: 获取和设置文本内容,与innerText不同的是,可以获取script和style标签中的内容
- innerText: 获取和设置文本内容
- innerHTML: 获取和设置html代码
- value: 表单中的元素的值

### 11. 关于dom的api有什么
arrtributes, textContent, domContent

### 12. 什么叫Dom事件流？
事件发生时在节点之间按照特定的顺序传播,这个传播过程叫dom事件流
dom中的事件触发时从最外层开始触发,逐层向内直到目标节点(该过程位捕获阶段), 然后再向外触发(该过程位冒泡)

### 13. 如何让事件先冒泡后捕获
事件流的执行流程是必须先冒泡后捕获的. 但是可以在捕获的时候给执行体加一个setTimeout
原理: 当前的捕获任务本身是个宏任务,而且比冒泡阶段的任务加入任务队列中早. 当开始执行任务队列时,如果当前任务的执行结果是加入任务队列, 则实际代码执行的时机会比冒泡晚.

### 14. 说一下事件代理
在上层dom中添加事件监听, 因为内层事件冒泡机制, 外层的监听函数可以收到该事件然后执行特定的操作

### 15. 不会冒泡的事件
focus, blur, media, mouseleave & mouseenter, scroll,
