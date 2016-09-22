import "./Quote.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){
    
  },
  render : function(){
    return <section className="color1 slice" id="quoteWrapper">
      <div className="container">
        <div className="ctaBox clearfix">
          <div className="row-fluid">
            <div className="col-md-9">
              <blockquote>Like what you see? <small>Request a proposal now!</small></blockquote>
            </div>
            <div className="col-md-3"> <a className="btn btn-large" title="" href="#" id="quoteTrigger"> Get a quote!</a> </div>
          </div>
          <div className="row">
            <div className="col-md-12" id="quoteFormWrapper">
              <form id="projectQuote" method="post" action="js-plugin/neko-contact-ajax-plugin/php/form-handler-quotation.php">
                <div className="row-fluid">

                  <div className="col-md-4">
                    <h3>Ask us about your projects</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel pulvinar ligula. Sed rutrum condimentum sapien vel facilisis. Proin pulvinar ultrices odio.
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
                      <option value="web project">web project</option>
                      <option value="design project">design project</option>
                      <option value="hosting project">hosting project</option>
                    </select>

                    <textarea name="comment" id="quoteComment" placeholder="message">
                    </textarea>

                  </div>
                </div>
                <div className="row-fluid">
                  <div className="col-md-8 col-md-offset-4">
                    <div className="quoteResult pull-left"></div>
                    <button className="btn btn-large pull-right" type="submit">Send</button>
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