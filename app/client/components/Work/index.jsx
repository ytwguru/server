import "./Work.less"
import React from "react";

export default React.createClass({
  render : function(){
    return <section className="slice color3" id="works">
      <div className="container clearfix">
        <div className="row">
          <div className="col-md-12">
            <h1>Our Work</h1>
          </div>
          <nav id="filter" className="col-md-12 text-center">
            <ul>
              <li><a href="" className="current btn btn-small" data-filter="*">All</a></li>
              <li><a href=""  className="btn btn-small" data-filter=".graphics" >Graphics</a></li>
              <li><a href=""  className="btn btn-small" data-filter=".women">Women</a></li>
              <li ><a href="" className="btn btn-small" data-filter=".cats">Cats</a></li>
            </ul>
          </nav>
          <div className="col-md-12">
            <div className="row">
              <div className="portfolio-items isotopeWrapper clearfix imgHover" id="3">
                <article className="boxLink boxNew col-md-4 isotopeItem women">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign6.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-image.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-picture">
                        </i>
                      </a>
                      <a href="./assets/images/portfolio/zoom6.jpg" className="prettyPhoto iconWrapper" title="Zoom" >
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Full width image</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                        <a href="portfolio-project-fullwidth-image.html" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem cats">
                  <section className="imgWrapper"> 
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign1.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-video.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-videocam">
                        </i>
                      </a>
                      <a href="http://www.youtube.com/watch?v=aqrtF7L86NQ" className="prettyPhoto iconWrapper" title="Video Popup" >
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Video YouTube</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                      <a href="portfolio-project-fullwidth-video.html" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                  <div className="newBadge">New!</div>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem graphics">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign7.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-video.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-videocam">
                        </i>
                      </a>
                      <a href="http://vimeo.com/30581015" className="prettyPhoto iconWrapper" title="Video Popup" >
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Video Vimeo</h3>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                        <a href="portfolio-project-fullwidth-video.html" className="moreLink">&rarr; read more</a> </p>
                  </section>
                  <div className="newBadge">New!</div>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem cats">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign3.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-carousel.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-camera">
                        </i>
                      </a>
                      <a href="#" className="prettyPhotoGallery iconWrapper animated flipOutX" title="Zoom" data-rel="./assets/images/slider/camera/camera-slide4.jpg,./assets/images/slider/camera/camera-slide5.jpg,./assets/images/slider/camera/camera-slide6.jpg">
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Gallery</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                      <a href="portfolio-project-fullwidth-carousel.html" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem cats">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign2.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-carousel.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-camera">
                        </i>
                      </a>
                      <a href="./assets/images/portfolio/zoom2.jpg" className="prettyPhoto iconWrapper" title="Gallery Popup">
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                      <a href="#" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem women">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign4.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-video.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-videocam">
                        </i>
                      </a>
                      <a href="./assets/images/portfolio/zoom4.jpg" className=" iconWrapper prettyPhoto" title="Zoom">
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                        <a href="#" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem graphics">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign8.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-carousel.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-camera">
                        </i>
                      </a>
                      <a href="./assets/images/portfolio/zoom8.jpg" className="prettyPhoto iconWrapper" title="Zoom" >
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                      <a href="#" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem women">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign5.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-image.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-picture">
                        </i>
                      </a>
                      <a href="./assets/images/portfolio/zoom5.jpg" className="prettyPhoto iconWrapper" title="Zoom" >
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                      <a href="#" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
                <article className="boxLink boxNew col-md-4 isotopeItem graphics">
                  <section className="imgWrapper">
                    <img className="img-responsive" alt="" src="./assets/images/portfolio/vign9.jpg" />
                  </section>
                  <div className="media-hover">
                    <div className="mask"></div>
                    <div className="iconLinks">
                      <a href="portfolio-project-fullwidth-carousel.html" title="link" target="_blank" className="sizer iconWrapper">
                        <i className="icon-camera">
                        </i>
                      </a>
                      <a href="#" className="prettyPhotoGallery iconWrapper" title="Zoom" data-rel="./assets/images/portfolio2/ill_7_1.jpg,./assets/images/portfolio2/ill_7_2.jpg,./assets/images/portfolio2/ill_7_3.jpg">
                        <i className="icon-search">
                        </i>
                      </a>
                    </div>
                  </div>
                  <section className="boxContent">
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vulputate nunc ut tellus sollicitudin placerat.
                      <br />
                      <a href="#" className="moreLink">&rarr; read more</a>
                    </p>
                  </section>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
  }
});