(function() {
    let contentWayPoint = function() {
        let i = 0;
        $('.animate-box').waypoint(
            function(direction) {
                if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
                    i++;
                    $(this.element).addClass('item-animate');
                    setTimeout(() => {
                        $('body .animate-box.item-animate').each(function(k) {
                            var el = $(this);
                            setTimeout(
                                () => {
                                    let effect = el.data('animate-effect');
                                    if (effect === 'fadeIn') {
                                        el.addClass('fadeIn animated-fast');
                                    } else if (effect === 'fadeInLeft') {
                                        el.addClass('fadeInLeft animated-fast');
                                    } else if (effect === 'fadeInRight') {
                                        el.addClass('fadeInRight animated-fast');
                                    } else {
                                        el.addClass('fadeInUp animated-fast');
                                    }
                                    el.removeClass('item-animate');
                                },
                                k * 200,
                                'easeInOutExpo'
                            );
                        });
                    }, 100);
                }
            },
            {offset: '85%'}
        );
    };

    let goToTop = function() {
        $('.js-gotop').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate(
                {
                    scrollTop: $('html').offset().top
                },
                500,
                'easeInOutExpo'
            );
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

    let sidebar = function() {
        $('.arrow.in').on('click', function() {
            let parent = $(this)
                .parent()
                .parent();
            if (parent.attr('class').includes('areas-c')) {
                parent.removeClass('areas-c');
                parent.addClass('areas-s').addClass('pulse animated');

                $(this)
                    .parent()
                    .hide().removeClass('adapt-sidebar');
                $('.arrow.out').removeClass('hide').addClass('show');
            }
        });
        $('.arrow.out').on('click', function() {
            let next = $(this).next();
            if (next.attr('class').includes('areas-s')) {
                next.removeClass('areas-s');
                next.addClass('areas-c').removeClass('pulse animated');
            }
            $(this).removeClass('show').addClass('hide');
            $('.sidebar').show().addClass('adapt-sidebar');
        });
        // $('.arrow').mouseover(function() {
        //     $(this).addClass('flash animated');

        //     setTimeout(() => {
        //         $(this).removeClass('flash animated');
        //     }, 500);
        // });
    };

    $(function() {
        contentWayPoint();
        goToTop();
        sidebar();
    });
})();
