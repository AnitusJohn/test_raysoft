//GLOBAL CONFIGURATION FOR SCROLL ANIMATIONS
AOS.init({
    offset: 0,
    duration: 1000,
    easing: 'ease',
    delay: 10,
    once: true
  });
  
  //PRELOADER CONFIGURATION
  $(window).on('load', function () { // makes sure the whole site is loaded
    $('#status').fadeOut(); // will first fade out the loading animation
    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('body').delay(350).css({
      'overflow': 'visible'
    });
  })
  
  // CAROUSEL INTERVAL 
  $('.carousel').carousel({
    interval: 5000,
    pause: "false"
  });
  // CAROUSEL INTERVAL ENDS HERE
  
  // ANIMATION STATS
  $(document).ready(($) => {
    'use strict';
    $('.counter').counterUp({
      delay: 50,
      time: 3000,
    });
  });
  // ANIMATION STATS - ENDS HERE
  
  // magnificPopup Configuration (Portfolio)
  $('.image-link').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
  
    zoom: {
      enabled: true, 
  
      duration: 700, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
  
      // The "opener" function should return the element from which popup will be zoomed in
      // and to which popup will be scaled down
  
      opener(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
      },
    },
  
  });
  // magnificPopup Configuration (Portfolio) - ends here
  
  //PORTFOLIO NAVLINKS FILTERING
  $(function () {
    
    var selectedClass = "";
    $(".fil-cat").on("click", function () {
        selectedClass = $(this).attr("data-rel");
        $("#portfolio").fadeTo(400, 0);
        $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio").fadeTo(400, 1);
        }, 300);
  
    });
  });
  //PORTFOLIO NAVLINKS FILTERING ENDS HERE
  
  // TEXT ANIMATION WHEN MOVING MOUSE
  let lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;
  
  function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
  
    translate = `translate(${x}px, ${y}px) scale(1)`;
  
    $('.agency2 .bg-text').css({
      '-webit-transform': translate,
      '-moz-transform': translate,
      transform: translate,
    });
  
    window.requestAnimationFrame(moveBackground);
  }
  
  $(window).on('mousemove click', (e) => {
    const lMouseX = Math.max(-55, Math.min(100, $(window).width() / 2 - e.clientX));
    const lMouseY = Math.max(-55, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (60 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
    lFollowY = (60 * lMouseY) / 100;
  });
  moveBackground();
  // TEXT ANIMATION WHEN MOVING MOUSE - ENDS HERE
  
  $(function () {
      
      $(document).ready(function() {
          var HM = {
              jqs_slideList: '.slideList',
              jqs_tabList: '.slides .carouselLinks',
              init: function() {
                  var aSliders = $(this.jqs_slideList);
                  if (aSliders.length > 0) {
                      this.slideShow(aSliders);
                  }
              },
              slideShow: function(eSlideListParam) {
                  var slideList = eSlideListParam,
                      slides = slideList.find('li'),
                      tabList = slideList.siblings('.carouselLinks'),
                      tabs = tabList.find('.object-new'),
                      speed = 500;
                  tabs.on('click', 'a', function(e) {
                      $(this).trigger('slides.swap');
                      e.preventDefault();
                  });
                  setInterval(function() {
                      var current = parseInt($('li.selected a').data('links-to').split('_')[1], 10);
                      var idx = current - 1;
                      var max = $('.carouselLinks li a').length;
                      idx = (current < max) ? (idx + 1) : 0;
                      $('.object-new a:eq(' + idx + ')').trigger('click');
                  }, 3000);
                  tabs.find('a').bind('slides.swap', function() {
                      var self = $(this),
                          selfIndex = self.parent().index(),
                          targetSlide = slides.eq(selfIndex);
                      slides.filter('.active').stop(true, false).fadeOut(speed, function() {
                          $(this).removeClass('active');
                      });
                      targetSlide.stop(true, false).fadeIn(speed).addClass('active');
                      tabs.removeClass('selected');
                      self.parent().addClass('selected');
                  });
              }
          };
          HM.init();
      });
  });