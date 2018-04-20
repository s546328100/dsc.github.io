### Node.js出现之前

web应用往往基于客户端/服务器模式，当客服端向服务器请求资源时，服务器会响应这个请求并且返回响应的资源。服务器只会在接收到客服端请求时才会做出响应，同时会在响应结束后关闭与客户端的连接。

> 这种设计模式需要考虑到效率问题，因为每一个请求都需要处理时间和资源。因此，服务器在每一次处理请求的资源后应该关闭这个连接，以便于响应其他请求。

如果同时有成千上万个请求同时发往服务器，服务器会变成什么样子呢？

线程是系统能够并行处理多任务所使用的方式。每一个发给服务器的请求都会开启一个新的线程，而每个线程会获取它运行代码所需要的一切。

> 但是这种系统有一个副作用，让请求数达到一定数量时，过多的线程会占用所有系统内存和资源。

多线程系统擅长于处理CPU密集型操作，因为这些操作需要处理大量的逻辑，而且计算这些逻辑会花费更多的时间。如果每一个请求都会被一个新的线程处理，那么主线程可以被解放出来去处理一些重要的计算，这样也能让整个系统变得更快。

### Node

Node的核心就是JavaScript和事件循环。

简单地说，事件循环就是一个等待事件然后在需要事件发生时去触发它们的程序。

NodeJS虽然是单线程，但它比多线程系统要快得多。这是因为程序往往并不是只有耗时巨长的数学运算和逻辑处理，大部分时间里它们只是写入文件、处理网络请求或是向控制台和外部设备申请权限。这些都是NodeJS擅长处理的问题：当NodeJS在处理这些事情时，它会迅速将这些事件委托给专门的系统，转而去处理下一个事件。

如果你继续深入下去，你也许会意识到NodeJS并不擅长处理消耗CPU的操作。因为CPU密集型操作会占用大量的主线程资源。对于单线程系统来说，最理想的情况就是避免这些操作来释放主线程去处理别的事情。

还有一个关键点是在JavaScript中，只有你写的代码不是并发执行的。也就是说，你的代码每次只能处理一件事，而其他工作者，比如文件系统可以并行处理它们手头的工作。

> 很久以前有一个国王，他有一千个官员。国王写了一个任务清单让官员去做，清单非常非常非常长。有一个宰相，根据清单将任务委托给其他所有官员。每完成一项任务他就将结果报告给国王，之后国王又会给他另一份清单。因为在官员工作的时候，国王也在忙于写其他清单。

这个例子要讲的是即使有很多官员在并行处理任务，国王每次也只能做一件事。这里，国王就是你的代码，而官员就是藏于NodeJS幕后的系统工作者。所以说，除了你的代码，每件事都是并行发生的。

#### 事件循环

事件循环的职责，就是不断得等待事件的发生，然后将这个事件的所有处理器，以它们订阅这个事件的时间顺序，依次执行。当这个事件的所有处理器都被执行完毕之后，事件循环就会开始继续等待下一个事件的触发，不断往复。

当同时并发地处理多个请求时，以上的概念也是正确的，可以这样理解：在单个的线程中，事件处理器是一个一个按顺序执行的。

即如果某个事件绑定了两个处理器，那么第二个处理器会在第一个处理器执行完毕后，才开始执行。在这个事件的所有处理器都执行完毕之前，事件循环不会去检查是否有新的事件触发。在单个线程中，一切都是有顺序地一个一个地执行的！

#### 任务队列

根据规范，事件循环是通过任务队列的机制来进行协调的。一个Event Loop中，可以有一个或者多个任务队列（task queue），一个任务队列便是一系列有序任务（task）的集合；每个任务都有一个任务源（task source），源自用一个任务源的task必须放到同一个任务队列，从不用源来的则被添加到不同队列。

在事件循环中，每进行一次循环操作称为tick，每一个tick的任务处理模型是比较复杂的，但关键步骤如下：

- 在此次tick中选择最先进入队列的任务（oldest task），如果有则执行（一次）
- 检查是否存在Microtasks，如何存在则不停地执行，直至清空Microtasks Queue
- 更新render
- 主线程序重复执行上述步骤

