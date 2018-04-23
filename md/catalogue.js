function JsonDate () {};

JsonDate.prototype.catalogues = [{"id":"00dada12c7e31b9f7bb37a3b2af7f7d4","title":"Promise对象","createTime":1524206093443,"abstract":"###Promise的含义所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。Promise对象有一下两个特点：1.对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前...","next":"What is Node"},{"id":"08ad6d06e8a9c0c8aa4f4c45381e955d","title":"What is Node","createTime":1524205948124,"abstract":"###Node.js出现之前web应用往往基于客户端/服务器模式，当客服端向服务器请求资源时，服务器会响应这个请求并且返回响应的资源。服务器只会在接收到客服端请求时才会做出响应，同时会在响应结束后关闭与客户端的连接。>这种设计模式需要考虑到效率问题，因为每一个请求都需要处理时间和资源。因此，服务器在每一次处理请求的资源后应该关闭这个连接，以便于响应其他请求。如果同时有成千上万个请求同时发往服务器，服务器会变成什么样子...","next":"异步编程","prev":"Promise对象"},{"id":"fb6d78f11adcee47d22c2d618694e152","title":"异步编程","createTime":1524194426521,"abstract":"###如何维护本体```constfs=require('fs');functionFileObject(){this.filename='';this.file_exists=function(callback){console.log('abouttoopen:'+this.filename);fs.open(this.filename,'r',function(err,handle){if(err){conso...","prev":"What is Node"}];

JsonDate.prototype.getCatalogues = function() {
    return this.catalogues;
};

JsonDate.prototype.getCatalogueInfo = function(index) {
    return this.catalogues[index];
};
