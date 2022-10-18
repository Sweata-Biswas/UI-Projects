(function($) {
  "use strict";

  $(window).on('scroll', function() {
    if ($(window).scrollTop() > 360) {
      $('body').addClass('is-scrolled');
    } else {
      $('body').removeClass('is-scrolled');
    }
  });

  $.fn.queued = function() {
      var self = this;
      var func = arguments[0];
      var args = [].slice.call(arguments, 1);
      return this.queue(function() {
          $.fn[func].apply(self, args).dequeue();
      });
  }

    subMenuCentering()

    $('.slick-carousel').slick({
      customPaging : function(slider, i) {
          return '<a href="#"><i class="la la-circle"></i></a>';
      },
    });

  $(window).on('resize', function(){
      subMenuCentering();
  }); 

  const players = Plyr.setup('.plyr-js'); 

  $(window).on('load', function(){
      $('.preloader').delay(200).fadeOut(300);
      $('[data-isotope]').isotope();      

      if ($('[data-check-image-brightness]').length) {
        BackgroundCheck.init({
          targets: '[data-bg-check-target], .slick-dots',
          images: '[data-check-image-brightness] img',
          classes: { dark: 'text-white', light: 'text-dark', complex: 'background--complex' },
        });
      }
    });

    $('.slick-carousel[data-check-image-brightness]').on('afterChange', function(event, slick, currentSlide, nextSlide){
      BackgroundCheck.refresh();
      if ( $( '[data-bg-check-target]' ).hasClass( 'text-white' )) {
        $('.navigation').addClass('text-white');
      } else {
        $('.navigation').removeClass('text-white');
      }
    });

    AOS.init();

    $('[data-toggle-target], .content-mask').on('click', function(event) {
      event.preventDefault();
      var target = $(this).attr('data-toggle-target'); 

      if($(this).hasClass('close-menu-panel')) {

        $('.side-panel').removeClass('sub-menu-active').removeClass('reveal');
        $('.search-panel').removeClass('reveal');
        setTimeout(function () { 
          $('body').removeClass('side-panel-active');
          $('body').removeClass('search-panel-active');
          $('.menu li ul').removeClass('reveal');
      }, 250);
      setTimeout(function () {        
          $(target).removeClass('reveal');
      }, 500);
      setTimeout(function () {        
        $('.animate-in').removeClass('animate-in');   
      }, 750);
      
      } else if($(this).hasClass('open-menu-panel')) {
        $(target).toggleClass('reveal');
        $('body').toggleClass('side-panel-active');
        setTimeout(function () { 
        $('.menu > li').each(function(i){
            $(this).delay(i*100).queued('addClass', 'animate-in');
        });
      }, 200);
      

      } else if($(this).hasClass('open-search-panel')) {
        $(target).toggleClass('reveal');
        $('body').toggleClass('side-panel-active search-panel-active');
      

      } else {

      $('.side-panel').removeClass('sub-menu-active');
      $('.search-panel').removeClass('reveal');
      $('.menu li .reveal').removeClass('reveal');
      $(target).toggleClass('reveal');

      }   
    });

  $('.has-submenu > a').on('click', function(event) {
    event.preventDefault();
    var currentItem = $(this);
    if($('.menu li ul').hasClass('reveal')) {
      $('ul.reveal').removeClass('reveal');
      $('.menu li ul li').removeClass('animate-in');
      setTimeout(function () { 
          $(currentItem).next('ul').toggleClass('reveal');
            $('.menu li ul.reveal li').each(function(i){
              $(this).delay(i*100).queued('addClass', 'animate-in ');
          });
      }, 300);
      
    } else {
      $(this).next('ul').toggleClass('reveal');
      $(this).closest('.side-panel').toggleClass('sub-menu-active');
      $('ul.reveal li').each(function(i){
          $(this).delay(i*100).queued('addClass', 'animate-in');
      });
    }
    
  });

  $('body').on('click', '[data-close-sub-menu] a', function(event) {
      event.preventDefault();
        $(this).closest('ul').toggleClass('reveal');
        $(this).closest('.side-panel').toggleClass('sub-menu-active');
    });

    $('body').on('click', '[data-filter]', function(event) {
      event.preventDefault();
      var filterValue = $(this).attr('data-filter');
      jQuery(this).closest('.isotope-wrapper').find('[data-isotope]').isotope({
        filter: filterValue
      });
      AOS.refresh();
    });

    $(window).on('load', function(){
      $( '.typed-text-js' ).each(function(index, value) {
        jQuery(this).attr('id' , 'typed-text-js-' + index);
        var typedArea = '#' + jQuery(this).attr('id');    
        var strings = jQuery(this).data('typed-text-strings').split('|');
        var speed = jQuery(this).data('typed-text-speed');

        var options = {
          strings: strings,
          typeSpeed: speed,
          loop: true,
          loopCount: Infinity
        };

        var typed = new Typed( typedArea, options );
      });
    });

  $('[data-background-image-src]').each(function(index, value) {
      var imgSrc = jQuery(this).attr('data-background-image-src');
      $(this).css('background-image', 'url(' + imgSrc + ')');
    });

  $('.hover-info-box').each(function(index, value) {
    $(this).bind('mousemove', function(e){
      var html = $(this).find('[data-floating-box-content]').html();
      $('.floating-info-box').html(html);
        $('.floating-info-box').css({
            left:  e.pageX + 10,
            top:   e.pageY + 10,
           display: 'block'
        });
    });
    $(this).bind('mouseout', function(e){
      $('.floating-info-box').html('');
        $('.floating-info-box').css({
            left:  e.pageX + 10,
            top:   e.pageY + 10,
            display: 'none'
        });
    });
  });

    if ($('.map-js, #map').length) {
      $('.map-js, #map').each(function(index, value) {

        $(this).attr('id', 'map' + index);
        var mapStyle = jQuery(this).attr('data-map-style'); 
        if( typeof mapStyle  == 'undefined' ) {
          var mapStyle = '[{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#000000"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":"-39"},{"lightness":"35"},{"gamma":"1.08"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"saturation":"0"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"10"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-14"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"10"},{"gamma":"2.26"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"saturation":"-100"},{"lightness":"-3"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"54"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-7"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.local","elementType":"all","stylers":[{"saturation":"-100"},{"lightness":"-2"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"saturation":"-100"},{"lightness":"100"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"saturation":"-100"},{"lightness":"-100"}]}]';
        } else if(mapStyle == 'none') {
          var mapStyle = false; 
        } else {
          var mapStyle = jQuery(this).data('map-style'); 
        }

        var mapLat = jQuery(this).attr('data-map-latitude'); 
        if( typeof mapLat == 'undefined' ) {
          var mapLat = '40.7127837';
        } else if(mapLat == 'none') {
          var mapLat = false; 
        } else {
          var mapLat = jQuery(this).attr('data-map-latitude'); 
        }

        var mapLong = jQuery(this).attr('data-map-longitude'); 
        if( typeof mapLong == 'undefined' ) {
          var mapLong = '-74.00594130000002';
        } else if(mapLong == 'none') {
          var mapLong = false; 
        } else {
          var mapLong = jQuery(this).attr('data-map-longitude'); 
        }       

        var mapLat = parseFloat(mapLat); 
        var mapLong = parseFloat(mapLong); 

        var newID =  $(this).attr('id');

        function initialize() {
          var mapOptions = {
            zoom: 15,
            scrollwheel: false,
            center: { lat: mapLat, lng: mapLong },
            styles: mapStyle,
            scrollwheel: false,
            scaleControl: false,
            draggable: false,
            mapTypeControl: false,
            zoomControl: false,
            fullscreenControl: false,
            streetViewControl: false
          };
          var map = new google.maps.Map(document.getElementById(newID),
              mapOptions);
          var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: 'assets/images/pin-light.png',
            map: map
          });
        }
        google.maps.event.addDomListener(window, 'load', initialize);  

      });
    }

    jQuery.fn.spectragram.accessData = {
      accessToken: '21689727871.1c727b5.3effb2f028234023ba41c967ba050bed'
    };

    $('.instagram-feed').each(function(index, value) {

      var galleryDiv = jQuery(this).find('.instagram-feed-gallery');
      var numberItems = jQuery(this).attr('data-instagram-number-of-items');

      $(galleryDiv).spectragram('getUserFeed',{
        max: numberItems,
        size: "medium",
        wrapEachWith: '<div class="instagram-item column column-20"></div>'
      });

    });

    var highlightedItems = document.querySelectorAll('.progress-wrap path');

    highlightedItems.forEach(function(userItem) {
      var progressPath = userItem;
      var pathLength = progressPath.getTotalLength();

      progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
      progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
      progressPath.style.strokeDashoffset = pathLength;
      progressPath.getBoundingClientRect();
      progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

      var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - scroll * pathLength / height;
        progressPath.style.strokeDashoffset = progress;
      };

       updateProgress();
        $(window).scroll(updateProgress);
    });

    jQuery('.progress-wrap').on('click', function(event) {
      event.preventDefault();
      jQuery('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    jQuery('a:not([target="_blank"]):not([href*="#"]):not([href^=mailto]):not(.fancybox-media):not(.btn.responsive-menu):not(a[href$="jpg"]):not([href$="jpeg"]):not(a[href$="gif"]):not(a[href$="png"]):not(a.ajax-link):not(a.cbp-singlePage):not(a.cbp-singlePageInline):not(a.hash)').click(function(){
      var href = jQuery(this).attr('href');
      jQuery('.preloader').fadeIn(100);
      setTimeout(function(){
        window.location = href;
      }, 200);
      return false;
       
    });

    $('a.smooth-scroll').on("click", function(e) {
      var anchor = $(this);

      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000, 'easeOutExpo')
      e.preventDefault();
    });

})(jQuery); 