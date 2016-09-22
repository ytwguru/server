import React from "react";
import ReactDom from "react-dom";

import "./../../assets/less/global.less";
import "./../../assets/less/icons.less";
import "./Home.less";
import Header from "../../components/Header";
import Preloader from "../../components/Preloader";
import LargeSlider from "../../components/LargeSlider";
import News from "../../components/News";
import ArrowsNav from "../../components/ArrowsNav";
import MidBreaker from "../../components/MidBreaker";
import Services from "../../components/Services";
import Work from "../../components/Work";
import Quote from "../../components/Quote";
import Team from "../../components/Team";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import * as modernizrFactory from "../../factories/modernizr.factory";
import * as prettyPhotoFactory from "../../factories/prettyPhoto.factory";

export default React.createClass({
  componentDidMount : function(){
    modernizrFactory.initialize();
    prettyPhotoFactory.initialize();
    if($('.scrollMenu').length) {


      $(window).scroll(function () {

        if ($(window).width() > 1024) {

          if ($(window).scrollTop() > 0) {
            $('#mainHeader').addClass('fixedHeader');
            $('body').css('margin-top', $('#mainHeader').outerHeight(true));

          } else {
            $('#mainHeader').removeClass('fixedHeader');
            $('body').css('margin-top', 0);

          }
        }
      });
    }

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
  },
  getArrowNav : function(section){
    var data = [];
    switch(section){
      case 0:
        data = [
          { link : "#home", color : "color1"},
          { link : "#services", color : "color4"}
        ];
        break;
      case 1:
        data = [
          { link : "#news", color : "color3"},
          { link : "#paralaxSlice2", color : "color1"}
        ];
        break;
      case 2:
        data = [
          { link : "#works", color : "color4"},
          { link : "#team", color : "color1"}
        ];
        break;
      case 3:
        data = [
          { link : "#works", color : "color2"},
          { link : "#contactSlice", color : "color1"}
        ];
        break;
      case 4:
        data = [
          { link : "#home", color : "color4"}
        ];
        break;
    }
    return data;
  },
  /*
   <nav className="arrowsNav">
   <a href="#home" className="navUp color4"> <i className="icon-up-open"></i> </a>
   </nav>
   */
  
  getBreakerContent : function(section){
    var data = {};
    switch(section){
      case 0:
        data = {
          id : "paralaxSlice1", icon : "icon-megaphone", text : "Good design is good business."
        };
        break;
      case 1:
        data = {
          id : "paralaxSlice2", icon : "icon-camera", text : "Less is only more <br/> where more is no good"
        };
        break;
      case 2:
        data = {
          id : "paralaxSlice4", icon : "icon-mail", text : "Keep in touch with us"
        };
        break;
    }
    return data;
  },
  
  render : function(){
    return <div>
      <Preloader>
      </Preloader>
      <div id="globalWrapper" className="localscroll">
        <Header>
        </Header>
        <LargeSlider>
        </LargeSlider>
        <News>
        </News>
        <ArrowsNav data={this.getArrowNav(0)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(0)}>
        </MidBreaker>
        <Services>
        </Services>
        <ArrowsNav data={this.getArrowNav(1)}>
        </ArrowsNav>
        <Work>
        </Work>
        <Quote>
        </Quote>
        <ArrowsNav data={this.getArrowNav(2)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(1)}>
        </MidBreaker>
        <Team>
        </Team>
        <ArrowsNav data={this.getArrowNav(3)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(2)}>
        </MidBreaker>
        <ContactUs>
        </ContactUs>
        <ArrowsNav data={this.getArrowNav(4)}>
        </ArrowsNav>
        <Footer>
        </Footer>
      </div>
    </div>
  }
});
