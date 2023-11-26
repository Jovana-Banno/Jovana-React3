import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';
// import Script from 'next/script';

export default function Regions() {
  return (
    <Layout>
      <Head>
        <title>Regions</title>
      </Head>
      
      <>
      <div id="wrapper">
      <>
      <Header />
      </>
      <div className="content">
        <div className="container">
          <div className="row">
            {/* BEGIN MAIN CONTENT */}
            <div className="main col-sm-8">
              <h1>Regions</h1>
              {/* BEGIN BLOG LISTING */}
              <div className="grid-style1 clearfix">
                <div className="item col-md-12">
                  {/* Set width to 4 columns for grid view mode only */}
                  <div className="image image-large">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o" /> Read More
                      </span>
                    </a>
                    <img src="http://placehold.it/720x255" alt="" />
                  </div>
                  <div className="info-blog">
                    <h2>
                      <a href="#">The Northeast</a>
                    </h2>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                      mauris ac pellentesque fringilla, tortor libero condimen.
                      Aliquam fermem tum nulla felis, sed molestie libero porttitor
                      in.
                    </p>
                  </div>
                </div>
                <div className="item col-md-12">
                  {/* Set width to 4 columns for grid view mode only */}
                  <div className="image image-large">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o" /> Read More
                      </span>
                    </a>
                    <img src="http://placehold.it/720x255" alt="" />
                  </div>
                  <div className="info-blog">
                    <h2>
                      <a href="#">The Northwest</a>
                    </h2>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                      mauris ac pellentesque fringilla, tortor libero condimen.
                      Aliquam fermem tum nulla felis, sed molestie libero porttitor
                      in.
                    </p>
                  </div>
                </div>
                <div className="item col-md-12">
                  {/* Set width to 4 columns for grid view mode only */}
                  <div className="image image-large">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o" /> Read More
                      </span>
                    </a>
                    <img src="http://placehold.it/720x255" alt="" />
                  </div>
                  <div className="info-blog">
                    <h2>
                      <a href="#">The Southeast</a>
                    </h2>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                      mauris ac pellentesque fringilla, tortor libero condimen.
                      Aliquam fermem tum nulla felis, sed molestie libero porttitor
                      in.
                    </p>
                  </div>
                </div>
                <div className="item col-md-12">
                  {/* Set width to 4 columns for grid view mode only */}
                  <div className="image image-large">
                    <a href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o" /> Read More
                      </span>
                    </a>
                    <img src="http://placehold.it/720x255" alt="" />
                  </div>
                  <div className="info-blog">
                    <h2>
                      <a href="#">The Southwest</a>
                    </h2>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent placerat,
                      mauris ac pellentesque fringilla, tortor libero condimen.
                      Aliquam fermem tum nulla felis, sed molestie libero porttitor
                      in.
                    </p>
                  </div>
                </div>
              </div>
              {/* END BLOG LISTING */}
              {/* BEGIN PAGINATION */}
              <div className="pagination">
                <ul id="previous">
                  <li>
                    <a href="#">
                      <i className="fa fa-chevron-left" />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                </ul>
                <ul id="next">
                  <li>
                    <a href="#">
                      <i className="fa fa-chevron-right" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* END PAGINATION */}
            </div>
            {/* END MAIN CONTENT */}
            {/* BEGIN SIDEBAR */}
            <div className="sidebar gray col-sm-4">
              {/* BEGIN LATEST NEWS */}
              <h2 className="section-title">Popular articles</h2>
              <ul className="latest-news">
                <li className="col-md-12">
                  <div className="image">
                    <a href="blog-detail.html" />
                    <img src="http://placehold.it/100x100" alt="" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" /> 30 July 2014
                    </li>
                  </ul>
                  <h3>
                    <a href="#">It's all about the Northeast</a>
                  </h3>
                </li>
                <li className="col-md-12">
                  <div className="image">
                    <a href="blog-detail.html" />
                    <img src="http://placehold.it/100x100" alt="" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" /> 20 July 2014
                    </li>
                  </ul>
                  <h3>
                    <a href="#">Southwest: Best ever</a>
                  </h3>
                </li>
                <li className="col-md-12">
                  <div className="image">
                    <a href="blog-detail.html" />
                    <img src="http://placehold.it/100x100" alt="" />
                  </div>
                  <ul className="top-info">
                    <li>
                      <i className="fa fa-calendar" /> 10 July 2014
                    </li>
                  </ul>
                  <h3>
                    <a href="#">
                      I went to the Northwest and stole from and old lady
                    </a>
                  </h3>
                </li>
              </ul>
              {/* END LATEST NEWS */}
            </div>
            {/* END SIDEBAR */}
          </div>
        </div>
      </div>
      <>
    <Footer />
    </>
    </div>
    </>
    
    </Layout>
  );
}