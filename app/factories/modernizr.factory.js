"use strict";
require('expose?$!expose?jQuery!jquery');

import Modernizr from "./../.modernizrrc";

export function initialize (){
  
  if(!Modernizr.input.placeholder){
    var $selector = $('[placeholder]');
    $selector.focus(function() {
      var input = $(this);
      if (input.val() == input.attr('placeholder')) {
        input.val('');
        input.removeClass('placeholder');
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == '' || input.val() == input.attr('placeholder')) {
        input.addClass('placeholder');
        input.val(input.attr('placeholder'));
      }
    }).blur();
    $selector.parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      })
    });
  }
}

export function isMobile() {
  return Modernizr.mq('only all and (max-width: 480px)');
}