import "./LargeSlider.less";
import React from 'react';

var Flickity = {};
if (typeof(window) !== 'undefined') {
  Flickity  = require("flickity");
}

export default React.createClass({
  componentDidMount : function (){
    var flky = new Flickity( '#home', {
      autoPlay : true,
      adaptiveHeight : true,
      wrapAround : true,
      imagesLoaded: true,
      lazyLoad: 2,
      cellAlign: 'center'
    });

  },
  render : function(){
    return <div id="home">
      <div className="carousel" >
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-flickity-lazyload="./assets/images/slider/super/supersized-1.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-flickity-lazyload="./assets/images/slider/super/supersized-2.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-flickity-lazyload="./assets/images/slider/super/supersized-3.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img data-flickity-lazyload="./assets/images/slider/super/supersized-4.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
    </div>;
  }
});