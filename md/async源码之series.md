#### 前言

最近在看Node设计模式之异步编程的顺序异步迭代，简单的实现如下：

```
function series(tasks, callback) {
    let results = [];
    function iterate(index) {
        if (index === tasks.length) {
            return finish();
        }
        const task = tasks[index];
        task(function(err, res) {
            results.push(res);
            iterate(index + 1);
        });
    }

    function finish() {
        // 迭代完成的操作
        callback(null, results);
    }

    iterate(0);
}

series(
    [
        callback => {
            setTimeout(function() {
                console.log(456);
                callback(null, 1);
            }, 500);
        },
        callback => {
            console.log(123);
            callback(null, 2);
        }
    ],
    function(err, results) {
        console.log(results);
    }
);

// 456
// 123
// [1, 2]
```

而async库是一个非常流行的解决方案，在Node.js和JavaScript中来说，用于处理异步代码。它提供了一组功能，可以大大简化不同配置中一组任务的执行，并为异步处理集合提供了有用的帮助。

async库可以在实现复杂的异步控制流程时大大帮助我们，但是一个难题就是选择正确的库来解决问题。例如，对于顺序执行，有大约20个不同的函数可供选择。

好奇心起来，就想看看一个成熟的库跟我们简单实现的代码区别有多大。

#### [series](https://caolan.github.io/async/docs.html#series)

按顺序运行任务集合中的函数，每个函数在前一个函数完成后运行。如果系列中的任何函数将错误传递给其回调函数，则不会运行更多函数，并立即使用错误值调用回调函数。否则，回调会在任务完成时收到一系列结果。

```
const async = require('async');

async.series({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log(results);
    // results is now equal to: {one: 1, two: 2}
});
```

