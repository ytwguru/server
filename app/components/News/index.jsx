import "./News.less"
import React from "react";

export default React.createClass({
  componentDidMount : function(){
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
            </div>
            <div className="media-list newsList">
              <div className="media">
                <section className="newsDate">
                  <h4>26</h4>
                  <span>Sep.</span> </section>
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
            </div>
            <div className="media-list newsList">
              <div className="media">
                <section className="newsDate">
                  <h4>15</h4>
                  <span>Aug.</span> </section>
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
            </div>
            <div className="media-list newsList">
              <div className="media">
                <section className="newsDate">
                  <h4>05</h4>
                  <span>Aug.</span> </section>
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