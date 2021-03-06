$(document).ready(function() {

    var showTime = (function() {
        var target = $('.js-target'),
            item = $('.js-item');

        function showAndHide() {
            target.on('click', function() {
                if($($(this).data('time')).hasClass('location__time--show')) {
                    $(item).removeClass('location__time--show');
                    $(this).removeClass('location--active');
                } else {
                    $(item).removeClass('location__time--show');
                    $($(this).data('time')).addClass('location__time--show');
                    $(target).removeClass('location--active');
                    $(this).addClass('location--active');
                }
            })
        }

        function hideOnOutside() {
            $(document).on('click', function(e) {
                var target = e.target;
                var closestItem = target.closest('.js-target');
                if(!$(closestItem).is($(target))) {
                    $(this).find('img').removeClass('location--active')
                    $(this).find(item).removeClass('location__time--show');
                }
            });
        }

        return {
            toggleTime: showAndHide,
            hideIt: hideOnOutside
        }
    })();

    showTime.toggleTime();
    showTime.hideIt();

    $('.location__time').click(function(e) {
        e.stopPropagation();
    });
});