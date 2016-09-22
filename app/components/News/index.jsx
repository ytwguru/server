import "./News.less"
import React from "react";
import Modernizr from "./../../.modernizrrc";
import ReactDOM from "react-dom";

export default React.createClass({
  componentDidMount : function(){
    if($('.imgHover').length){
      $('.imgHover article').hover(
        function () {

          var $this=$(this);

          var fromTop = ($('.imgWrapper', $this).height()/2 - $('.iconLinks', $this).height()/2);
          $('.iconLinks', $this).css('margin-top',fromTop);

          $('.media-hover', $this).height($('.imgWrapper', $this).height());

          $('.mask', this).css('height', $('.imgWrapper', this).height());
          $('.mask', this).css('width', $('.imgWrapper', this).width());
          $('.mask', this).stop(true, false).fadeIn('fast', function() {}).end();

          if(Modernizr.csstransitions) {
            $('.iconLinks a').addClass('animated');
            $('.iconLinks', $this).css('display', 'block');

            $('.iconLinks a:first-child', $this).removeClass('flipOutX');
            $('.iconLinks a:first-child', $this).addClass('bounceInDown');

            $('.iconLinks a:gt(0)', $this).removeClass('flipOutX');
            $('.iconLinks a:gt(0)', $this).addClass('bounceInUp');
          }else{

            $('.iconLinks', $this).stop(true, false).fadeIn('fast');
          }

          $this.find('.boxInfo > h3').addClass('hoverState', 300);
          $('.newBadge', this).addClass('animated swing');

        },function () {
          var $this=$(this);
          $('.mask', $this).stop(true, false).fadeOut('fast', function() {
            if(Modernizr.csstransitions) {
              $('.iconLinks a:first-child', $this).removeClass('bounceInDown');
              $('.iconLinks a:first-child', $this).addClass('flipOutX');
              $('.iconLinks a:gt(0)', $this).removeClass('bounceInUp');
              $('.iconLinks a:gt(0)', $this).addClass('flipOutX');
            }else{
              $('.iconLinks', $this).stop(true, false).fadeOut('fast');
            }
            $this.find('.boxInfo>h3').removeClass('hoverState',300);
          }).end();
          $('.newBadge', this).removeClass('animated swing');
        });
    }
  },
  render : function(){
    return <section className="slice color4" id="news">
      <div className="container imgHover">
        <div className="row">
          <div className="col-md-12">
            <h1>Latest news</h1>
          </div>
          <article className="col-md-4">
            <section className="imgWrapper"> <img src="./assets/images/news/news1.jpg" alt="alteae template image news" /> </section>
            <div className="media-hover">
              <div className="mask"></div>
              <div className="iconLinks"> <a href="blog-post.html" title="link" target="_blank" className="iconWrapper"><i className="icon-link"></i></a> <a href="./assets/images/news/news1.jpg" className="prettyPhoto iconWrapper" title="Zoom" ><i className="icon-search"></i></a> </div>
            </div>
            <div className="media-list newsList">
              <div className="media">
                <section className="newsDate">
                  <h4>12</h4>
                  <span>Oct.</span> </section>
                <section className="media-body">
                  <h3>I feel good</h3>
                  <p>Nullam sed tortor odio. Suspendisse tincidunt dictum nisi, nec convallis odio. </p>
                  <a href="blog-post.html" className="btn btn-small btn-inverse"><i className="icon-right-open-mini"></i>read more</a> </section>
              </div>
            </div>
          </article>


          <article className="col-md-4">
            <section className="imgWrapper">
              <img src="./assets/images/news/news2.jpg" alt="snowflake template image news" />
            </section>
            <div className="media-hover">
              <div className="mask"></div>
              <div className="iconLinks">
                <a href="blog-post.html" title="link" target="_blank" className="iconWrapper">
                  <i className="icon-link"></i>
                </a>
                <a href="./assets/images/news/news2.jpg" className="prettyPhoto iconWrapper" title="Zoom" ><i className="icon-search"></i>
                </a>
              </div>
            </div>
            <div className="media-list newsList">
              <div className="media">
                <section className="newsDate">
                  <h4>25</h4>
                  <span>Nov.</span> </section>
                <section className="media-body">
                  <h3>I updated my facebook status</h3>
                  <p>Nullam sed tortor odio. Suspendisse tincidunt dictum nisi, nec convallis odio. </p>
                  <a href="blog-post.html" className="btn btn-small btn-inverse"><i className="icon-right-open-mini"></i>read more</a> </section>
              </div>
            </div>
          </article>
          <article className="col-md-4">
            <section className="imgWrapper"> <img src="./assets/images/news/news3.jpg" alt="snowflake template image news" /> </section>
            <div className="media-hover">
              <div className="mask"></div>
              <div className="iconLinks"> <a href="blog-post.html" title="link" target="_blank" className="iconWrapper"><i className="icon-link"></i></a> <a href="./assets/images/news/news3.jpg" className="prettyPhoto iconWrapper" title="Zoom" ><i className="icon-search"></i></a> </div>
            </div>
            <div className="media-list newsList">
              <div className="media">
                <section className="newsDate">
                  <h4>02</h4>
                  <span>Dec.</span> </section>
                <section className="media-body">
                  <h3>I just got the new iPhone</h3>
                  <p>Nullam sed tortor odio. Suspendisse tincidunt dictum nisi, nec convallis odio. </p>
                  <a href="blog-post.html" className="btn btn-small btn-inverse"><i className="icon-right-open-mini"></i>read more</a> </section>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  }
});