我们来看看[源码](https://github.com/caolan/async/blob/master/dist/async.js)，找到series方法，可以看到：

```
function series(tasks, callback) {
    _parallel(eachOfSeries, tasks, callback);
}
```

除了我们自己传的两个参数以外，默认还传了一个eachOfSeries，接着往下看：

```
function _parallel(eachfn, tasks, callback) {
    // noop：空的函数
    callback = callback || noop;
    // isArrayLike：检查'value'是否与array相似
    var results = isArrayLike(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        // wrapAsync：包装成异步
        wrapAsync(task)(function (err, result) {
            if (arguments.length > 2) {
                result = slice(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
```

这里我们可以看到，_parallel方法其实就是eachOfSeries方法的调用。

先解释一下eachOfSeries这三个参数：
 
 - 第一个参数就是要执行的函数的集合。
 - 第二个参数可以看成每个函数的执行（wrapAsync可以先忽略掉，直接看成这一个函数）。
 - 第三个参数就是所有函数执行完后的回调。

让我们来看看eachOfSeries是如何的实现：

```
var eachOfSeries = doLimit(eachOfLimit, 1);

function eachOfLimit(coll, limit, iteratee, callback) {
    _eachOfLimit(limit)(coll, wrapAsync(iteratee), callback);
}

function doLimit(fn, limit) {
    return function (iterable, iteratee, callback) {
        return fn(iterable, limit, iteratee, callback);
    };
}
```

我们把上面进行转换，这样看起来更明了些：

```
var eachOfSeries = function(iterable, iteratee, callback) {
    return _eachOfLimit(1)(iterable, wrapAsync(iteratee), callback);
};
```

Soga，最终就是调用_eachOfLimit完成的：

```
// limit：一次异步操作的最大数量，传1可以看成串行，一个函数执行完才进行下一个
function _eachOfLimit(limit) {
    return function (obj, iteratee, callback) {
        // once：函数只运行一次
        callback = once(callback || noop);
        if (limit <= 0 || !obj) {
            return callback(null);
        }
        // iterator：迭代器，有根据类型分类，这边简单拿数组迭代器createArrayIterator来分析
        var nextElem = iterator(obj);
        var done = false;
        var running = 0;
        var looping = false;

        function iterateeCallback(err, value) {
            running -= 1;
            if (err) {
                done = true;
                callback(err);
            }
            else if (value === breakLoop || (done && running <= 0)) {
                done = true;
                return callback(null);
            }
            else if (!looping) {
                replenish();
            }
        }

        function replenish () {
            looping = true;
            while (running < limit && !done) {
                var elem = nextElem();
                if (elem === null) {
                    done = true;
                    if (running <= 0) {
                        callback(null);
                    }
                    return;
                }
                running += 1;
                // onlyOnce：函数只运行一次
                iteratee(elem.value, elem.key, onlyOnce(iterateeCallback));
            }
            looping = false;
        }
        
        // 递归
        replenish();
    };
}

function once(fn) {
    return function() {
        if (fn === null) return;
        var callFn = fn;
        fn = null;
        callFn.apply(this, arguments);
    };
}

// 闭包大法，拿取集合中的函数
function createArrayIterator(coll) {
    var i = -1;
    var len = coll.length;
    return function next() {
        return ++i < len ? {value: coll[i], key: i} : null;
    }
}
```

终于，看到series的真身了。实现其实就是replenish()的递归大法。因为要实现串行，所以在replenish()中控制running数为1，取出集合中一个函数执行，然后回调iterateeCallback()，running数减1，再调用replenish()，这样就能控制每个函数在前一个函数完成后运行。

说起来这流程还是比较简单，但是在异步编程里还是不太好理解，我们先来了解一下js执行机制，再举一个例子来看：

##### js执行机制

 - 同步的进入主线程，异步的进入Event Table并注册函数。
 - 当指定的事情完成时，Event Table会将这个函数移入Event Queue。
 - 主线程内的任务执行完毕为空，会去Event Queue读取对应的函数，进入主线程执行。
 - 上述过程会不断重复，也就是常说的Event Loop(事件循环)。

普通版

```
function a() {
    setTimeout(function() {
        console.log(456);
    }, 500);
}

function b() {
    console.log(123);
}

function c() {
    setTimeout(function() {
        console.log(789);
    }, 0);
}

a();
b();
c();

// 123
// 789
// 456
```

按顺序执行可以看到

 - a()中setTimeout进入Event Table，注册回调函数。
 - b()，执行console.log(123)。
 - c()中setTimeout进入Event Table，注册回调函数。
 - c()中setTimeout先完成，回调函数进入Event Queue。
 - c()中setTimeout 500ms后完成，回调函数进入Event Queue。
 - 主线程从Event Queue读取回调函数并执行。

series版

```
const async = require('async');

async.series(
    [
        callback => {
            setTimeout(function() {
                console.log(456);
                callback(null, 1);
            }, 500);
        },
        callback => {
            console.log(123);
            callback(null, 2);
        },
        callback => {
            setTimeout(function() {
                console.log(789);
                callback(null, 3);
            }, 0);
        }
    ],
    function(err, results) {
        console.log(results);
    }
);

// 456
// 123
// 789
// [ 2, 1, 3 ]
```

按我自己的理解，主线程和Event Loop都执行完称为一轮：

1. 第一轮

    - 按照上面流程，主线程走到_eachOfLimit()，调用replenish()。根据while循环（运行数running < 一次异步操作的最大数量 limit），running += 1，进入集合中第一个函setTimeout数的调用，setTimeout进入Event Table，注册回调函数。
    - 回到while循环，running=limit，结束循环，结束主线程。
    - setTimeout事件完成，回调函数进入Event Queue。
    - 主线程从Event Queue读取回调函数并执行，回调iterateeCallback，running -= 1，调用replenish()。

2. 第二轮
    
    - 重复第一轮。只要的区别在于集合中的第二个函数是同步的，所有是主线程一路执行下来。

3. 第三轮
    
    - 重复第一轮。

4. 第四轮

    - 集合中的三个函数已经都执行完了，通过iterator()闭包拿到是null，回调最终结果。

##### wrapAsync

```
function wrapAsync(asyncFn) {
    return isAsync(asyncFn) ? asyncify(asyncFn) : asyncFn;
}

var supportsSymbol = typeof Symbol === 'function';

function isAsync(fn) {
    return supportsSymbol && fn[Symbol.toStringTag] === 'AsyncFunction';
}
```

wrapAsync()先判断是否异步函数，如果是es7 Async Functions的话调用asyncify，否则返回原函数。

```
function asyncify(func) {
    return initialParams(function (args, callback) {
        var result;
        try {
            result = func.apply(this, args);
        } catch (e) {
            return callback(e);
        }
        // if result is Promise object
        if (isObject(result) && typeof result.then === 'function') {
            result.then(function(value) {
                invokeCallback(callback, null, value);
            }, function(err) {
                invokeCallback(callback, err.message ? err : new Error(err));
            });
        } else {
            callback(null, result);
        }
    });
}

var initialParams = function (fn) {
    return function (/*...args, callback*/) {
        var args = slice(arguments);
        var callback = args.pop();
        fn.call(this, args, callback);
    };
};
```

采用同步功能并将其设置为异步，并将其返回值传递给回调函数。如果传递给asyncify的函数返回一个Promise，则该Promise的resolved/rejected状态将用于调用回调，而不仅仅是同步返回值。

#### 总结

平日用惯async-await、promise，用起来简单，但也导致缺少思考。而尝试用原生js去模拟，阅读源码，却能带来更多的收获。
