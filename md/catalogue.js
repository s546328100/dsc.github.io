function JsonDate () {};

JsonDate.prototype.catalogues = [
    {
        "id": 'e905cc523e4147db21945290308f8ecf',
        "title": "异步编程",
        "createTime": '2018/4/20 下午3:19:57',
        "next": "What is Node",
        "abstract": `大多数情况下，当一个函数嵌套在另一个函数中时，它就会自动继承父/宿主函数的作用域，因而就能访问所有的变量了。那么，为什么嵌套的回调函数却没有返回正确的filename属性的值呢？
        这个问题归根于this关键字和异步回调函数本身。别忘了，当你调用fs.open这样的函数的时候，它会首先初始化自己，然后调用底层的操作系统函数，并把回调函数插到事件队列中去。执行完会立即返回给FileObject#file_exists函数，然后退出。当fs.open函数完成任务后，No...`,
    },
    {   
        "id": '08ad6d06e8a9c0c8aa4f4c45381e955d',
        "title": "What is Node",
        "createTime": '2018/4/20 下午3:19:57',
        "prev": "异步编程",
        "next": "Promise对象",
        "abstract": `web应用往往基于客户端/服务器模式，当客服端向服务器请求资源时，服务器会响应这个请求并且返回响应的资源。服务器只会在接收到客服端请求时才会做出响应，同时会在响应结束后关闭与客户端的连接。

        这种设计模式需要考虑到效率问题，因为每一个请求都需要处理时间和资源。因此，服务器在每一次处理请求的资源后应该关闭这个连接，以便于响应其他请求。
        
        如果同时有成千上万个请求同时发往服务器，服务器会变成什么样子呢？
        
        线程是系统能够并行处理...`,
    },
    {
        "id": '277e8ffc5df7d28ac61937910f808864',
        "title": "Promise对象",
        "createTime": '2018/4/20 下午3:19:57',
        "prev": "What is Node",
        "abstract": `所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。

        Promise对象有一下两个特点：
        
        1. 对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。
        2. 一旦状态改变，就不...`,
    }
];

JsonDate.prototype.getCatalogues = function() {
    return this.catalogues;
};

JsonDate.prototype.getCatalogueInfo = function(index) {
    return this.catalogues[index];
};