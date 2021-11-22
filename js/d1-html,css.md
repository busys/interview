### 1. 如何理解CSS盒子模型
盒模型组成从外到内:margin, border, padding, content
- content-box: content
- border-box: content+padding+border

### 2. BFC
块级格式化上下文(Block Format Context), 独立的渲染区域. 
特性: 
- 内部的 Box 会在垂直方向上一个接一个的放置
- 垂直方向上的距离由 margin 决定
- bfc 的区域不会与 float 的元素区域重叠
- 计算 bfc 的高度时，浮动元素也参与计算
- bfc 就是页面上的一个独立容器，容器里面的子元素不会影响外面元素

### 3. 标签语义化？
- 代码结构更加清晰
- 为了更好的可读性
- 有利于SEO优化
如header, footer, nav, section等

### 4. css与javascript引入设置
link标签一般在头部, script标签一般在body尾部
js加载正常是同步的,但是也可以指定以下两个属性进行异步加载,虽然都是异步加载但是也有一些区别
defer: 加载脚本和html加载同步进行,执行等到dom解析完成之后,按照引入顺序执行
async: 加载脚本和html加载解析同步进行,加载完成之后立即执行(可能阻塞dom解析)

### 5. HTML的块级元素，行内元素，行内块元素有哪些,区别是什么
- 块级元素: 独占一行,可设置宽高 dev, p, h1-h6
- 行内元素: 在一行内,不可设置宽高, padding生效 span, b
- 行内块元素: 在一行内,可设置宽高 img, input

### 6. meta标签
提供html的元数据,不会显示在页面上,但是对于机器是可读的,告诉浏览器怎么解析页面, 搜索引擎SEO

### 7. CSS3有哪些新特性
border-radius
border-image
box-shadow
text-shadow
linear-gradient
radial-gradient
transform
@media
flex

### 8. 实现元素隐藏
display:none, visibility: hidden, opacity:0

### 9. 如何实现元素水平居中
行内: text-align: center
块级: margin: 0 auto; 父级justify-content: center; transform; table

### 10. 如何实现元素垂直居中
行内: line-height: 父容器的高度
块级: 父级align-items: center; transform; table
行内快: vertical-align: middle

### 11. Position
static
relative
absolute
fixed
sticky

### 12. 定位元素水平垂直居中

### 13. 清除浮动

### 1. css选择器有哪些，选择器的优先级

### 1. 各种布局优缺点

### 1. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？

### 1. 解释盒模型宽高值得计算方式，边界塌陷，负值作用，box-sizing概念？

### 1. 如何实现浏览器内多个标签页之间的通信?

### 1. 解释下浮动和它的工作原理？清除浮动的方法

### href和src的区别