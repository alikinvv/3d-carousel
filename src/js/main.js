$(function () {
    var wrapper = $('.wrapper');
    var currdeg  = 0;
    var active = 0;

    $('.arrow-next').on('click', { direction: 'next' }, rotate);
    $('.arrow-prev').on('click', { direction: 'prev' }, rotate);

    function rotate(e) {
        $('.slider').toggleClass('zoom');

        if (e.data.direction == 'next') {            
            currdeg = currdeg - 120;

            if (active === $('.item').length - 1) {
                active = 0;
            } else {
                active++;
            }
        }

        if (e.data.direction == 'prev') {
            currdeg = currdeg + 120;
            
            if (active === 0) {
                active = $('.item').length - 1;
            } else {
                active--;
            }
        }

        setTimeout(function () {
            $('.item').removeClass('active');
            $('.item').eq(active).addClass('active');

            wrapper.css({
                "-webkit-transform": "rotateY("+currdeg+"deg)",
                "-moz-transform": "rotateY("+currdeg+"deg)",
                "-o-transform": "rotateY("+currdeg+"deg)",
                "transform": "rotateY("+currdeg+"deg)"
            });
        }, 900);
        
        setTimeout(function () {
            //$('.slider').toggleClass('zoom');
        }, 1900);
    }
});
