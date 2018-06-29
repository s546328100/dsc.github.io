function JsonDate() {}

JsonDate.prototype.catalogues = [{"id":"29c02ed0f24d817cd7e9fc80673599a9","title":"async源码之series","year":2018,"createTime":1530258332476,"abstract":"前言最近在看设计模式之异步编程的顺序异步迭代，简单的实现如下：迭代完成的操作而库是一个非常流行的解决方案，在和中来说，用于处理异步代码。它提供了一组功能，可以大大简化不同配置中一组任务的执行，并为异步处理集合提供了有用的帮助。库可以在实现复杂的异步控制流程时大大帮助我们，但是一个难题就是选择正确的库来解决问题。例如，对于顺序执行，有大约个不同的函数可供选择。好奇心起来，就想看看一个成熟的库跟我们简单实现的代码区别有多...","next":{"id":"642ac0b4cacd8745d644aaf45d1cca7e","title":"前端小白徒手搭博客之路"}},{"id":"642ac0b4cacd8745d644aaf45d1cca7e","title":"前端小白徒手搭博客之路","year":2018,"createTime":1529480893436,"abstract":"前言本博客为最最最基本的静态页面打造而成。地址线上地址在上搭建博客，免费又方便，具体可以参考这两篇文章：怎样在上创建一个的博客手把手教你在搭建自己写的页面如果想打造博客专属域名，如下：域名购买与解析这里我们可以通过万网申请，查找你想申请域名，购买就可以了。购买域名完成，进入管理控制台：域名找到你已经购买的域名，点击解析，进入如下页面：解析添加两条记录：主机记录对应域名主机记录对应域名添加解析记录类型记录值你的仓库名在...","prev":{"id":"29c02ed0f24d817cd7e9fc80673599a9","title":"async源码之series"}}];

JsonDate.prototype.getCatalogues = function() {
    return this.catalogues;
};

JsonDate.prototype.getCatalogueInfo = function(id) {
    let catalogue = this.catalogues.filter(f => f.id === id);
    return catalogue.length ? catalogue[0] : 0;
};
