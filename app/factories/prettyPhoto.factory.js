"use strict";
require('expose?$!expose?jQuery!jquery');
import $ from "jquery";
import "prettyphoto";

export function initialize(){
  var $selector = $("a.prettyPhoto"),
    $galarySelector = $("a.prettyPhotoGallery");

  if($selector.length){
    $selector.prettyPhoto({
      animation_speed:'fast',
      slideshow:10000,
      hideflash: true
    });
  }

  if($galarySelector.length){

    $galarySelector.click(function (e) {
      var images = $(this).data("rel");
      images = images.split(',');
      var api_images =[];
      
      $.each(images, function( index, value ) {
        api_images.push(value);
      });

      //api_titles = [$(this).data("title")];
      //api_descriptions = [$(this).data("title")];
      $.fn.prettyPhoto();
      $.prettyPhoto.open(api_images);
      e.preventDefault();
    });

  }
}