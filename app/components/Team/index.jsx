import "./Team.less";
import React from "react";

export default React.createClass({
  componentDidMount : function(){

  },
  render : function(){
    return <section className="slice color1" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Meet our team</h1>
          </div>
          <div className="col-md-3">
            <article className="boxWrapper color1">
              <div><img src="./assets/images/team/pic1.jpg" alt="" /></div>
              <div className="boxContent2">
                <h3>Janet DOE </h3>
                <p>Executive Director</p>
              </div>
              <div className="boxContent"> <a href="mailto:your.email@little-neko.com">j.doe@altea.com</a>
                <ul className="socialNetwork">
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Facebook"><i className="icon-facebook"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Twitter"><i className="icon-twitter-bird"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Google+"><i className="icon-gplus"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Linkedin"><i className="icon-linkedin"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Pinterest"><i className="icon-pinterest-circled"></i></a></li>
                </ul>
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="boxWrapper color1">
              <div><img src="./assets/images/team/pic2.jpg" alt="" /></div>
              <div className="boxContent2">
                <h3>Johanna Newsom</h3>
                <p>Salesman</p>
              </div>
              <div className="boxContent"> <a href="mailto:your.email@little-neko.com">j.newsom@altea.com</a>
                <ul className="socialNetwork">
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Facebook"><i className="icon-facebook"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Twitter"><i className="icon-twitter-bird"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Google+"><i className="icon-gplus"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Linkedin"><i className="icon-linkedin"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Pinterest"><i className="icon-pinterest-circled"></i></a></li>
                </ul>
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="boxWrapper color1">
              <div><img src="./assets/images/team/pic3.jpg" alt="" /></div>
              <div className="boxContent2">
                <h3>Alexander Doe</h3>
                <p>Graphic designer</p>
              </div>
              <div className="boxContent"> <a href="mailto:your.email@little-neko.com">a.doe@altea.com</a>
                <ul className="socialNetwork">
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Facebook"><i className="icon-facebook"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Twitter"><i className="icon-twitter-bird"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Google+"><i className="icon-gplus"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Linkedin"><i className="icon-linkedin"></i></a></li>
                  <li><a href="#" className="tips" title="" data-original-title="follow me on Pinterest"><i className="icon-pinterest-circled"></i></a></li>
                </ul>
              </div>
            </article>
          </div>
          <div className="col-md-3">
            <article className="boxWrapper color1">
              <div><img src="./assets/images/team/pic4.jpg" alt="" /></div>
              <div className="boxContent2">
                <h3>Pamela Anderson</h3>
                <p>Programmer</p>
              </div>
              <div className="boxContent"> <a href="mailto:your.email@little-neko.com">p.anderson66@altea.com</a>
                <ul className="socialNetwork">
                  <li>
                    <a href="#" className="tips" title="" data-original-title="follow me on Facebook"><i className="icon-facebook"></i></a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="" data-original-title="follow me on Twitter"><i className="icon-twitter-bird"></i></a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="" data-original-title="follow me on Google+"><i className="icon-gplus"></i></a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="" data-original-title="follow me on Linkedin"><i className="icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="tips" title="" data-original-title="follow me on Pinterest"><i className="icon-pinterest-circled"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>;
  }
});