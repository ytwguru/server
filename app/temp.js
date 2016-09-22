import React from "react";
import ReactDom from "react-dom";

import "./Home.less";
import "../../components/Header";

var Isotope = require("isotope-layout");

export default React.createClass({

  render : function(){
    return "";
  }
});



$(window).on("load resize",function(e){
  
});

/*
 |--------------------------------------------------------------------------
 | DOCUMENT READY
 |--------------------------------------------------------------------------
 */

$(document).ready(function() {
  "use strict";


  /*
   |--------------------------------------------------------------------------
   | TOOLTIP
   |--------------------------------------------------------------------------
   */

  $('.tips').tooltip({placement:'top'});



  /*
   |--------------------------------------------------------------------------
   | COLLAPSE
   |--------------------------------------------------------------------------
   */

  $('.accordion').on('show hide', function(e){
    $('.accordion-toggle').removeClass('active');
    $(e.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('active');
    $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus icon-minus', 200);

  });

  /*
   |--------------------------------------------------------------------------
   | CONTACT
   |--------------------------------------------------------------------------
   */
  $('.slideContact').click(function(e){

    if ( $(window).width() >= 800){

      $('#contact').slideToggle('normal', 'easeInQuad',function(){

        $('#contactinfoWrapper').css('margin-left', 0);
        $('#mapSlideWrapper').css('margin-left', 3000);
        $('#contactinfoWrapper').fadeToggle();


      });
      $('#closeContact').fadeToggle();
      return false;

    }else{

      return true;

    }
    e.preventDefault();
  });


  $('#closeContact').click(function(e){


    $('#contactinfoWrapper').fadeOut('normal', 'easeInQuad',function(){
      $('#contactinfoWrapper').css('margin-left', 0);
      $('#mapSlideWrapper').css('margin-left', 3000);
    });

    $('#contact').slideUp('normal', 'easeOutQuad');

    $(this).fadeOut();

    e.preventDefault();

  });






  /* MAP */
  $('#mapTrigger').click(function(e){


    $('#mapSlideWrapper').css('display', 'block');
    initialize('mapWrapper');

    $('#contactinfoWrapper, #contactinfoWrapperPage').animate({
      marginLeft:'-2000px'
    }, 400, function() {});


    $('#mapSlideWrapper').animate({
      marginLeft:'25px'
    }, 400, function() {});

    appendBootstrap();

    e.preventDefault();
  });


  $('#mapTriggerLoader').click(function(e){


    $('#mapSlide').css('display', 'block');

    $('#contactSlide').animate({
      marginLeft:'-2000px'
    }, 400, function() {});


    $('#mapSlide').animate({
      marginLeft:'0'
    }, 400, function() {
      $('#contactSlide').css('display', 'none');
    });


    appendBootstrap();

    e.preventDefault();
  });


  $('#mapReturn').click(function(e){
    //$('#mapWrapper').css('margin-bottom', '3em');

    $('#contactSlide').css('display', 'block');
    $('#mapSlide').animate({
      marginLeft:'3000px'
    }, 400, function() {});


    $('#contactSlide').animate({
      marginLeft:'0'
    }, 400, function() {
      $('#mapSlide').css('display', 'none');
    });

    e.preventDefault();
  });



  /*
   |--------------------------------------------------------------------------
   | FLEXSLIDER
   |--------------------------------------------------------------------------
   */
  if($('.flexFullScreen').length){

    $('.flexFullScreen').flexslider({
      animation: "slide",
      controlNav: true,
      directionNav: true,
      slideshow: true,
      touch: true,
      prevText: '<i class="icon-left-open"></i>',
      nextText: '<i class="icon-right-open"></i>',
      start: function(slider){
        setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);
      },
      before: function(slider){
        setTimeout("animateTxt("+slider.currentSlide+")", 100);
      },
      after: function(slider){
        setTimeout("animateTxt("+slider.currentSlide+", 'in')", 100);
      }
    });

  }


  if($('.flexScreenSlider').length){

    $('.flexScreenSlider').flexslider({
      animation: "slide",
      controlNav:false,
      touch: true,
      slideshow: true,
      prevText: '<i class="icon-left-open"></i>',
      nextText: '<i class="icon-right-open"></i>'
    });
  }


  if($('.flexPortfolio').length){

    $('.flexPortfolio').flexslider({
      animation: "slide",
      controlNav:false,
      touch: true,
      slideshow: true,
      prevText: '<i class="icon-left-open"></i>',
      nextText: '<i class="icon-right-open"></i>'
    });
  }


  if($('.flexProject').length){

    $('.flexProject').flexslider({
      animation: "slide",
      controlNav:true,
      touch: true,
      slideshow: true,
      prevText: '<i class="icon-left-open"></i>',
      nextText: '<i class="icon-right-open"></i>'
    });
  }

  if($('.flexApp').length){

    $('.flexApp').flexslider({
      animation: "slide",
      controlNav:false,
      touch: true,
      prevText: '<i class="icon-left-open"></i>',
      nextText: '<i class="icon-right-open"></i>'
    });
  }






  /*
   |--------------------------------------------------------------------------
   | ROLLOVER BTN
   |--------------------------------------------------------------------------
   */

  $('.socialIcon').hover(
    function () {
      $(this).stop(true, true).addClass('socialHoverClass', 300);
    },
    function () {
      $(this).removeClass('socialHoverClass', 300);
    });





  $('.tabs li, .accordion h2').hover(
    function () {
      $(this).stop(true, true).addClass('speBtnHover', 300);
    },
    function () {
      $(this).stop(true, true).removeClass('speBtnHover', 100);
    });



  /*
   |--------------------------------------------------------------------------
   | ALERT
   |--------------------------------------------------------------------------
   */
  $('.alert').delegate('button', 'click', function() {
    $(this).parent().fadeOut('fast');
  });


  /*
   |--------------------------------------------------------------------------
   | CLIENT
   |--------------------------------------------------------------------------
   */

  if($('.colorHover').length){
    var array =[];
    $('.colorHover').hover(

      function () {

        array[0] = $(this).attr('src');
        $(this).attr('src', $(this).attr('src').replace('-off', ''));

      },

      function () {

        $(this).attr('src', array[0]);

      });
  }



  /*
   |--------------------------------------------------------------------------
   | Rollover boxIcon
   |--------------------------------------------------------------------------
   */
  if($('.boxIcon').length){

    $('.boxIcon').hover(function() {
      var $this = $(this);

      $this.css('opacity', '1');
      //$this.find('.boxContent>p').stop(true, false).css('opacity', 0);
      $this.addClass('hover');
      $('.boxContent>p').css('bottom', '-50px');
      $this.find('.boxContent>p').stop(true, false).css('display', 'block');

      $this.find('.iconWrapper i').addClass('triggeredHover');

      $this.find('.boxContent>p').stop(true, false).animate({
          'margin-top': '0px'},
        300, function() {
          // stuff to do after animation is complete
        });


    }, function() {
      var $this = $(this);
      $this.removeClass('hover');

      $this.find('.boxContent>p').stop(true, false).css('display', 'none');
      $this.find('.boxContent>p').css('margin-top', '250px');
      $this.find('.iconWrapper i').removeClass('triggeredHover');


    });
  }






  $('#quoteTrigger').click(function (e) {

    //$("#quoteWrapper").scrollTop(0);

    if(!$('#quoteFormWrapper').is(':visible')){
      $('html, body').animate({scrollTop: $("#quoteWrapper").offset().top}, 300);
    }

    var $this = $(this);


    $('#quoteFormWrapper').slideToggle('fast', function() {

      $this.text($('#quoteFormWrapper').is(':visible') ? "Close form" : "I have a project");

    });


    e.preventDefault();
  });



  /*
   |--------------------------------------------------------------------------
   | SHARE
   |--------------------------------------------------------------------------
   */
  if($('#shareme').length){

    var params = {
        url: ( $('#shareme').data('url') != '' ) ? $('#shareme').data('url') : window.location.href ,
        title: $('#shareme').data('title'),
        desc: $('#shareme').data('desc'),
        via: 'LittleNeko1',
        hashtags: 'premium template, awesome web design'
      },

      links = SocialShare.generateSocialUrls(params),
      $target = $('#shareme');

    $target.html(''); //clear!

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      $target.append('<a class="neko-share-btn btn ' + link.class + '" target="_blank" href="' + link.url + '" title="' + link.name + '"><i class="'+link.icon+'" style="position"></i></a>');
    }

    $target.find('a').on( 'click', SocialShare.doPopup );

  }



  /*
   |--------------------------------------------------------------------------
   | ROLL OVER PreviewTrigger
   |--------------------------------------------------------------------------
   */
  if($('.previewTrigger').length){

    $('.mask').css('height', $('.previewTrigger').height());
    $('.mask').css('width', $('.previewTrigger').width());
    // $('.mask', this).css('top', $('.previewTrigger', this).width());
    // $('.mask', this).css('left', $('.previewTrigger', this).width());

    $('.previewTrigger').hover(function() {

      var $this = $(this);

      $this.children('.mask').fadeIn('fast');

      if(Modernizr.csstransitions) {
        $('.iconWrapper', $this).addClass('animated');
        $('.iconWrapper', $this).css('display', 'block');
        $('.iconWrapper', $this).removeClass('flipOutX');
        $('.iconWrapper', $this).addClass('bounceInDown');
      }else{
        $('.iconWrapper', $this).stop(true, false).fadeIn('fast');
      }

    }, function() {

      var $this = $(this);

      $this.children('.mask').fadeOut('fast');

      if(Modernizr.csstransitions) {
        $('.iconWrapper', $this).removeClass('bounceInDown');
        $('.iconWrapper', $this).addClass('flipOutX');
        $('.iconWrapper', $this).css('display', 'none');
        $('.iconWrapper', $this).removeClass('animated');
      }else{
        $('.iconWrapper', $this).stop(true, false).fadeOut('fast');
      }

    });
  }





  if($('.scrollMenu').length){


    var isMobile = false;

    if(Modernizr.mq('only all and (max-width: 1024px)') ) {
      isMobile = true;
    }


    if (isMobile === false && $('[id^="paralaxSlice"]').length && !$('.ie8').length)
    {


      $(window).stellar({
        horizontalScrolling: false,
        verticalOffset: 150,
        responsive:true/*,
         scrollProperty: 'scroll',
         parallaxElements: false,
         horizontalScrolling: false,
         horizontalOffset: 0,
         verticalOffset: 0*/
      });

    }



  }









//END DOCUMENT READY
});



