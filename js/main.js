(function() {
    let contentWayPoint = function() {
        let i = 0;
        $('.animate-box').waypoint(
            //第1个参数为waypoints事件响应时所执行的代码，是一个匿名函数即可
            function(direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
                    i++;
                    $(this.element).addClass('item-animate');
                    setTimeout(() => {
                        $('body .animate-box.item-animate').each(function(k) {
                            var el = $(this);
                            setTimeout(
                                () => {
                                    el.addClass('fadeInUp animated-fast');

                                    el.removeClass('item-animate');
                                },
                                k * 200,
                                'easeInOutExpo'
                            );
                        });
                    }, 100);
                }
            },
            //第2个参数为偏移量,本例即该div到窗口高度90%时触发
            {offset: '90%'}
        );
    };

    let goToTop = function() {
        $('html, body').animate(
            {
                scrollTop: $('html').offset().top
            },
            500,
            'easeInOutExpo'
        );
    };

    let clickToTop = function() {
        $('.js-gotop').on('click', function(event) {
            event.preventDefault();
            goToTop();
            return false;
        });

        $(window).scroll(debounce(handle, 100));
        // 防抖
        function debounce(fn, wait) {
            var timeout = null;
            return function() {
                if (timeout !== null) clearTimeout(timeout);
                timeout = setTimeout(fn, wait);
            };
        }
        // 处理函数
        function handle() {
            let currentScroll = $(window).scrollTop();

            // 回顶部
            top(currentScroll);

            // 文章目录
            section(currentScroll);

            lazyload();
        }

        function top(currentScroll) {
            if (currentScroll > 200) $('.gototop').addClass('active');
            else $('.gototop').removeClass('active');
        }

        function section(currentScroll) {
            let currentSection;
            $(':header').each(function(i, v) {
                let divPosition = $(this).offset().top;
                if (divPosition - 1 < currentScroll) {
                    $currentSection = $(this);
                }

                if (currentScroll > 100) {
                    let id = $currentSection.attr('id');
                    $('a[href*=\\#]').removeClass('card-activate');
                    $('a[href=\\#' + id).addClass('card-activate');
                }
            });

            let comment = $('#comment').offset() || '';
            if (comment) {
                if (comment.top - currentScroll <= 300) {
                    $('a[href*=\\#]').removeClass('card-activate');
                    $('a[href=\\#' + 'comment').addClass('card-activate');
                }
            }
        }
    };

    let lazyload = function() {
        let currentScroll = $(window).scrollTop();

        let lazyImgs = $.map($('img[data-src]').get(), function(i) {
            return $(i);
        });

        console.log(lazyImgs);
        if (lazyImgs.length <= 0) return;

        let wheight = $(window).height();
        $.each(lazyImgs, function(index, $i) {
            if ($i.offset().top - currentScroll - 300 < wheight) {
                $i.attr('src', $i.attr('data-src'));
                $i.addClass('lazy-show');
                $i.removeAttr('data-src');
            }
        });
    }

    $(function() {
        contentWayPoint();
        clickToTop();
        goToTop();
        lazyload();
    });
})();
