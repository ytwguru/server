import "./Header.less";
import React from "react";
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
  mixins: [PureRenderMixin],
  componentDidMount : function(){
    var $navMain = $("#navbarCollapse");
    $navMain.on("click", "a", null, function () {
      $navMain.collapse('hide');
    });
  },
  render : function (){
    return <nav role="navigation" className="navbar navbar-default navbar-fixed-top ">
      <div className="container">
        <div className="navbar-header">
          <button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a href="#" className="navbar-brand">
            <img className="img-responsive" src="http://cdn.ytadvisors.com/images/main-logo.png" alt="YT Advisors" width="130" />
          </a>
        </div>
        <div id="navbarCollapse" className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#home">Home</a> </li>
            <li><a href="#news">News</a> </li>
            <li><a href="#services">Services</a> </li>
            <li><a href="#team">Team</a> </li>
            <li><a href="/features">Features</a> </li>
            <li><a href="/blog">Blog</a> </li>
            <li><a href="#contactSlice">Contact</a> </li>
          </ul>
        </div>
      </div>
    </nav>;
  }
});