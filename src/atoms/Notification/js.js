(function (undefined) {
    'use strict';

    var elements = '.notification.wrapper .icon,.notification.wrapper .txt,.notification.wrapper .num';
    var notifications = $('.notification.wrapper .notifications');

    $('body').on('click', elements, function () {
      
            //caption.toggleClass('read');

        setTimeout(function () {
            notifications.toggleClass('_reading');
        },  100);
        
        $('.notification.wrapper li').each(function (i) {
            var t = $(this);
            setTimeout(function () {
                t.toggleClass('_animate');
            }, (i + 1) * 100);
        });

    });
})();