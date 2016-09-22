import "./MidBreaker.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){
    
  },
  getProps : function(){
    return this.props.data;
  },
  render : function(){
    var data = this.getProps();
    return <div id={data.id} data-stellar-background-ratio="0.5">
      <div className="paralaxText container">
        <div className="row">
          <div className="iconWrapper iconBig color4 col-centered">
            <i className={data.icon}>
            </i>
          </div>
        </div>
        <div className="row">
          <blockquote className="bigTitle col-md-12" dangerouslySetInnerHTML={{__html: data.text}}>
          </blockquote>
        </div>
      </div>
    </div>;
  }
});