/*
 |--------------------------------------------------------------------------
 | EVENTS TRIGGER AFTER ALL IMAGES ARE LOADED
 |--------------------------------------------------------------------------
 */


$(window).on("load", function() {

  /*
   |--------------------------------------------------------------------------
   | PRELOADER
   |--------------------------------------------------------------------------
   */
  $('#status').fadeOut(); // will first fade out the loading animation
  
  $('body').delay(350).css({'overflow':'visible'});

  /*
   |--------------------------------------------------------------------------
   | ISOTOPE USAGE FILTERING
   |--------------------------------------------------------------------------
   */

  if($('.isotopeWrapper').length){

    var $container = $('.isotopeWrapper');
    var $resize = $('.isotopeWrapper').attr('id');
    // initialize isotope

    var iso = new Isotope(".isotopeWrapper", {
      itemSelector: '.isotopeItem',
      resizable: false, // disable normal resizing
      masonry: {
        columnWidth: $container.width() / $resize
      }
    });

    //var rightHeight = $('#works').height();
    $('#filter a').click(function(e){

      //$('#works').height(rightHeight);
      $('#filter a').removeClass('current');


      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      $container.isotope({
        filter: selector,
        animationOptions: {
          duration: 1000,
          easing: 'easeOutQuart',
          queue: false
        }

      });



      if (modernizrFactory.isDesktop === true && $('[id^="paralaxSlice"]').length){
        /*setTimeout(function(){
         $.stellar('refresh');
         }, 1000);*/
      }

      e.preventDefault();
      return false;
    });


    $(window).smartresize(function(){
      $container.isotope({
        // update columnWidth to a percentage of container width
        masonry: {
          columnWidth: $container.width() / $resize
        }
      });
    });


  }


  /**PROCESS ICONS**/
  $('.iconBoxV3 a').hover(function() {

    if(Modernizr.csstransitions) {

      $(this).stop(false, true).toggleClass( 'hover', 150);
      $('i', this).css('-webkit-transform', 'rotateZ(360deg)');
      $('i', this).css('-moz-transform', 'rotateZ(360deg)');
      $('i', this).css('-o-transform', 'rotateZ(360deg)');
      $('i', this).css('transform', 'rotateZ(360deg)');

    }else{

      $(this).stop(false, true).toggleClass( 'hover', 150);

    }

  }, function() {

    if(Modernizr.csstransitions) {
      $(this).stop(false, true).toggleClass( 'hover', 150);
      $('i', this).css('-webkit-transform', 'rotateZ(0deg)');
      $('i', this).css('-moz-transform', 'rotateZ(0deg)');
      $('i', this).css('-o-transform', 'rotateZ(0deg)');
      $('i', this).css('transform', 'rotateZ(0deg)');

    }else{

      $(this).stop(false, true).toggleClass( 'hover', 150);
    }

  });



  if($('.scrollMenu').length){

    $(window).scroll(function () {

      if($(window).width() > 1024){

        if($(window).scrollTop() > 0){
          $('#mainHeader').addClass('fixedHeader');
          $('body').css('margin-top', $('#mainHeader').outerHeight(true));
        }else{
          $('#mainHeader').removeClass('fixedHeader');
          $('body').css('margin-top', 0);
        }
      }
    });

    var $offset ='';
    if($(window).width() > 1024  ){

      $offset = $('.fixedHeader').outerHeight(true)/2 + 20;

    }else{

      $offset = 0;
    }
    if($('.localscroll').length){
      $('.localscroll').localScroll({
        lazy: true,
        lock: true,
        hash: false,
        offset: {
          top:  -($offset)
        }
      });
    }

    var isMobile = false;

    if(Modernizr.mq('only all and (max-width: 1024px)') ) {
      isMobile = true;
    }


    if (isMobile === false && $('[id^="paralaxSlice"]').length && !$('.ie8').length)
    {


      /*$(window).stellar({
       horizontalScrolling: false,
       verticalOffset: 150,
       responsive:true/!*,
       scrollProperty: 'scroll',
       parallaxElements: false,
       horizontalScrolling: false,
       horizontalOffset: 0,
       verticalOffset: 0*!/
       });*/

    }



  }


//END WINDOW LOAD
});



