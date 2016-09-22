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
                    314.660.2603 </div>
                </div>
                <div className="col-md-12">
                  <ul className="socialNetwork">
                    <li><a href="#" className="iconWrapper color4 tips icoRss" title="Rss"><i className="icon-rss"></i></a></li>
                    <li><a href="#" className="iconWrapper color4 tips icoFacebook" title="Facebook"><i className="icon-facebook"></i></a></li>
                    <li><a href="#" className="iconWrapper color4 tips icoTwitter" title="Twitter"><i className="icon-twitter"></i></a></li>
                    <li><a href="#" className="iconWrapper color4 tips icoGoogle" title="Google +"><i className="icon-gplus"></i></a></li>
                    <li><a href="#" className="iconWrapper color4 tips icoVimeo" title="Vimeo"><i className="icon-vimeo"></i></a></li>
                    <li className="last"><a href="#" className="iconWrapper color4 tips icoLinkedin" title="Linkedin"><i className="icon-linkedin"></i></a></li>
                  </ul>
                </div>
                <div className="col-md-12"> </div>
              </div>
            </div>
          </section>
        </footer>
        <section  id="footerRights">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Copyright © 2016 YT Advisors</p>
              </div>
            </div>
          </div>
        </section>
      </div>;
  }
});