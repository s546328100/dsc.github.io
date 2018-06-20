function JsonDate() {}

JsonDate.prototype.catalogues = [{"id":"642ac0b4cacd8745d644aaf45d1cca7e","title":"前端小白徒手搭博客之路","year":2018,"createTime":1529480893436,"abstract":"前言本博客为最最最基本的静态页面打造而成。地址线上地址在上搭建博客，免费又方便，具体可以参考这两篇文章：怎样在上创建一个的博客手把手教你在搭建自己写的页面如果想打造博客专属域名，如下：域名购买与解析这里我们可以通过万网申请，查找你想申请域名，购买就可以了。购买域名完成，进入管理控制台：域名找到你已经购买的域名，点击解析，进入如下页面：解析添加两条记录：主机记录对应域名主机记录对应域名添加解析记录类型记录值你的仓库名在..."}];

JsonDate.prototype.getCatalogues = function() {
    return this.catalogues;
};

JsonDate.prototype.getCatalogueInfo = function(index) {
    return this.catalogues[index];
};