/*
 |--------------------------------------------------------------------------
 | FUNCTIONS
 |--------------------------------------------------------------------------
 */

/* CONTACT FROM */

jQuery(function() {
  "use strict";
  if( jQuery("#contactfrm").length ){

    $("#contactfrm").validate({
      // debug: true,
      errorPlacement: function(error, element) {
        error.insertBefore( element );
      },
      submitHandler: function(form) {
        jQuery(form).ajaxSubmit({
          target: ".result"
        });
      },
      onkeyup: false,
      onclick: false,
      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        phone: {
          required: true,
          minlength: 10,
          digits:true
        },
        comment: {
          required: true,
          minlength: 10,
          maxlength: 350
        }
      }
    });
  }

  if( jQuery("#projectQuote").length){

    $("#projectQuote").validate({
      // debug: true,
      errorPlacement: function(error, element) {
        error.insertBefore(element);
      },
      submitHandler: function(form) {
        jQuery(form).ajaxSubmit({
          target: ".quoteResult"
        });
      },
      onkeyup: false,


      rules: {
        name: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          email: true
        },
        company: {
          required: true,
          minlength: 2
        },
        quoteType:{
          required: true
        },
        comment: {
          required: true,
          minlength: 10,
          maxlength: 350
        }

      }
    });



  }

});

