import "./TextArea.less";
import React from "react";
import Formsy from "formsy-react";

export default React.createClass({

  mixins : [Formsy.Mixin],

  changeValue : function(event){
    this.setValue(event.currentTarget.value);
  },

  render : function(){

    const className = this.showRequired() ? "required" : this.showError() ? "error" : null;
    const errorMessage = this.getErrorMessage();

    return (
      <div className={className}>
        <textarea onChange={this.changeValue} placeholder={this.props.placeholder} id={this.props.id} >
          {this.getValue()}
        </textarea>
        <span>{errorMessage}</span>
      </div>
    );

  }
});