import "./Services.less";
import React from "react";

export default React.createClass({
  componentDidMount : function (){
    var $boxIcon = $('.boxIcon');
    /*if($boxIcon.length){

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
    }*/
  },
  render : function(){
    return <div id="services">
        <section className="slice no-bottom-padding color4">
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
                    <p>We create software integration solutions allowing companies to integrate with third party platforms.</p>
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
      <section className="slice">
        <div className="container">
          <div className="row">
            <div className="col-md-4"> <img className="img-responsive" src="http://cdn.ytadvisors.com/images/target.jpg" alt="services" />
            </div>
            <div className="col-md-4">
              <h2>Custom Application Development</h2>
              <p>
                We design and develop software tailored to your specific demands in a way
                that ultimately meets all your business goals, expectations, and requirements.
              </p>
              <p> Our applications are built using the latest in web and mobile technologies
                solving your toughest problems and fitting seamlessly into your current processes
                and systems, to produce measurable results for your business.
              </p>
              <p>
                Along with full-cycle custom software development,
                we provide software maintenance and platform-based customization.
              </p>
            </div>
            <div className="col-md-4">
              <h2>Website Design</h2>
              <p> We develop responsive sites that provide the best user experience across devices, combining great design, form and function so
                users can find the information they need quickly.  We leverage usability testing tools and techniques to understand how users interact
                with your product to maximize user engagement and satisfaction.
              </p>
              <h2>Working with Startups</h2>
              <p> We quickly deploy an MVP for your new business with hand-crafted solutions that merge smart design, leading-edge technology and your unique business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
      ;
  }
});