/* CONTACT FROM */

/* FLEXSLIDER INNER INFO CUSTOM ANIMATION */
function animateTxt(curSlide, action){
  "use strict";
  if(action === 'in'){
    var i = 0;
    var animaDelay = 0;

    $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'block');

    $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
      if(Modernizr.csstransitions) {

        $(this).css('-webkit-animation-delay', animaDelay+'s');
        $(this).css('-moz-animation-delay', animaDelay+'s');
        $(this).css('-0-animation-delay', animaDelay+'s');
        $(this).css('-ms-animation-delay', animaDelay+'s');
        $(this).css('animation-delay-delay', animaDelay+'s');

        $(this).show().addClass('animated').addClass($(this).attr('data-animation'));


        // $(this).show('slow', function() {
        //     $(this).addClass('animated').addClass($(this).attr('data-animation'));
        // });


      }else{
        var timing;
        $('.slideN'+curSlide+':not([class*=clone])>.caption>div').hide();
        if (i === 0){timing = 0;}else if(i === 1){timing = 300;} else{ timing = 300 * i;}
        $(this).delay(timing).fadeIn('fast');
      }
      i++;
      animaDelay = animaDelay+0.2;


    });

  }else{
    var j = 0;
    $('.slideN'+curSlide+':not([class*=clone])>.caption').css('display', 'none');

    $('.slideN'+curSlide+':not([class*=clone])>.caption>div').each(function( ) {
      if(Modernizr.csstransitions) {

        $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

      }else{
        $(this).hide();
      }
      j++;
    });
  }

}



