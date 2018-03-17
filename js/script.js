$(document).ready(function() {


	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".tab_buttons_in").on("click","a", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 100;
	    $('body,html').animate({scrollTop: top}, 500);
	});
	
	// шапка при прокрутке
	/*$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#header').addClass('scroll');
	    } else {
		$('#header').removeClass('scroll');
	    }
	});*/

	
	// класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// открытие подменю
	
	$('.main_menu .submenu a').on('click', function(e){
		if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');
			
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		}
	});
	
	// закрытие подменю
	$('body').click(function (event) {
	    if ($(event.target).closest('.main_menu .submenu').length == 0 ) {
		$('.main_menu .submenu ul').slideUp(500);
		$('.main_menu .submenu').removeClass('show');
	    }
	});
	
	// показываем меню
	$('.menu_button').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		$('.main_menu').css('left', '50%');
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('').on('click', function(){
		$('.submenu.active').removeClass('show');
		$('.submenu').removeClass('show');
		//$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});
	
	$(window).on("load",function(){
		$(".popup .text").mCustomScrollbar({
			theme:"minimal-dark"
		});
        });
	
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1300) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	$('.menu_button_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $(this).removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $(this).addClass('active');
		}
	});
	
	
	    if ( window.innerWidth>0 ) {
		    $('.main_section').toggleClass("hidden");
		    //$('#main_slide.hidden').addClass("animated");	
	    };
	
	
	$(window).on('load scroll', function(){
		$('.main_section').each(function(){
		    if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
			$(this).addClass('animated');
		    }	
		});
	});
	
	
	$('#services .tab_buttons .tab_but').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons .tab_but', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	
	$( function() {
	    $( "#accordion" ).accordion({
	      heightStyle: "content",
	      collapsible: true,
	      active: false
	    });
	} );
	
	
	
	$('.main_section .production_slider').slick({
		dots: false, //true,
		arrows: true,
		infinite: true,
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1300,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 601,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	      
	$('.sertificates_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1300,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		  {
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 400,
		    settings: {
		      slidesToShow: 1,
		    }
		  }
		]
	});
	
	
	$('.main_section .clients_wrap').slick({
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
            nextArrow: '<span class="slick-next">&nbsp;</span>',
	    //fade: true,
	    speed: 1500,
	    slidesToShow: 4,
	    //variableWidth: true,
	    responsive: [{
		breakpoint: 1301,
		settings: { 
		    slidesToShow: 3,
		}
	    },
	    {
		breakpoint: 1001,
		settings: { 
		    slidesToShow: 2,
		}
	    },
	    {
		breakpoint: 801,
		settings: { 
		    slidesToShow: 1,
		}
	    },
	    {
		breakpoint: 600,
		settings: { 
		    slidesToShow: 2,
		}
	    },
	    {
		breakpoint: 451,
		settings: { 
		    slidesToShow: 1,
		}
	    }]
	});
	
	$('.blog_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1500,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1000,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 701,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
    
});

