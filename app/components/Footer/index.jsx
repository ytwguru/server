import "./Footer.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){

  },
  render : function (){
    return <div>
        <footer>
          <section id="mainFooter">
            <div className="container" id="footer">
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="blocPhone">
                    <div className="iconWrapper color3"><i className="icon-phone"></i></div>
                    314.669.1750 </div>
                </div>
                <div className="col-md-12">
                  <ul className="socialNetwork">
                    <li><a href="https://www.facebook.com/ytadvisors" className="iconWrapper color4 tips icoFacebook" title="Facebook"><i className="icon-facebook"></i></a></li>
                    <li><a href="https://twitter.com/ytadvisors" className="iconWrapper color4 tips icoTwitter" title="Twitter"><i className="icon-twitter"></i></a></li>
                    <li><a href="https://plus.google.com/104285030611184554232" className="iconWrapper color4 tips icoGoogle" title="Google +"><i className="icon-gplus"></i></a></li>
                    <li className="last"><a href="https://www.linkedin.com/company/15158921" className="iconWrapper color4 tips icoLinkedin" title="Linkedin"><i className="icon-linkedin"></i></a></li>
                  </ul>
                </div>
                <div className="col-md-12"> </div>
              </div>
            </div>
          </section>
        </footer>
      </div>;
  }
});