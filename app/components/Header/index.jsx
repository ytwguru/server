import "./Header.less";
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';
import responsiveNav from "responsive-nav";

export default React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount : function(){
    (function() {
      "use strict";
      var $mainMenu = $('#mainMenu').children('ul');
      $mainMenu.on('mouseenter', 'li', function() {
        var $this = $(this),
          $subMenu = $this.children('ul');

        if( $subMenu.length ){$this.addClass('hover').stop();}
        else {
          if($this.parent().is($(':gt(1)', $mainMenu))){
            $this.stop(false, true).hide().fadeIn('slow');
          }else{
            $this.stop(false, true);
          }
        }

        if($this.parent().is($(':gt(1)', $mainMenu))){
          $subMenu.css('display', 'block');
          $subMenu.stop(false, true).animate({
            left:150,
            opacity:1
          }, 250,'easeInOutQuad');

        }else{
          $subMenu.stop(false, true).slideDown(200,'easeInOutQuad');
        }
      }).on('mouseleave', 'li', function() {

        var $nthis = $(this),
          $subMenu = $nthis.children('ul');

        if($nthis.parent().is($(':gt(1)', $mainMenu))){

          //$nthis.children('ul').stop(false, true).css('left', 130).css('opacity', 0).css('display', 'none');

          $nthis.children('ul').stop(false, true).animate({
            left:130,
            opacity:0
          }, 250,'easeInOutQuad', function() {
            $nthis.children('ul').css('display', 'none');
          });
        }else{
          $nthis.removeClass('hover').removeClass('Shover').children('ul').stop(false, true).hide();
        }
        if( $subMenu.length ){
          $nthis.removeClass('hover');
        }
        else{
          $nthis.removeClass('Shover');
        }
      });

      if ($('#resMainMenu').length){
        responsiveNav("#resMainMenu", {jsClass: "jsNav"});
      }else{

        // ul to select
        var optionsList = '<option value="" selected>Navigate...</option>';
        $mainMenu.find('li').each(function() {
          var $this   = $(this),
            $anchor = $this.children('a'),
            depth   = $this.parents('ul').length - 1,
            indent  = '';

          if( depth ) {
            while( depth > 0 ) {
              indent += ' - ';
              depth--;
            }
          }

          optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
        }).end().after('<select class="responsive-nav">' + optionsList + '</select>');

        $('.responsive-nav').on('change', function() {
          window.location = $(this).val();
        });
      }

    })();
  },
  render : function (){
    return <header id="mainHeader" className="clearfix">
      <div className="container">
        <div className="row">
          <div className="col-md-12 "> <a href="index.html" className="brand">
            <img src="/assets/images/main-logo.png" alt="YT Advisors"/></a>
            <nav id="resMainMenu" className="scrollMenu">
              <ul className="clearfix">
                <li className="active"><a href="#home">Home</a> </li>
                <li><a href="#news">News</a> </li>
                <li><a href="#services">Services</a> </li>
                <li><a href="#works">Works</a> </li>
                <li><a href="#team">Team</a> </li>
                <li><a href="features.html">Features</a> </li>
                <li><a href="blog-home-sidebar-right.html">Blog</a> </li>
                <li><a href="#contactSlice">Contact</a> </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>;
  }
});