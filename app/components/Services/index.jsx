import "./Services.less";
import React from "react";

export default React.createClass({
  componentDidMount : function (){
    
  },
  render : function(){
    return <div>
        <section className="slice" id="services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Our services</h1>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-heart"></i></div>
                  <section className="boxContent">
                    <h2>Clean design</h2>
                    <p>Elegant layouts that help you organize your content in the best way.</p>
                  </section>
                </article>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-star-empty"></i></div>
                  <section className="boxContent">
                    <h2>HTML5 &amp; CSS3</h2>
                    <p>Built with modern technologies like HTML5 and CSS3, SEO optimised.</p>
                  </section>
                </article>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-cog"></i></div>
                  <section className="boxContent">
                    <h2>Easy Customization</h2>
                    <p>Clear code and documentation, build your website in no time!</p>
                  </section>
                </article>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-mobile-1"></i></div>
                  <section className="boxContent">
                    <h2>Responsive design</h2>
                    <p>Compatible with various desktop, tablet, and mobile devices.</p>
                  </section>
                </article>
              </div>
            </div>
          </div>
      </section>
      <section className="slice color1">
        <div className="container">
          <div className="row">
            <div className="col-md-4"> <img src="./assets/images/theme-pics/services.png" alt="services" />
            </div>
            <div className="col-md-4">
              <h2>Choose your color, build your website, now!</h2>
              <p>You want a guarantee, buy a toaster. Dyin' ain't much of a livin', boy. You see, in this world there's two kinds of people, my friend: Those with loaded guns and those who dig. You dig. Are you feeling lucky punk This is my gun, Clyde! What you have to ask yourself is, do I feel lucky. Well do ya' punk? Are you feeling lucky punk.</p><p> When a naked man's chasing a woman through an alley with a butcher knife and a hard-on, I figure he's not out collecting for the Red Cross. Well, do you have anything to say for yourself? Dyin' ain't much of a livin', boy. Are you feeling lucky punk </p>
              <a href="#" className="btn">read more</a> </div>
            <div className="col-md-4">
              <h2>Altea, a clean one page website template</h2>
              <p> We got no food we got no money and our pets heads are falling off! haaaaaaarry. It's because i'm green isn't it! it's because i'm green isn't it! Good morning, oh in case i don't see you, good afternoon, good evening and goodnight.</p><h3>hey, maybe i will give you a call sometime</h3><p> your number still 911? hey, maybe i will give you a call sometime. Your entrance was good, his was better. Look ma i'm road kill! </p>
              <a href="#" className="btn">read more</a> </div>
          </div>
        </div>
      </section>
    </div>
      ;
  }
});