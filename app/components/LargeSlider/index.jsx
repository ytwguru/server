import "./LargeSlider.less";
import React from 'react';
import "supersized";

export default React.createClass({
  componentDidMount : function (){
     jQuery(function($){
       "use strict";

       var $homeSelector = $('#home');
       var $supersizeSelector = $('#supersized');
       if($homeSelector.length){

         $homeSelector.height($(window).height());
         $supersizeSelector.height($(window).height());

         $supersizeSelector.supersized({

           // Functionality
           slideshow               :   1,          // Slideshow on/off
           autoplay                :   1,          // Slideshow starts playing automatically
           start_slide             :   1,          //  Start slide (0 is random)
           stop_loop               :   0,          // Pauses slideshow on last slide
           random                  :   0,          // Randomize slide order (Ignores start slide)
           slide_interval          :   12000,      // Length between transitions
           transition              :   6,          // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
           transition_speed        :   1000,       // Speed of transition
           new_window              :   1,          // Image links open in new window/tab
           pause_hover             :   0,          // Pause slideshow on hover
           keyboard_nav            :   1,          // Keyboard navigation on/off
           performance             :   1,          // 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
           image_protect           :   1,          // Disables image dragging and right click with Javascript

           // Size & Position
           min_width               :   0,          // Min width allowed (in pixels)
           min_height              :   0,          // Min height allowed (in pixels)
           vertical_center         :   1,          // Vertically center background
           horizontal_center       :   1,          // Horizontally center background
           fit_always              :   0,          // Image will never exceed browser width or height (Ignores min. dimensions)
           fit_portrait            :   1,          // Portrait images will not exceed browser height
           fit_landscape           :   0,          // Landscape images will not exceed browser width

           // Components
           slide_links             :   'blank',    // Individual links for each slide (Options: false, 'num', 'name', 'blank')
           thumb_links             :   0,          // Individual thumb links for each slide
           thumbnail_navigation    :   0,          // Thumbnail navigation
           slides                  :   [           // Slideshow Images
             { 
               image : './assets/images/slider/super/supersized-1.jpg', 
               title : '<h1 class="bigTitle">Sun is shining<br /> <small>the weather is sweet</small></h1><a href="#news" class="btn sliderBtn" >Read more</a>', 
               thumb : '', 
               url : ''
             },
  
             {
               image : './assets/images/slider/super/supersized-2.jpg', 
               title : '<h1 class="bigTitle">Moon is rising<br /> <small>the night is bitter</small></h1><a href="#works" class="btn sliderBtn" >Check our work</a>', 
               thumb : '', 
               url : ''
             },
  
             {
               image : './assets/images/slider/super/supersized-3.jpg', 
               title : '<h1 class="bigTitle">Groove is in the heart<br /> <small>ahaaanhaan</small></h1><a href="#works" class="btn sliderBtn" >More info</a>', 
               thumb : '', 
               url : ''
             }
           ],

           // Theme Options
           progress_bar            :   0,          // Timer for each slide
           mouse_scrub             :   0
         });
       }
       $supersizeSelector.prependTo("#home");
     });
  },
  render : function(){
    return <div id="home">
        <a id="prevslide" className="load-item">
        </a>
        <a id="nextslide" className="load-item">
        </a>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div id="slidecaption"> </div>
            </div>
          </div>
        </div>
    </div>;
  }
});