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



/* CONTACT FROM */

/* FLEXSLIDER INNER INFO CUSTOM ANIMATION */



/* MAIN MENU (submenu slide and setting up of a select box on small screen)*/



/*
 |--------------------------------------------------------------------------
 | GOOGLE MAP
 |--------------------------------------------------------------------------
 */


