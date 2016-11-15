import "./Team.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){

  },
  render : function(){
    return <section className="slice color3" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Meet our team</h1>
          </div>
          <div className="col-md-6">
            <article className="boxWrapper color1">
              <div><img className="img-responsive" src="http://cdn.ytadvisors.com/images/team/yomi.gif" alt="" /></div>
              <div className="boxContent2">
                <h3>Yomi Toba </h3>
                <p>Co-Founder / CEO</p>
              </div>
              <div className="boxContent"> <a href="mailto:yomi@ytadvisors.com">yomi@ytadvisors.com</a>
                <ul className="socialNetwork">
                  <li><a href="https://www.facebook.com/yomi.toba.39" className="tips" title="" data-original-title="follow me on Facebook"><i className="icon-facebook"></i></a></li>
                  <li><a href="https://www.twitter.com/ytwguru" className="tips" title="" data-original-title="follow me on Twitter"><i className="icon-twitter-bird"></i></a></li>
                  <li><a href="https://plus.google.com/109638795509632465576" className="tips" title="" data-original-title="follow me on Google+"><i className="icon-gplus"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/yomi-toba-569884a" className="tips" title="" data-original-title="follow me on Linkedin"><i className="icon-linkedin"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Pinterest"><i className="icon-pinterest-circled"></i></a></li>
                </ul>
              </div>
            </article>
          </div>
          <div className="col-md-6">
            <article className="boxWrapper color1">
              <div><img className="img-responsive" src="http://cdn.ytadvisors.com/images/team/tanya.png" alt="" /></div>
              <div className="boxContent2">
                <h3>Tanya Toba</h3>
                <p>Co-Founder / COO</p>
              </div>
              <div className="boxContent"> <a href="mailto:tanya@ytadvisors.com">tanya@ytadvisors.com</a>
                <ul className="socialNetwork">
                  <li><a href="https://www.facebook.com/tanya.hamilton.9" className="tips" title="" data-original-title="follow me on Facebook"><i className="icon-facebook"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Twitter"><i className="icon-twitter-bird"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Google+"><i className="icon-gplus"></i></a></li>
                  <li><a href="https://www.linkedin.com/in/tanyajhamilton" className="tips" title="" data-original-title="follow me on Linkedin"><i className="icon-linkedin"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Pinterest"><i className="icon-pinterest-circled"></i></a></li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>;
  }
});