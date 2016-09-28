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
      wrapAround : true,
      imagesLoaded: true,
      setGallerySize: true,
      lazyLoad: 1,
      cellAlign: 'center'
    });

    // load all lazy load images
    if ( !flky.isActive ) {
      $("#home").find('[data-flickity-lazyload]').each( function( i, elem  ) {
        var $elem = $(elem);
        $elem.attr( 'src', $elem.attr('data-flickity-lazyload') );
        $elem.addClass('flickity-lazyloaded');
        elem.removeAttribute('data-flickity-lazyload');
      });
    }
  },
  render : function(){
    return <div id="home">
      <div className="carousel" >
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img src = "./assets/images/slider/super/placeholder.jpg"
              data-flickity-lazyload="./assets/images/slider/super/supersized-1.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img src = "./assets/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="./assets/images/slider/super/supersized-2.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img src = "./assets/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="./assets/images/slider/super/supersized-3.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
      <div className="carousel">
        <div className="carousel-cell">
          <section className = "imgWrapper">
            <img src = "./assets/images/slider/super/placeholder.jpg"
                 data-flickity-lazyload="./assets/images/slider/super/supersized-4.jpg" className="img-responsive" />
          </section>
        </div>
      </div>
    </div>;
  }
});