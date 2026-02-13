$( document ).ready(function() {
    
    $('.b-ths-search').each(function() {
            if ( $(this).is(':visible') ) {
                $(this).attr('id', 'oem_search'); 
                $(this).find('.b-input-search').attr('id', 'oem');
                $(this).find('.b-input-search').attr('name', 'oem');
             }
         });
         
    $('.b-ths-search-wrap').on('click', function(){
		$(this).addClass('active');
	}); 
	
	$('.b-btn-reset').on('click', function(){
		$('#oem').val('');
	});
	
	$('.tpl27-special__slider').slick({
		slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 2000,
		dots: true,
		arrows: true,
		nextArrow: '<div class="slick-next slick-arrow"><svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip435_6732"><rect id="icon_site_arr_right_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="icon_site_arr_right_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip435_6732)"><path id="Vector" d="M13.58 11L4 11C3.73 11 3.48 10.89 3.29 10.7C3.1 10.51 3 10.26 3 10C3 9.73 3.1 9.48 3.29 9.29C3.48 9.1 3.73 9 4 9L13.58 9L11.29 6.7C11.11 6.51 11 6.26 11.01 6C11.01 5.74 11.11 5.49 11.3 5.3C11.49 5.11 11.74 5.01 12 5.01C12.26 5.01 12.51 5.11 12.7 5.29L16.7 9.29C16.89 9.48 17 9.73 17 10C17 10.26 16.89 10.51 16.7 10.7L12.7 14.7C12.51 14.88 12.26 14.99 12 14.98C11.74 14.98 11.49 14.88 11.3 14.69C11.11 14.5 11.01 14.25 11.01 13.99C11 13.73 11.11 13.48 11.29 13.29L13.58 11Z" fill="#2E2F38" fill-opacity="1.000000" fill-rule="evenodd"/></g></svg></div>',
  		prevArrow: '<div class="slick-prev slick-arrow"><svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip435_6728"><rect id="icon_site_arr_left_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="icon_site_arr_left_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip435_6728)"><path id="Vector" d="M6.41 9L16 9C16.26 9 16.51 9.1 16.7 9.29C16.89 9.48 17 9.73 17 10C17 10.26 16.89 10.51 16.7 10.7C16.51 10.89 16.26 11 16 11L6.41 11L8.7 13.29C8.8 13.38 8.87 13.49 8.93 13.61C8.98 13.73 9.01 13.87 9.01 14C9.01 14.13 8.98 14.26 8.93 14.39C8.88 14.51 8.81 14.62 8.71 14.71C8.62 14.81 8.51 14.88 8.39 14.93C8.26 14.98 8.13 15.01 8 15.01C7.87 15.01 7.74 14.98 7.61 14.93C7.49 14.87 7.38 14.8 7.29 14.7L3.29 10.7C3.1 10.51 3 10.26 3 10C3 9.73 3.1 9.48 3.29 9.29L7.29 5.29C7.48 5.11 7.73 5.01 7.99 5.01C8.25 5.01 8.5 5.11 8.69 5.3C8.88 5.49 8.98 5.74 8.98 6C8.99 6.26 8.88 6.51 8.7 6.7L6.41 9Z" fill="#2E2F38" fill-opacity="1.000000" fill-rule="evenodd"/></g></svg></div>',
  		responsive: [
            {
              breakpoint: 1110,
              settings: {
                slidesToShow: 3,
                dots: false,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                dots: true,
                arrows: false,
              }
            },
        ]
	});
	
	$('.tpl27-news__inner').slick({
		slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
		dots: true,
		arrows: true,
		nextArrow: '<div class="slick-next slick-arrow"><svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip435_6732"><rect id="icon_site_arr_right_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="icon_site_arr_right_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip435_6732)"><path id="Vector" d="M13.58 11L4 11C3.73 11 3.48 10.89 3.29 10.7C3.1 10.51 3 10.26 3 10C3 9.73 3.1 9.48 3.29 9.29C3.48 9.1 3.73 9 4 9L13.58 9L11.29 6.7C11.11 6.51 11 6.26 11.01 6C11.01 5.74 11.11 5.49 11.3 5.3C11.49 5.11 11.74 5.01 12 5.01C12.26 5.01 12.51 5.11 12.7 5.29L16.7 9.29C16.89 9.48 17 9.73 17 10C17 10.26 16.89 10.51 16.7 10.7L12.7 14.7C12.51 14.88 12.26 14.99 12 14.98C11.74 14.98 11.49 14.88 11.3 14.69C11.11 14.5 11.01 14.25 11.01 13.99C11 13.73 11.11 13.48 11.29 13.29L13.58 11Z" fill="#2E2F38" fill-opacity="1.000000" fill-rule="evenodd"/></g></svg></div>',
  		prevArrow: '<div class="slick-prev slick-arrow"><svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip435_6728"><rect id="icon_site_arr_left_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="icon_site_arr_left_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip435_6728)"><path id="Vector" d="M6.41 9L16 9C16.26 9 16.51 9.1 16.7 9.29C16.89 9.48 17 9.73 17 10C17 10.26 16.89 10.51 16.7 10.7C16.51 10.89 16.26 11 16 11L6.41 11L8.7 13.29C8.8 13.38 8.87 13.49 8.93 13.61C8.98 13.73 9.01 13.87 9.01 14C9.01 14.13 8.98 14.26 8.93 14.39C8.88 14.51 8.81 14.62 8.71 14.71C8.62 14.81 8.51 14.88 8.39 14.93C8.26 14.98 8.13 15.01 8 15.01C7.87 15.01 7.74 14.98 7.61 14.93C7.49 14.87 7.38 14.8 7.29 14.7L3.29 10.7C3.1 10.51 3 10.26 3 10C3 9.73 3.1 9.48 3.29 9.29L7.29 5.29C7.48 5.11 7.73 5.01 7.99 5.01C8.25 5.01 8.5 5.11 8.69 5.3C8.88 5.49 8.98 5.74 8.98 6C8.99 6.26 8.88 6.51 8.7 6.7L6.41 9Z" fill="#2E2F38" fill-opacity="1.000000" fill-rule="evenodd"/></g></svg></div>',
  		responsive: [
  		    {
              breakpoint: 1110,
              settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
              }
            },
        ]
	});
	
	$('.tpl27-banner__slider').slick({
        slidesToShow: 1,
        autoplay: true,
		dots: true,
		arrows: true,
		nextArrow: '<div class="slick-next slick-arrow"><svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip435_6732"><rect id="icon_site_arr_right_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="icon_site_arr_right_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip435_6732)"><path id="Vector" d="M13.58 11L4 11C3.73 11 3.48 10.89 3.29 10.7C3.1 10.51 3 10.26 3 10C3 9.73 3.1 9.48 3.29 9.29C3.48 9.1 3.73 9 4 9L13.58 9L11.29 6.7C11.11 6.51 11 6.26 11.01 6C11.01 5.74 11.11 5.49 11.3 5.3C11.49 5.11 11.74 5.01 12 5.01C12.26 5.01 12.51 5.11 12.7 5.29L16.7 9.29C16.89 9.48 17 9.73 17 10C17 10.26 16.89 10.51 16.7 10.7L12.7 14.7C12.51 14.88 12.26 14.99 12 14.98C11.74 14.98 11.49 14.88 11.3 14.69C11.11 14.5 11.01 14.25 11.01 13.99C11 13.73 11.11 13.48 11.29 13.29L13.58 11Z" fill="#2E2F38" fill-opacity="1.000000" fill-rule="evenodd"/></g></svg></div>',
  		prevArrow: '<div class="slick-prev slick-arrow"><svg width="20.000000" height="20.000000" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><clipPath id="clip435_6728"><rect id="icon_site_arr_left_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="white" fill-opacity="0"/></clipPath></defs><rect id="icon_site_arr_left_small" rx="-0.500000" width="19.000000" height="19.000000" transform="translate(0.500000 0.500000)" fill="#FFFFFF" fill-opacity="0"/><g clip-path="url(#clip435_6728)"><path id="Vector" d="M6.41 9L16 9C16.26 9 16.51 9.1 16.7 9.29C16.89 9.48 17 9.73 17 10C17 10.26 16.89 10.51 16.7 10.7C16.51 10.89 16.26 11 16 11L6.41 11L8.7 13.29C8.8 13.38 8.87 13.49 8.93 13.61C8.98 13.73 9.01 13.87 9.01 14C9.01 14.13 8.98 14.26 8.93 14.39C8.88 14.51 8.81 14.62 8.71 14.71C8.62 14.81 8.51 14.88 8.39 14.93C8.26 14.98 8.13 15.01 8 15.01C7.87 15.01 7.74 14.98 7.61 14.93C7.49 14.87 7.38 14.8 7.29 14.7L3.29 10.7C3.1 10.51 3 10.26 3 10C3 9.73 3.1 9.48 3.29 9.29L7.29 5.29C7.48 5.11 7.73 5.01 7.99 5.01C8.25 5.01 8.5 5.11 8.69 5.3C8.88 5.49 8.98 5.74 8.98 6C8.99 6.26 8.88 6.51 8.7 6.7L6.41 9Z" fill="#2E2F38" fill-opacity="1.000000" fill-rule="evenodd"/></g></svg></div>',
    	responsive: [
                {
                  breakpoint: 767,
                  settings: {
                    arrows: false,
                    dots: true,
                  }
                },
            ]
	});
    
    $(window).on('resize', function(){
     
		$('body').removeClass('popup-active');
        $('.tpl26-mobv-nav').removeClass('show');
        
        if ( $(window).width() > 767 ) {
            $('body').css('overflow', 'auto');
		    
        }
        
    });
    
    $(window).on('scroll', function () {
        var scrollToHeader = 54;
        if( $(this).scrollTop() > scrollToHeader ){
            $('.tpl27-header__down').addClass('sticky');
        }
          
        if( $(this).scrollTop() <= 54 ){
            $('.tpl27-header__down').removeClass('sticky');
        }
    });
    
    $('.back').on('click', function () {
        $('body').removeClass('show-catalog-fix');
        $('.tpl27-btn-catalog-desktop').removeClass('show-catalog');
    });
    
    $('.menu-back ').on('click', function () {
        $(this).parent().removeClass('show');
    });
    
    $('.tpl27-btn-catalog-desktop').on('click', function () {
        if ($(this).hasClass('show-catalog')) {
            $('body').removeClass('show-catalog-fix');
            $(this).removeClass('show-catalog');
        } else {
            $(this).addClass('show-catalog');
            $('body').addClass('show-catalog-fix');
        }
    });
	
	$('.tpl27-header__burger').on('click', function(){
		$(this).toggleClass('active');
		$('.tpl27-mobv-nav').toggleClass('show'); 
        $('body').toggleClass('popup-active');
	});
    
    /* Модуль работы формы для ступенчатого выбора автомобиля */
    var selectCatalogCar = new SelectCatalogCar($('#step-select-model'), function(selectElement, selectBrandID){
        selectElement.model.select2().trigger('change');
        selectElement.type.select2().trigger('change');
    }, function(selectElement, selectBrandID, selectModelID){
        selectElement.model.select2().trigger('change');
        selectElement.type.select2().trigger('change');
    }, function(selectElement, selectBrandID, selectModelID, selectTypeID){
        
    })
    selectCatalogCar.init()
    
    function bannerUrl() {
        if ( $('.tpl27-banner__slider').length > 0 ) {
            let dataSlides = $('.tpl27-banner__item');
            dataSlides.each(function(index, element) {
                let dataImg = $(element).attr('data-large-url');
                let dataMiddleImg = $(element).attr('data-middle-url');
                let dataMobileImg = $(element).attr('data-mobile-url');
                if ( $(window).width() >= 1025 ) {
                    $(element).css({ 'background-image': 'url(' + dataImg + ')' });
                } else if ( $(window).width() >= 992 && $(window).width() < 1025 ) {
                    $(element).css({ 'background-image': 'url(' + dataMiddleImg + ')' });
                } else {
                    $(element).css({ 'background-image': 'url(' + dataMobileImg + ')' });
                }
             });
        }
    }
    bannerUrl();
    
	$('.tpl27-user-block__item_profile').on('click', function(e){
        $('.tpl27-user-drop').toggleClass('show');
    });
    
    $(document).on('mouseup', function(e){
      let s = $('.tpl27-user-drop');
      if(!s.is(e.target) && s.has(e.target).length === 0) {
        $('.tpl27-user-drop').removeClass('show');
      }
    });
    
    const targetVin = document.getElementById("target-vin");
    const targetFrame = document.getElementById("target-frame");
    const vin = document.getElementById("vin");
    
    if (targetVin) {
      targetVin.addEventListener("input", function() {
        vin.value = targetVin.value;
      });
    }
    
    if (targetFrame) {
      targetFrame.addEventListener("input", function() {
        vin.value = targetFrame.value;
      });
    }
	
});
