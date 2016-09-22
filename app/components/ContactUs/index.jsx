import "./ContactUs.less";
import React from "react";

export default React.createClass({
  render : function(){
    return <section className="slice color1"  id="contactSlice" >
      <div className="container">
        <div className="row mb40">
          <div className="col-md-12">
            <h1>Contact us</h1>
          </div>
          <div id="contactSlide">
            <div className="col-md-3"> <a href="" title="" id="mapTriggerLoader">
              <div className="iconWrapper iconBig"> <i className="icon-location"></i> </div>
              <span className="clearfix">Click to see the map</span></a>
              <p>Curabitur turpis orci, gravida non ornare id, venenatis nec enim. Praesent posuere condimentum leo eget volutpat. .</p>
            </div>
            <div className="col-md-6">

              <form method="post" action="js-plugin/neko-contact-ajax-plugin/php/form-handler.php" id="contactfrm">
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name" placeholder="Name"  title="Please enter your name (at least 2 characters)" />
                <label htmlFor="email"></label>
                <input type="email" name="email" id="email" placeholder="Email" title="Please enter a valid email address" />
                <label htmlFor="phone"></label>
                <input name="phone" type="tel" id="phone" size="30" value="" placeholder="Phone" className="required digits" title="Please enter a valid phone number (at least 10 characters)" />
                  <label htmlFor="comments"></label>
                  <textarea name="comment" id="comments" cols="3" rows="5" placeholder="Enter your message..." title="Please enter your message (at least 10 characters)">
                  </textarea>
                  <fieldset className="clearfix securityCheck">
                    <legend>Security</legend>
                    <div className="row">
                      <div className="col-md-6 pull-left humanCheck">
                        <input className="required "  id="verify" name="verify" type="text" />
                      </div>
                    </div>
                  </fieldset>
                  <br /> <div className="result"></div>
                  <button name="submit" type="submit" className="btn" id="submit"> Submit</button>
              </form>


            </div>
            <div className="col-md-3">
              <address>
                Address:<br/>
                Himalaya Company<br/>
                77 Mass. Ave., E14/E15<br/>
                Cambridge, MA 02139-4307 USA <br/>
                <br/>
                phone:<br/>
                314.660.2603<br/>
              </address>
            </div>
          </div>
          <div id="mapSlide">
            <div className="col-md-12">
              <div id="mapWrapper"></div>
              <a href="#" title="" id="mapReturn" className="btn btn-small"><i className="icon-left-dir"></i> Back</a> </div>
          </div>
        </div>
      </div>
    </section>;
  }
});