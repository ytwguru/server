import "./Services.less";
import React from "react";

export default React.createClass({
  componentDidMount : function (){
    var $boxIcon = $('.boxIcon');
    if($boxIcon.length){

      $boxIcon.hover(function() {
        var $this = $(this);
        $this.addClass('hover');
        $this.find('.iconWrapper i').addClass('triggeredHover');
        $this.find('.boxContent>p')
          .stop(true, false)
          .css({'display': 'block'})
          .animate({'margin-top': '0px'}, 300, function() {
            // stuff to do after animation is complete
          });

      }, function() {
        var $this = $(this);
        $this.removeClass('hover');
        $this.find('.iconWrapper i').removeClass('triggeredHover');
        $this.find('.boxContent>p')
          .stop(true, false)
          .css({'display' : 'none', 'margin-top' : '250px'});
      });
    }
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
                  <div className="iconWrapper iconBig"> <i className="icon-mobile-1"></i></div>
                  <section className="boxContent">
                    <h2>Product Development</h2>
                    <p>We design and develop web, mobile and desktop applications following a value-driven, iterative process.</p>
                  </section>
                </article>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-light-bulb"></i></div>
                  <section className="boxContent">
                    <h2>Technology Consulting</h2>
                    <p>We help teams understand trends, and security risks, and create road maps to reach development goals.</p>
                  </section>
                </article>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-star-empty"></i></div>
                  <section className="boxContent">
                    <h2>System Integration</h2>
                    <p>We create software integration allowing companies to integrate with third party platforms.</p>
                  </section>
                </article>
              </div>
              <div className="col-md-3">
                <article className="boxIcon">
                  <div className="iconWrapper iconBig"> <i className="icon-server"></i></div>
                  <section className="boxContent">
                    <h2>Hosting & Support</h2>
                    <p>We setup production environments, oversee server security, perform daily backups and monitor performance.</p>
                  </section>
                </article>
              </div>
            </div>
          </div>
      </section>
      <section className="slice color1">
        <div className="container">
          <div className="row">
            <div className="col-md-4"> <img className="img-responsive" src="./assets/images/theme-pics/services.png" alt="services" />
            </div>
            <div className="col-md-4">
              <h2>Custom Applications Development</h2>
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