仔细查阅规范可知，异步任务可分为task和microtask两类，不同的API注册的异步任务会依次进入自身对应的队列中，然后等待Event Loop将它们依次压入执行栈中执行。

(macro)task主要包含：script（整体代码）、setTimeout、setInterval、I/O、UI交互事件、setImmediate

microtask主要包含：Promise、MutationObserver、process.nextTick

setTimeout/Promise 等API便是任务源，而进入任务队列的是他们指定的具体执行任务。来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。

![image](https://user-gold-cdn.xitu.io/2018/2/21/161b83000011359b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

##### 实例


```
console.log('script start');

setTimeout(function() {
  console.log('timeout1');
}, 10);

new Promise(resolve => {
    console.log('promise1');
    resolve();
    setTimeout(() => console.log('timeout2'), 10);
}).then(function() {
    console.log('then1')
})

console.log('script end');
```

首先，事件循环从宏任务(macrotask)队列开始，这个时候，宏任务队列中，只有一个script(整体代码)任务；当遇到任务源(task source)时，则会先分发任务到对应的任务队列中去。所以，上面例子的第一步执行如下图所示：

![image](https://user-gold-cdn.xitu.io/2018/2/21/161b830004322415?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

然后遇到了 console 语句，直接输出 script start。输出之后，script 任务继续往下执行，遇到 setTimeout，其作为一个宏任务源，则会先将其任务分发到对应的队列中：

![image](https://user-gold-cdn.xitu.io/2018/2/21/161b82ffd11d1482?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

script 任务继续往下执行，遇到 Promise 实例。Promise 构造函数中的第一个参数，是在 new 的时候执行，构造函数执行时，里面的参数进入执行栈执行；而后续的 .then 则会被分发到 microtask 的 Promise 队列中去。所以会先输出 promise1，然后执行 resolve，将 then1 分配到对应队列。

构造函数继续往下执行，又碰到 setTimeout，然后将对应的任务分配到对应队列：

![image](https://user-gold-cdn.xitu.io/2018/2/21/161b83000096dbf8?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

script任务继续往下执行，最后只有一句输出了 script end，至此，全局任务就执行完毕了。

根据上述，每次执行完一个宏任务之后，会去检查是否存在 Microtasks；如果有，则执行 Microtasks 直至清空 Microtask Queue。

因而在script任务执行完毕之后，开始查找清空微任务队列。此时，微任务中，只有 Promise 队列中的一个任务 then1，因此直接执行就行了，执行结果输出 then1。当所有的 microtast 执行完毕之后，表示第一轮的循环就结束了。

![image](https://user-gold-cdn.xitu.io/2018/2/21/161b830067f67e2a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

这个时候就得开始第二轮的循环。第二轮循环仍然从宏任务 macrotask开始。此时，有两个宏任务：timeout1 和 timeout2。

取出 timeout1 执行，输出 timeout1。此时微任务队列中已经没有可执行的任务了，直接开始第三轮循环：

![image](https://user-gold-cdn.xitu.io/2018/2/21/161b830075ffa57b?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

第三轮循环依旧从宏任务队列开始。此时宏任务中只有一个 timeout2，取出直接输出即可。

这个时候宏任务队列与微任务队列中都没有任务了，所以代码就不会再输出其他东西了。那么例子的输出结果就显而易见：

script start  
promise1  
script end  
then1  
timeout1  
timeout2  

##### 总结


```
new Promise(resolve => {
    resolve(1);
    
    Promise.resolve().then(() => {
    	// t2
    	console.log(2)
    });
    console.log(4)
}).then(t => {
	// t1
	console.log(t)
});
console.log(3);
```

这段代码的流程大致如下：

1. script 任务先运行。首先遇到 Promise 实例，构造函数首先执行，所以首先输出了 4。此时 microtask 的任务有 t2 和 t1
2. script 任务继续运行，输出 3。至此，第一个宏任务执行完成。
3. 执行所有的微任务，先后取出 t2 和 t1，分别输出 2 和 1
4. 代码执行完毕

综上，上述代码的输出是：4321

为什么 t2 会先执行呢？理由如下：

- Promise.resolve 方法允许调用时不带参数，直接返回一个resolved 状态的 Promise 对象。立即 resolved 的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。

所以，t2 比 t1 会先进入 microtask 的 Promise 队列。
