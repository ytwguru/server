import React from "react";
import ReactDom from "react-dom";
import "./Home.less";

import "./../../assets/less/global.less";
import "./../../assets/less/icons.less";
import "./../../assets/less/colors.less";
import "../../assets/fonts/custom-icons/css/custom-icons.css";
import "../../assets/fonts/custom-icons/css/custom-icons-ie7.css";

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

export default React.createClass({
  componentDidMount : function(){
    var $this = this;
    $(window).on("resize", function(){
      $this._slider.resize();
    });

    if($('.localscroll').length){
      $('.localscroll').localScroll({
        lazy: true,
        lock: true,
        hash: false
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
          { link : "#news", color : "color4"},
          { link : "#team", color : "color1"}
        ];
        break;
      case 3:
        data = [
          { link : "#services", color : "color2"},
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
  
  getBreakerContent : function(section){
    var data = {};
    switch(section){
      case 0:
        data = {
          id : "paralaxSlice1", icon : "icon-megaphone", text : "Technology to grow your business.", color :"color4"
        };
        break;
      case 1:
        data = {
          id : "paralaxSlice2", icon : "icon-camera", text : "Software that connects with your customers"
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
        <LargeSlider ref={(slider) => { this._slider = slider; }}>
        </LargeSlider>
        <News>
        </News>
        <ArrowsNav data={this.getArrowNav(0)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(0)}>
        </MidBreaker>
        <Services>
        </Services>
        <ArrowsNav data={this.getArrowNav(2)}>
        </ArrowsNav>
        <MidBreaker data={this.getBreakerContent(1)}>
        </MidBreaker>
        <Quote>
        </Quote>
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
