import "./LargeSlider.less";
import React from 'react';

var Flickity = {};
if (typeof(window) !== 'undefined') {
  Flickity  = require("flickity");
}

export default React.createClass({
  componentDidMount : function (){
    var flky = new Flickity( '#home', {
      autoPlay : 5000,
      wrapAround : true,
      imagesLoaded: true,
      setGallerySize: true,
      lazyLoad: 3,
      contain: true,
      cellAlign: 'center'
    });

  },
  render : function(){
    return <div id="home">
      <div className="carousel" >
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "./assets/images/slider/super/placeholder.jpg"
              data-flickity-lazyload="./assets/images/slider/super/supersized-1.jpg" className="img-responsive" id = "main-image" alt="Women in business"/>
            <div className = "content">
              <h2>Professional software development</h2>
              <h3>We build custom web, mobile, and cross-platform solutions that keep you one step ahead of the competition.</h3>
            </div>
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "./assets/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="./assets/images/slider/super/supersized-2.jpg" className="img-responsive" />
            <div className = "content">
              <h2>Custom software solutions</h2>
              <h3>Whether you are a start-up or an established business, we create solutions to engage your customers.</h3>
            </div>
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "./assets/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="./assets/images/slider/super/supersized-3.jpg" className="img-responsive" alt="Cyber security"/>
            <div className = "content">
              <h2>Information Security‎</h2>
              <h3>Address data security challenges in software, systems, and organizational processes.</h3>
            </div>
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-src= "./assets/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="./assets/images/slider/super/supersized-4.jpg" className="img-responsive" />
            <div className = "content">
              <h2>Product management</h2>
              <h3>Our experienced consultants will tailor solutions that deliver results.</h3>
            </div>
          </section>
        </div>
      </div>
    </div>;
  }
});