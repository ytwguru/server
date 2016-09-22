import "./ArrowsNav.less"
import React from "react";

export default React.createClass({
  componentDidMount : function(){

  },
  getNav : function(){
    return this.props.data;
  },
  render : function (){
    var nav = this.getNav();
    return <nav className="arrowsNav">
      {((nav) => {
        if(nav.length > 1){
          return <a href={nav[1].link} className={"navDown " + nav[1].color}>
            <i className="icon-down-open">
            </i>
          </a>
        }
      })(nav)}
      <a href={nav[0].link} className={"navUp " + nav[0].color}>
        <i className="icon-up-open">
        </i>
      </a>
    </nav>;

  }
});