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

        $(window).scroll(function() {
            let $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.gototop').addClass('active');
            } else {
                $('.gototop').removeClass('active');
            }
        });
    };

    $(function() {
        contentWayPoint();
        clickToTop();
        goToTop();
    });
})();
