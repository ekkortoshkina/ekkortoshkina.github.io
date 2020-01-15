$(document).ready(function(){
	//
	$(function(){
        var hash = window.location.hash;
        console.log(hash);
        if (hash === "") {
        	console.log('empty')
        }else{
        	$('#overlay').addClass('active');
        }
	    $(hash).addClass('active');
	});
	$('.modal-next').click(function(){
		if ($(this).parents('.speaker-modal').next().hasClass('speaker-modal')) {

			$(this).parents('.speaker-modal').removeClass('active');
			$(this).parents('.speaker-modal').next('.speaker-modal').addClass('active');
		}
	})
	$('.modal-prev').click(function(){
		if ($(this).parents('.speaker-modal').prev().hasClass('speaker-modal')) {
			$(this).parents('.speaker-modal').removeClass('active');
			$(this).parents('.speaker-modal').prev('.speaker-modal').addClass('active');
		}
	})


	//
	$('.slider-photos').slick({
	  infinite: true,
	  lazyLoad: 'progressive',
		speed: 300,
	  slidesToShow: 1,
	  variableWidth: true,
	  slidesToScroll: 1,
	});

	$('.slider-photos2').slick({
	  infinite: true,
	  slidesToShow: 1,
	  variableWidth: true,
	  slidesToScroll: 1,
	});

	$('.slider-photos3').slick({
		  infinite: true,
		  slidesToShow: 1,
		  variableWidth: true,
		  slidesToScroll: 1,
	});

	$('.slider-photos4').slick({
		  infinite: true,
			lazyLoad: 'progressive',
			speed: 200,
		  slidesToShow: 1,
		  variableWidth: true,
		  slidesToScroll: 1,
			centerMode: true,
			swipeToSlide: true
		});


	//
	$slickElement = $('.promo-slider');

	var $status = $('.slider-count');

	$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $status.text(i + '/' + slick.slideCount);
	});

	if($(window).width() <= 767) {
		$('.master-group_list, .master-group_single .master-group_list').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			rows: 1,
			dots: false,
			variableWidth: true
		});
		$('.first-lesson .left').after($('.first-lesson .title'));
	}

	$slickElement.slick({
		slidesToShow:1,
		slidesToScroll:1,
		infinite:true,
		arrows:true,
		dots:false
	});

	$('.pricelist.mobile .table-header').click(function(){
		if($(this).parent().hasClass('active')) {
			$('.pricelist.mobile .table-row').removeClass('active');
		} else {
			$('.pricelist.mobile .table-row').removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	$slickElement2 = $('.you-get .slider');

	var $status2 = $('.you-get_slider_count');

	$slickElement2.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
	    var i = (currentSlide ? currentSlide : 0) + 1;
	    $status2.text(i + '/' + slick.slideCount);
	});

	$slickElement2.slick({
		slidesToShow:1,
		slidesToScroll:1,
		infinite:true,
		arrows:true,
		dots:false
	});

	$('.promo-name.white').click(function(){
		$(this).addClass('active');
	})

	$('.speakers-slider_wrapper').slick({
		slidesToShow:4,
		slidesToScroll:4,
		infinite:true,
		arrows:true,
		dots:false,
		responsive: [
			{
		      breakpoint: 1200,
		      settings: {
		      	slidesToScroll:1,
		      	arrows:false,
		      	variableWidth:true
		      }
		    }
		]
	});

	$('.speakers-slider_wrapper').on('afterChange', function(){
		$('.speakers-slider_wrapper .speakers-slide').off();
		$('.speakers-slider_wrapper .speakers-slide.slick-active:last').on('mouseenter', function(){
	       $('.speakers-slider_wrapper').addClass('active');
	    });

		$('.speakers-slider_wrapper .speakers-slide.slick-active:last').on('mouseleave', function(){
	       $('.speakers-slider_wrapper').removeClass('active');
		});
	});

	$('.speakers-slider_wrapper .speakers-slide.slick-active:last').on('mouseenter', function(){
       $('.speakers-slider_wrapper').addClass('active');
    });

	$('.speakers-slider_wrapper .speakers-slide.slick-active:last').on('mouseleave', function(){
       $('.speakers-slider_wrapper').removeClass('active');
	});

	$('.programm-list_nav_item').click(function(){
		$('.programm-list_nav_item').removeClass('active');
		$(this).addClass('active');
		var id = $(this).data('tab');
		if(id == 'all') {
			$('.programm-list_tabs_tab').addClass('active');
		} else {
			$('.programm-list_tabs_tab').removeClass('active');
			$('.programm-list_tabs_tab[data-tab="'+id+'"]').addClass('active');
		}
	});

	$('.faq-list_item').click(function(){
		if($(this).hasClass('active')) {
			$('.faq-list_item').removeClass('active');
		} else {
			$('.faq-list_item').removeClass('active');
			$(this).addClass('active');
		}
	})

	$('img[data-src]').each(function(){
		if ($(window).width() > 1920) {
			$(this).prop('src', $(this).data('src'));
		} else if ($(window).width() <= 1920 && $(window).width() >= 1600) {
			$(this).prop('src', $(this).data('src1920'));
		} else if ($(window).width() < 1600 && $(window).width() >= 1200) {
			$(this).prop('src', $(this).data('src1366'));
		} else if ($(window).width() < 1200) {
			$(this).prop('src', $(this).data('src1199'));
		}
	});

	$('[data-modal]').click(function(){
		$('.modal').removeClass('active');
		$($(this).data('modal')).addClass('active');
		$('#overlay').addClass('active');
			lazyLoad;
		return false;
	});

	$('[data-modal1199]').click(function(){
		if($(window).width() <= 1230) {
			$('.modal').removeClass('active');
			$($(this).data('modal1199')).addClass('active');
			$('#overlay').addClass('active');
			lazyLoad;
			return false;
		}
	});

	$('#overlay, .modal-close').click(function(){
		$('.modal, #overlay').removeClass('active');
		return false;
	});

	$('.official-partners_list_item').on('mouseenter', function(){
		$(this).find('.grayscale').addClass('grayscale-off');
	});

	$('.official-partners_list_item').on('mouseleave', function(){
		$(this).find('.grayscale').removeClass('grayscale-off');
	});

	let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	let active = false;

	const lazyLoad = function() {
	if (active === false) {
	  active = true;

	  setTimeout(function() {
	    lazyImages.forEach(function(lazyImage) {
	      if ((lazyImage.getBoundingClientRect().top <= window.innerHeight && lazyImage.getBoundingClientRect().bottom >= 0) && getComputedStyle(lazyImage).display !== "none") {
	        lazyImage.src = lazyImage.dataset.original;
	        lazyImage.classList.remove("lazy");

	        lazyImages = lazyImages.filter(function(image) {
	          return image !== lazyImage;
	        });

	        if (lazyImages.length === 0) {
	          document.removeEventListener("scroll", lazyLoad);
	          window.removeEventListener("resize", lazyLoad);
	          window.removeEventListener("orientationchange", lazyLoad);
	        }
	      }
	    });

	    active = false;
	  }, 200);
	}
	};

	document.addEventListener("scroll", lazyLoad);
	window.addEventListener("resize", lazyLoad);
	window.addEventListener("orientationchange", lazyLoad);

	$('.href').click(function(){
	    var elementClick = $(this).attr("href");
	    var destination = $(elementClick).offset().top;

	    $("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: destination
	    }, 800);
	    $('.modal, #overlay').removeClass('active');
	    return false;
	});

	$('.next-tab').click(function(){
		if($('.programm-list_nav_item.active').next().hasClass('programm-list_nav_item')) {
			$('.programm-list_nav_item.active').next().trigger('click');
			$('.programm-list_nav').scrollLeft($('.programm-list_nav').scrollLeft() + 120);
		} else {
			$('.programm-list_nav_item:first').trigger('click');
			$('.programm-list_nav').scrollLeft(0)
		}

		if($('.programm-list_nav_item.active').next().hasClass('programm-list_nav_item')) {
			$('.next-tab').text('Программа следующего дня');
		} else {
			$('.next-tab').text('Вернуться к 1 дню');
		}
	    if($(window).width() < 1200) {
	    	var destination = $('#programm').offset().top;
	    } else {
	    	var destination = $('#programm').offset().top-80;
	    }
		$("html:not(:animated),body:not(:animated)").animate({
	      scrollTop: destination
	    }, 800);
	});
})
