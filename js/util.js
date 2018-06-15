function dateFormat(date, fmt) {
    if (!fmt) fmt = 'yyyy-MM-dd hh:mm:ss';
    date = new Date(date);
    let o = {
        'M+': date.getMonth() + 1, //月份
        'd+': date.getDate(), //日
        'h+': date.getHours(), //小时
        'm+': date.getMinutes(), //分
        's+': date.getSeconds(), //秒
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度
        S: date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o) if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    return fmt;
}

function groupArray(arr, props) {
    let result = {};
    arr.forEach(e => {
        if (!result[e[props]]) result[e[props]] = [];
        result[e[props]].push(e);
    });
    return result;
}

function blank() {
    document.querySelectorAll('.markdown-body a').forEach(v => {
        v.setAttribute('target', '_blank');
    });
}

function goToAnchor() {
    $('a[href*=\\#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = ($target.length && $target) || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate(
                    {
                        scrollTop: targetOffset
                    },
                    500
                );
                return false;
            }
        }
    });
};

function showImage() {
    let container = document.documentElement || document.body;
    let img, div, src;
    let x, y, w, h, tx, ty, tw, th, ww, wh;
    let closeMove = function() {
        if (div == undefined) {
            return false;
        }
        div.style.opacity = 0;
        document.body.style.overflow = '';

        // 延迟移除dom
        setTimeout(function() {
            div.remove();
            img.remove();
        }, 100);
    };

    let closeFade = function() {
        if (div == undefined) {
            return false;
        }

        div.style.opacity = 0;
        img.style.opacity = 0;
        document.body.style.overflow = '';

        // 延迟移除dom
        setTimeout(function() {
            div.remove();
            img.remove();
        }, 100);
    };

    // 监听滚动关闭层
    document.addEventListener('scroll', function() {
        closeFade();
    });

    document.querySelectorAll('img').forEach(v => {
        w = v.naturalWidth;
        h = v.naturalHeight;
        tw = v.offsetWidth;
        th = v.offsetHeight;
        // console.log(w);
        // console.log(tw);
        if (w > tw || h > th) {
            // console.log(v);
            v.style.cssText = `
                cursor: zoom-in;
            `;
            v.addEventListener('click', function(e) {
                // 注册事件
                src = e.target.src;

                // 创建遮罩层
                div = document.createElement('div');
                div.style.cssText = `
                    position:fixed;
                    left:0;
                    top:0;
                    bottom:0;
                    right:0;
                    background-color:#fff;
                    transition:opacity .3s;
                    opacity:0;
                    z-index: 2999;
                    width: 100%;
                    heigth: 100%;
                    margin: auto;
                    overflow: auto;
                    display: -webkit-box;
                    -webkit-box-align: center;
                    -webkit-box-pack: center;
                    display: -moz-box;
                    -moz-box-align: center;
                    -moz-box-pack: center;
                    display: -o-box;
                    -o-box-align: center;
                    -o-box-pack: center;
                    display: -ms-box;
                    -ms-box-align: center;
                    -ms-box-pack: center;
                    display: box;
                    box-align: center;
                    box-pack: center;
                `;
                document.body.appendChild(div);

                wh = window.innerHeight;
                ww = window.innerWidth;
                if (h > wh) document.body.style.overflow = 'hidden';

                setTimeout(function() {
                    div.style.opacity = 1;
                }, 0);
                // (此处可以加loading)

                // 创建副本
                img = new Image();
                img.src = src;
                img.style.cssText = `
                    cursor: zoom-out;
                    transition:opacity .8s;
                    opacity:0;
                `;
                img.onload = function() {
                    div.appendChild(img);

                    // 延迟写入否则不会有动画
                    setTimeout(function() {
                        img.style.opacity = 1;

                        // 点击隐藏
                        div.onclick = img.onclick = closeMove;
                    }, 0);
                };
            }); //end event
        }
    }); //end forEach
}
