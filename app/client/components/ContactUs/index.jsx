import "./ContactUs.less";
import React from "react";
import Formsy from 'formsy-react';
import {TextInput, TextArea} from "./../Form";
import {Alert} from "./../Modal";

export default React.createClass({
  getInitialState : function(){
    return { canSubmit : false };
  },

  componentDidMount(){
    this.handleOpenMap();
    this.handleCloseMap();
  },

  enableButton : function () {
    this.setState({ canSubmit : true });
  },

  disableButton : function(){
    this.setState({ canSubmit : false });
  },

  submit : function(model, reset){
    $.post("/api/contacts", model)
      .done( data => {
        console.log("Resetting");
        reset();
        $("#contactfrm").find("input[type=text], textarea").val("");
        $("#contactUsModal").modal("show");
      });
  },

  render: function () {
    var alertData = {
      header : "Message Sent",
      message : "<p>We just received your message </p><p>A member of our team will get in touch with you soon.</p>"
    };
    return <section className="slice color1" id="contactSlice">
      <div className="container">
        <div className="row mb40">
          <div className="col-md-12">
            <h1>Contact us</h1>
          </div>
          <div id="contactSlide">
            <div className="col-md-3">
              <div href="" title="" id="mapTriggerLoader">
                <div className="iconWrapper iconBig">
                  <i className="icon-location">
                  </i>
                </div>
              </div>
              <p>For more information please submit an inquiry in the contact us form or send an email to&nbsp;<a href = "mailto:sales@ytadvisors.com">sales@ytadvisors.com</a>.</p>
            </div>
            <div className="col-md-6">
              <Formsy.Form id="contactfrm" ref="contactfrm" className="form"
                           onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
                <TextInput name="name" id="name" placeholder="Name" required
                           validations="maxLength:150" />
                <TextInput id="email" placeholder="Email" name="email"
                           validations="isEmail" validationError="This is not a valid email" required
                />
                <TextInput name="phone" id="phone" placeholder="Phone" required
                           validations="maxLength:20" />

                <TextArea name="comment" id="comments" placeholder="Enter your message..." cols="3" rows="5" >
                </TextArea>
                <button name="submit" type="submit" className="btn" id="submit" disabled={!this.state.canSubmit}> Submit</button>
              </Formsy.Form>

            </div>
            <div className="col-md-3">
              <address>
                <strong>Address:</strong><br/>
                YT Advisors<br/>
                7733 Forsyth Blvd. Suite 1100<br/>
                Clayton, MO. 63105 USA <br/>
                <br/>
                <strong>Phone:</strong><br/>
                314.669.1750<br/><br/>
                <strong>Fax:</strong><br/>
                314.652.2092<br/>
              </address>
            </div>
          </div>
        </div>
      </div>
      <Alert id="contactUsModal" data={alertData} />
    </section>;
  }
});