### 1. webpack与grunt、gulp的不同？
grunt和gulp是基于任务和流的打包工具. 找到一个或一类文件,对其进行一系列链式操作,更新流上的数据,整条链式操作构成了一个任务,多个任务构成了整个构建流程
webpack是基于入口的模块打包工具. 给定一个或者多个入口文件,webpack会自动递归的去加载所有引用的文件,根据不同的文件,采用不同的loader去处理,根据需要的能力去增加plugin拓展webpack能力.
总结来说: grunt和gulp需要开发者将整个打包过程进行任务的拆解,并合理控制任务的调用关系. webpack需要开发者找到入口文件,清除loader的使用逻辑

### 2. 与webpack类似的工具还有哪些？谈谈你为什么最终选择（或放弃）使用webpack？
rollup, parcel
webpack 适用大型复杂的前端项目
rollup 适用于lib库打包
parcel 适用于实验类项目

### 3. 有哪些常见的Loader？他们是解决什么问题的？
file-loader 把文件输出到文件夹中,代码中通过相对路径的方式引用文件
url-loader 能在文件很小的情况下,以base64的把文件注入到代码中
source-map-loader 加载额外的map文件,方便断点调试
babel-loader 高版本js代码转换
image-loader 加载并压缩图片文件
css-loader cdd代码处理成webpack理解的模块
style-loader 把css注入到js中,通过style去加载css
less-loader 把less转换成css
ts-loader 把ts转换成js

### 4. 有哪些常见的Plugin？他们是解决什么问题的？
define-plugin 定义环境变量
commons-chunk-plugin 抽取公共代码
html-webpack-plugin 提供index.html文件

### 5. Loader和Plugin的不同？
- 作用上: loader是作为加载器,处理webpack不能处理的文件, plugin是作为webpack的功能插件,用来拓展webpack的功能

### 6. webpack的构建流程是什么?从读取配置到输出文件这个过程尽量说全
webpack的执行流程是一个串行的过程
1. 初始化参数: 根据命令行,配置文件得倒打包的最终参数
2. 开始编译: 根据上一步得倒的参数,初始化compiler对象,加载所有配置的插件,开始执行run方法
3. 确定入口: 根据配置,找到入口文件
4. 编译模块: 从入口文件出发,调出所有配置的loader对模块进行编译. 找出本模块依赖的模块再递归查找直到所有依赖的模块都经过了本步骤处理.
5. 完成模块编译: 进过模块编译,得倒了每个模块编译后的最终内容以及他们之间的关系.
6. 输出资源: 根据模块之间的依赖关系,组装成一个个chunk,再把每个chunk转换成一个单独的文件加入到输出文件列表
7. 输出完成: 确定好输出文件之后,根据输出配置(路径和文件名)把文件写入文件系统
在以上的过程中webpack会在特定的时间点进行事件广播,插件在收到监听的事件之后可以执行特定的逻辑,或者调用webpack的api改变webpack的运行结果.

### 7. 是否写过Loader和Plugin？描述一下编写loader或plugin的思路？
loader: 把文件源码转译为新的文件内容.
plugin: 根据webpack在运行的生命周期中会广播许多事件,plugin可以监听这些事件,在合适的时机根据webpack的api改变输出结果

### 8. webpack的热更新是如何做到的？说明其原理？
监听到模块的变动之后,webpack会将变动的部分打包放入内存;
通知client部分可以向server部分拉取新的模块;
client请求hot.json和hot.js
*.hot.js加载完成之后,执行自执行方法,将新的模块加入的webpack的模块cache中
对比新旧模块,决定是否更新模块,检查模块之间的依赖关系,更新模块的同时,更新模块之间的模块依赖

### 9. 如何利用webpack来优化前端性能？（提高性能和体验）
优化webpack的输出结果,让打包结果在浏览器中运行快速,高效.
1. 压缩代码
2. tree shaking
3. 提取公共代码
4. 控制输出产物的publicPath,利用CDN加速

### 10. 如何提高webpack的构建速度？
1. dll 将不需要打包的库,打成dll包
2. happy pack 多线程打包
3. 设置externals,提取常用库

### 11. 怎么配置单页应用？怎么配置多页应用？

### 12. npm打包时需要注意哪些？如何利用webpack来更好的构建？
确认是打lib包还是工程文件包

### 13. webpack是解决什么问题而生的?
随着前端项目随着功能和复杂度越来越大之后,单纯的人工维护js之间的依赖关系已经几乎不可能.同时对于新版js的使用,less,scss的转换,都需要一个好的工具去处理这些问题

### 14. 如何配置多入口文件?
entry中可以使用对象或者数组的方式,指定多个入口

### 15. webpack中的模块解析规则具体实现
- 绝对路径 import '/home/me/file';
- 相对路径 import '../home/me';
- 模块路径 import 'module';

### 16. 什么是模块热替换
在程序的运行过程中替换,添加或删除模块,而无需重新加载整个页面

### 17. 前端为什么需要打包和构建
代码层面:
1. 体积更小, 加载更快(合并压缩,使用CDN)
2. 提前使用高级语言和语法(es2020, less, scss)
3. 兼容性处理和错误检查(js, css兼容  eslint)
团队层面:
1. 统一高效的开发环境(node, ts)
2. 统一的构建流程和产出标准(build, html,css,js)
3. 集成公司的开发规范(提测,上线)
