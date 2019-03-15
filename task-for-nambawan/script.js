$(document).ready(function() {
    var active = false;
    $('.menu-button').on('click', function() {
        if (active === false) {
            $('.menu-bar').addClass('menu-bar_active');
            $('.menu-bar').css('transition', '0.5s');
            $('.menu-button').html('CLOSE');
            active = true;
        }
        else {
            $('.menu-bar').removeClass('menu-bar_active');
            $('.menu-bar').css('transition', '0.5s');
            $('.menu-button').html('<img src="img/menu.png" alt="menu" class="menu-button__img">' +
            '<span class="menu-button__text">MENU</span>');
            active = false;
        }
        
    })


    var left = 0;
    var left2 = 0;
    $('.slider__button_left').on('click', function() {
        left+=454;
        if(left > 0) {
			left = -454;
        }
        if (left === 0) {
            $('.slider__numeration-of-pages').html('01/02')
            $('.slider__photo-title').html('ВОСХОЖДЕНИЕ')
            $('.slider__photo-description').html('Покорили ледяные вершины с командой' + '<b class="description-bold>' + ' HBO' + '</b>')
        }
        else if (left === -454) {
            $('.slider__numeration-of-pages').html('02/02')
            $('.slider__photo-title').html('ПОГРУЖЕНИЕ')
            $('.slider__photo-description').html('Поплавали за рыбками с' + '<b class="description-bold>' + ' National Geographic' + '</b>')
        }
        $('.slider__content').css('left', left + 'px');
        $('.slider__content').css('transition', '0.3s');
    });
    $('.slider__button_right').on('click', function() {
        left-=454;
        
        if(left < -454) {
			left = 0;
        }
        if (left === 0) {
            $('.slider__numeration-of-pages').html('01/02')
            $('.slider__photo-title').html('ВОСХОЖДЕНИЕ')
            $('.slider__photo-description').html('Покорили ледяные вершины с командой' + '<b class="description-bold">' + ' HBO' + '</b>')
        }
        else if (left === -454) {
            $('.slider__numeration-of-pages').html('02/02')
            $('.slider__photo-title').html('ПОГРУЖЕНИЕ')
            $('.slider__photo-description').html('Поплавали за рыбками с' + '<b class="description-bold">' + ' National Geographic' + '</b>')
        }
        $('.slider__content').css('left', left + 'px');
        $('.slider__content').css('transition', '0.3s');
    });

    $('.slider__button-2_left').on('click', function() {
        left2+=454;
        console.log(left2)
        if(left2 > 0) {
			left2 = -454;
        }
        if (left2 === 0) {
            $('.slider-2__numeration-of-pages').html('02/02')
            $('.slider-2__photo-title').html('ПОГРУЖЕНИЕ')
            $('.slider-2__photo-description').html('Поплавали за рыбками с' + '<b class="description-bold">' + ' National Geographic' + '</b>')
        }
        else if (left2 === -454) {
            $('.slider-2__numeration-of-pages').html('01/02')
            $('.slider-2__photo-title').html('ВОСХОЖДЕНИЕ')
            $('.slider-2__photo-description').html('Покорили ледяные вершины с командой' + '<b class="description-bold">' + ' HBO' + '</b>')
        }
        $('.slider-2__content').css('left', left2 + 'px');
        $('.slider-2__content').css('transition', '0.3s');
    });
    $('.slider__button-2_right').on('click', function() {
        left2-=454;
        if(left2 < -454) {
			left2 = 0;
        }
        if (left2 === 0) {
            $('.slider-2__numeration-of-pages').html('02/02')
            $('.slider-2__photo-title').html('ПОГРУЖЕНИЕ')
            $('.slider-2__photo-description').html('Поплавали за рыбками с' + '<b class="description-bold">' + ' National Geographic' + '</b>')
        }
        else if (left2 === -454) {
            $('.slider-2__numeration-of-pages').html('01/02')
            $('.slider-2__photo-title').html('ВОСХОЖДЕНИЕ')
            $('.slider-2__photo-description').html('Покорили ледяные вершины с командой' + '<b class="description-bold">' + ' HBO' + '</b>')
        }
        $('.slider-2__content').css('left', left2 + 'px');
        $('.slider-2__content').css('transition', '0.3s');
    });


    var win = $(window).height();
    $('.scroll-button').click(function () {
        $('body,html').animate({
            scrollTop: win
        }, 600);
        return false;
    });
	$('.title-block').on('wheel',function (e) {
		if(window.pageYOffset === 0 && e.originalEvent.deltaY>0) {
			$('body,html').animate({
				scrollTop: win 
			}, 600);
			return false;
		}
           
    });
    $(window).on('scroll', function() {
        if (window.pageYOffset < win) {
            $('.pagination__pageline_1').removeClass('pagination__pageline_active');
            $('.pagination__pageline_2').removeClass('pagination__pageline_active');
            $('.pagination__pageline_3').removeClass('pagination__pageline_active');
            $('.pagination__pageline_1').addClass('pagination__pageline_active');
        }
        else if (window.pageYOffset >= win && window.pageYOffset < 2*win) {
            $('.pagination__pageline_1').removeClass('pagination__pageline_active');
            $('.pagination__pageline_2').removeClass('pagination__pageline_active');
            $('.pagination__pageline_3').removeClass('pagination__pageline_active');
            $('.pagination__pageline_2').addClass('pagination__pageline_active');
        }
        else {
            $('.pagination__pageline_1').removeClass('pagination__pageline_active');
            $('.pagination__pageline_2').removeClass('pagination__pageline_active');
            $('.pagination__pageline_3').removeClass('pagination__pageline_active');
            $('.pagination__pageline_3').addClass('pagination__pageline_active');
        }
    })
    
});