import "./Quote.less";
import React from "react";
import Formsy from 'formsy-react';
import {TextInput, TextArea} from "./../Form";

export default React.createClass({
  getInitialState : function(){
    return { canSubmit : false };
  },
  enableButton : function () {
    this.setState({ canSubmit : true });
  },

  disableButton : function(){
    this.setState({ canSubmit : false });
  },

  submit : function(model){

  },
  componentDidMount : function(){
    var $form = $('#quoteFormWrapper');
    $('#quoteTrigger').click(function (e) {
      e.preventDefault();
      var $this = $(this);

      if(!$form.is(':visible')){
        $('html, body').animate({ scrollTop: $("#quoteWrapper").offset().top }, 300);
      }

      $form.slideToggle('fast', function() {
        $this.text($form.is(':visible') ? "Close form" : "I have a project");
      });
    });
  },
  render : function(){
    return <section className="color1 slice" id="quoteWrapper">
      <div className="container">
        <div className="ctaBox clearfix">
          <div className="row-fluid">
            <div className="col-md-9">
              <blockquote>Like what you see? <small>Request a proposal now!</small></blockquote>
            </div>
            <div className="col-md-3"> <a className="btn" title="" href="#" id="quoteTrigger"> Get a quote!</a> </div>
          </div>
          <div className="row">
            <div className="col-md-12" id="quoteFormWrapper">
              <Formsy.Form className="clearfix"  id="projectQuote"
                           onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <div className="row-fluid">

                  <div className="col-md-4">
                    <h3>Ask us about your projects</h3>
                    <p>
                      We begin every relationship with an in-depth discussion about the short and long-term desires for your project.
                      Our engineers will review any hidden requirements and your existing codebase, if you have one. 
                      When we know your goals and understand existing software, we are able to better ensure the success of the project.
                    </p>
                  </div>

                  <div className="col-md-4">
                    <TextInput id="inputName" placeholder="Name" name="name" required
                          validations="maxLength:150"
                    />
                    <TextInput id="inputEmail" placeholder="Email" name="email"
                           validations="isEmail" validationError="This is not a valid email" required
                    />
                    <TextInput id="inputCompany" placeholder="Company" name="company" required
                               validations="maxLength:150" />
                  </div>

                  <div className="col-md-4">

                    <select name="quoteType">
                      <option disabled defaultValue>Project Type</option>
                      <option value="web project">Web Application</option>
                      <option value="design project">Mobile Application</option>
                      <option value="design project">Desktop Application</option>
                      <option value="design project">Custom Development</option>
                      <option value="design project">Integration Project</option>
                      <option value="hosting project">Hosting Project</option>
                    </select>

                    <TextArea name="comment" id="quoteComment" placeholder="message" >
                    </TextArea>

                  </div>
                </div>
                <div className="row-fluid">
                  <div className="col-md-8 col-md-offset-4">
                    <div className="quoteResult pull-left"></div>
                    <button className="btn pull-right" type="submit" disabled={!this.state.canSubmit}>Send</button>
                  </div>
                </div>
              </Formsy.Form>

            </div>
          </div>
        </div>
      </div>
    </section>;
  }
});