/* MAIN MENU (submenu slide and setting up of a select box on small screen)*/



/*
 |--------------------------------------------------------------------------
 | GOOGLE MAP
 |--------------------------------------------------------------------------
 */

function appendBootstrap() {
  "use strict";
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
}




function initialize(id) {
  "use strict";
  var image = 'images/icon-map.png';

  var overlayTitle = 'Agencies';

  var locations = [
    //point number 1
    ['Madison Square Garden', '4 Pennsylvania Plaza, New York, NY'],

    //point number 2
    ['Best town ever', 'Santa Cruz', 36.986021, -122.02216399999998],

    //point number 3
    ['Located in the Midwestern United States', 'Kansas'],

    //point number 4
    ['I\'ll definitly be there one day', 'Chicago', 41.8781136, -87.62979819999998]
  ];

  /*** DON'T CHANGE ANYTHING PASSED THIS LINE ***/
  id = (id === undefined) ? 'mapWrapper' : id;

  var map = new google.maps.Map(document.getElementById(id), {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.LEFT_CENTER
    },
    streetViewControl:true,
    scaleControl:false,
    zoom: 14

  });

  var myLatlng;
  var marker, i;
  var bounds = new google.maps.LatLngBounds();
  var infowindow = new google.maps.InfoWindow({ content: "loading..." });

  for (i = 0; i < locations.length; i++) {


    if(locations[i][2] !== undefined && locations[i][3] !== undefined){
      var content = '<div class="infoWindow">'+locations[i][0]+'<br>'+locations[i][1]+'</div>';
      (function(content) {
        myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

        marker = new google.maps.Marker({
          position: myLatlng,
          icon:image,
          title: overlayTitle,
          map: map
        });

        google.maps.event.addListener(marker, 'click', (function() {
          return function() {
            infowindow.setContent(content);
            infowindow.open(map, this);
          };

        })(this, i));

        if(locations.length > 1){
          bounds.extend(myLatlng);
          map.fitBounds(bounds);
        }else{
          map.setCenter(myLatlng);
        }

      })(content);
    }else{

      var geocoder   = new google.maps.Geocoder();
      var info   = locations[i][0];
      var addr   = locations[i][1];
      var latLng = locations[i][1];

      (function(info, addr) {

        geocoder.geocode( {

          'address': latLng

        }, function(results) {

          myLatlng = results[0].geometry.location;

          marker = new google.maps.Marker({
            position: myLatlng,
            icon:image,
            title: overlayTitle,
            map: map
          });
          var $content = '<div class="infoWindow">'+info+'<br>'+addr+'</div>';
          google.maps.event.addListener(marker, 'click', (function() {
            return function() {
              infowindow.setContent($content);
              infowindow.open(map, this);
            };
          })(this, i));

          if(locations.length > 1){
            bounds.extend(myLatlng);
            map.fitBounds(bounds);
          }else{
            map.setCenter(myLatlng);
          }
        });
      })(info, addr);

    }
  }
}
