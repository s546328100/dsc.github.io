## [博客](http://dusuchao.xin)

静态文件版博客，样式大多仿造  [hexo-theme-next主题](http://notes.iissnan.com)。
> 预览地址：http://dusuchao.xin  

#### 运行预览

1. 文章支持markdown，文件名后缀为md
2. 静态数据默认写在catalogue.js文件下，供html加载
3. 运行shell.js文件，将所有文章写入catalogue.js文件中

##### 运行shell.js

需要node运行环境

方式

- node shell
- node shell -d （默认加载md文件夹下的md文件并写入catalogue.js）
- node shell 文件夹 文件名

> 所有路径都是相对于shell文件

对应文章的增删改，只需操作相应文件后，运行shell文件，然后上传git即可。