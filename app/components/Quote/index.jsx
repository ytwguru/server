import "./Quote.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){
    if (jQuery("#projectQuote").length) {
      /*$("#projectQuote").validate({
        // debug: true,
        errorPlacement: function (error, element) {
          error.insertBefore(element);
        },
        submitHandler: function (form) {
          jQuery(form).ajaxSubmit({
            target: ".quoteResult"
          });
        },
        onkeyup: false,
        rules: {
          name: {
            required: true,
            minlength: 3
          },
          email: {
            required: true,
            email: true
          },
          company: {
            required: true,
            minlength: 2
          },
          quoteType: {
            required: true
          },
          comment: {
            required: true,
            minlength: 10,
            maxlength: 350
          }

        }
      });*/
    }
    var $form = $('#quoteFormWrapper');
    $('#quoteTrigger').click(function (e) {
      var $this = $(this);

      if(!$form.is(':visible')){
        $('html, body').animate({scrollTop: $("#quoteWrapper").offset().top}, 300);
      }

      $form.slideToggle('fast', function() {
        $this.text($form.is(':visible') ? "Close form" : "I have a project");
      });


      e.preventDefault();
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
              <form className="clearfix"  id="projectQuote" method="get"action="#">
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
                    <input type="text" id="inputName" className="col-md-5" placeholder="Name" name="name" />
                    <input type="text" id="inputEmail" className="col-md-5" placeholder="Email" name="email" />
                    <input type="text" id="inputCompany" className="col-md-5" placeholder="Company" name="company" />
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

                    <textarea name="comment" id="quoteComment" placeholder="message">
                    </textarea>

                  </div>
                </div>
                <div className="row-fluid">
                  <div className="col-md-8 col-md-offset-4">
                    <div className="quoteResult pull-left"></div>
                    <button className="btn pull-right" type="submit">Send</button>
                  </div>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>;
  }
});