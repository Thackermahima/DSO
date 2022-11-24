import React from 'react'


export default function QuestionDetail() {
    return(
        <>
        <>
  {/* <div id="preloader">
    <div className="loader">
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx={25}
          cy={25}
          r={20}
          fill="none"
          strokeWidth={5}
        />
      </svg>
    </div>
  </div> */}
  {/* end cssload-loader */}
  {/*======================================
  START HEADER AREA
    ======================================*/}
  <header className="header-area bg-white border-bottom border-bottom-gray">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-2">
          <div className="logo-box">
            <a href="index.html" className="logo">
              <img src="images/logo-black.png" alt="logo" />
            </a>
            <div className="user-action">
              <div
                className="search-menu-toggle icon-element icon-element-xs shadow-sm mr-1"
                data-toggle="tooltip"
                data-placement="top"
                title="Search"
              >
                <i className="la la-search" />
              </div>
              <div
                className="off-canvas-menu-toggle icon-element icon-element-xs shadow-sm"
                data-toggle="tooltip"
                data-placement="top"
                title="Main menu"
              >
                <i className="la la-bars" />
              </div>
            </div>
          </div>
        </div>
        {/* end col-lg-2 */}
        <div className="col-lg-10">
          <div className="menu-wrapper border-left border-left-gray pl-4 justify-content-end">
            <nav className="menu-bar mr-auto">
              <ul>
                <li>
                  <a href="#">
                    Home <i className="la la-angle-down fs-11" />
                  </a>
                  <ul className="dropdown-menu-item">
                    <li>
                      <a href="index.html">Home - landing</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home - main</a>
                    </li>
                    <li>
                      <a href="home-3.html">
                        Home - layout 2{" "}
                        <span className="badge bg-warning text-white">New</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="is-mega-menu">
                  <a href="#">
                    pages <i className="la la-angle-down fs-11" />
                  </a>
                  <div className="dropdown-menu-item mega-menu">
                    <ul className="row">
                      <li className="col-lg-3">
                        <a href="user-profile.html">user profile</a>
                        <a href="notifications.html">Notifications</a>
                        <a href="referrals.html">Referrals</a>
                        <a href="setting.html">settings</a>
                        <a href="ask-question.html">ask question</a>
                        <a href="question-details.html">question details</a>
                        <a href="about.html">about</a>
                        <a href="revisions.html">revisions</a>
                        <a href="category.html">category</a>
                        <a href="companies.html">companies</a>
                      </li>
                      <li className="col-lg-3">
                        <a href="company-details.html">company details</a>
                        <a href="careers.html">careers</a>
                        <a href="career-details.html">career details</a>
                        <a href="contact.html">contact</a>
                        <a href="faq.html">FAQs</a>
                        <a href="pricing-table.html">pricing tables</a>
                        <a href="error.html">page 404</a>
                        <a href="terms-and-conditions.html">
                          Terms &amp; conditions
                        </a>
                        <a href="privacy-policy.html">privacy policy</a>
                        <a href="cart.html">cart</a>
                      </li>
                      <li className="col-lg-3">
                        <a href="talent.html">talent</a>
                        <a href="advertising.html">advertising</a>
                        <a href="free-demo.html">free demo</a>
                        <a href="checkout.html">checkout</a>
                        <a href="wishlist.html">wishlist</a>
                        <a href="login.html">login</a>
                        <a href="login-2.html">login 2</a>
                        <a href="signup.html">sign up</a>
                        <a href="signup-2.html">sign up 2</a>
                        <a href="recover-password.html">recover password</a>
                      </li>
                      <li className="col-lg-3">
                        <a href="questions-layout-2.html">
                          questions layout 2{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="questions-full-width.html">
                          questions full-width{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="questions-left-sidebar.html">
                          questions left sidebar{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="questions-right-sidebar.html">
                          questions right sidebar{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="user-list.html">
                          user list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="category-list.html">
                          category list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="tags-list.html">
                          tags list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="add-post.html">
                          add post{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="badges-list.html">
                          Badges list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                        <a href="job-list.html">
                          job list{" "}
                          <span className="badge bg-warning text-white">
                            New
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">
                    blog <i className="la la-angle-down fs-11" />
                  </a>
                  <ul className="dropdown-menu-item">
                    <li>
                      <a href="blog-grid-no-sidebar.html">grid no sidebar</a>
                    </li>
                    <li>
                      <a href="blog-left-sidebar.html">blog left sidebar</a>
                    </li>
                    <li>
                      <a href="blog-right-sidebar.html">blog right sidebar</a>
                    </li>
                    <li>
                      <a href="blog-single.html">blog detail</a>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* end ul */}
            </nav>
            {/* end main-menu */}
            <form method="post" className="mr-4">
              <div className="form-group mb-0">
                <input
                  className="form-control form--control form--control-bg-gray"
                  type="text"
                  name="search"
                  placeholder="Type your search words..."
                />
                <button className="form-btn" type="button">
                  <i className="la la-search" />
                </button>
              </div>
            </form>
            <div className="nav-right-button">
              <a
                href="login.html"
                className="btn theme-btn theme-btn-outline mr-2"
              >
                <i className="la la-sign-in mr-1" /> Login
              </a>
              <a href="signup.html" className="btn theme-btn">
                <i className="la la-user mr-1" /> Sign up
              </a>
            </div>
            {/* end nav-right-button */}
          </div>
          {/* end menu-wrapper */}
        </div>
        {/* end col-lg-10 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
    <div className="off-canvas-menu custom-scrollbar-styled">
      <div
        className="off-canvas-menu-close icon-element icon-element-sm shadow-sm"
        data-toggle="tooltip"
        data-placement="left"
        title="Close menu"
      >
        <i className="la la-times" />
      </div>
      {/* end off-canvas-menu-close */}
      <ul className="generic-list-item off-canvas-menu-list pt-90px">
        <li>
          <a href="#">Home</a>
          <ul className="sub-menu">
            <li>
              <a href="index.html">Home - landing</a>
            </li>
            <li>
              <a href="home-2.html">Home - main</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul className="sub-menu">
            <li>
              <a href="user-profile.html">user profile</a>
            </li>
            <li>
              <a href="notifications.html">Notifications</a>
            </li>
            <li>
              <a href="referrals.html">Referrals</a>
            </li>
            <li>
              <a href="setting.html">settings</a>
            </li>
            <li>
              <a href="ask-question.html">ask question</a>
            </li>
            <li>
              <a href="question-details.html">question details</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="revisions.html">revisions</a>
            </li>
            <li>
              <a href="category.html">category</a>
            </li>
            <li>
              <a href="companies.html">companies</a>
            </li>
            <li>
              <a href="company-details.html">company details</a>
            </li>
            <li>
              <a href="careers.html">careers</a>
            </li>
            <li>
              <a href="career-details.html">career details</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
            <li>
              <a href="faq.html">FAQs</a>
            </li>
            <li>
              <a href="pricing-table.html">pricing tables</a>
            </li>
            <li>
              <a href="error.html">page 404</a>
            </li>
            <li>
              <a href="terms-and-conditions.html">Terms &amp; conditions</a>
            </li>
            <li>
              <a href="privacy-policy.html">privacy policy</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">blog</a>
          <ul className="sub-menu">
            <li>
              <a href="blog-grid-no-sidebar.html">grid no sidebar</a>
            </li>
            <li>
              <a href="blog-left-sidebar.html">blog left sidebar</a>
            </li>
            <li>
              <a href="blog-right-sidebar.html">blog right sidebar</a>
            </li>
            <li>
              <a href="blog-single.html">blog detail</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="off-canvas-btn-box px-4 pt-5 text-center">
        <a
          href="#"
          className="btn theme-btn theme-btn-sm theme-btn-outline"
          data-toggle="modal"
          data-target="#loginModal"
        >
          <i className="la la-sign-in mr-1" /> Login
        </a>
        <span className="fs-15 fw-medium d-inline-block mx-2">Or</span>
        <a
          href="#"
          className="btn theme-btn theme-btn-sm"
          data-toggle="modal"
          data-target="#signUpModal"
        >
          <i className="la la-plus mr-1" /> Sign up
        </a>
      </div>
    </div>
    {/* end off-canvas-menu */}
    <div className="mobile-search-form">
      <div className="d-flex align-items-center">
        <form method="post" className="flex-grow-1 mr-3">
          <div className="form-group mb-0">
            <input
              className="form-control form--control pl-40px"
              type="text"
              name="search"
              placeholder="Type your search words..."
            />
            <span className="la la-search input-icon" />
          </div>
        </form>
        <div className="search-bar-close icon-element icon-element-sm shadow-sm">
          <i className="la la-times" />
        </div>
        {/* end off-canvas-menu-close */}
      </div>
    </div>
    {/* end mobile-search-form */}
    <div className="body-overlay" />
  </header>
  {/* end header-area */}
  {/*======================================
  END HEADER AREA
======================================*/}
  {/*======================================
  START HERO AREA
======================================*/}
  <section className="hero-area bg-white shadow-sm overflow-hidden pt-40px pb-40px">
    <span className="stroke-shape stroke-shape-1" />
    <span className="stroke-shape stroke-shape-2" />
    <span className="stroke-shape stroke-shape-3" />
    <span className="stroke-shape stroke-shape-4" />
    <span className="stroke-shape stroke-shape-5" />
    <span className="stroke-shape stroke-shape-6" />
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-9">
          <div className="hero-content">
            <h2 className="section-title pb-2 fs-24 lh-34">
              Find the best answer to your technical question, <br />
              help others answer theirs
            </h2>
            <p className="lh-26">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
              <br /> isn't anything embarrassing hidden in the middle of text.
            </p>
            <ul className="generic-list-item pt-3">
              <li>
                <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 24 24"
                    width="20px"
                    fill="#6c727c"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
                  </svg>
                </span>{" "}
                Anybody can ask a question
              </li>
              <li>
                <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 24 24"
                    width="20px"
                    fill="#6c727c"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </span>{" "}
                Anybody can answer
              </li>
              <li>
                <span className="icon-element icon-element-xs shadow-sm d-inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 0 320 512"
                    width="20px"
                  >
                    <path
                      fill="#6c727c"
                      d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"
                    />
                  </svg>
                </span>{" "}
                The best answers are voted up and rise to the top
              </li>
            </ul>
          </div>
          {/* end hero-content */}
        </div>
        {/* end col-lg-9 */}
        <div className="col-lg-3">
          <div className="hero-btn-box text-right py-3">
            <a href="ask-question.html" className="btn theme-btn">
              Ask a Question
            </a>
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/*======================================
  END HERO AREA
======================================*/}
  {/* ================================
   START QUESTION AREA
================================= */}
  <section className="question-area pt-40px pb-40px">
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div className="question-main-bar mb-50px">
            <div className="question-highlight">
              <div className="media media-card shadow-none rounded-0 mb-0 bg-transparent p-0">
                <div className="media-body">
                  <h5 className="fs-20">
                    <a href="question-details.html">
                      Unable to get data attribute from button element via
                      Jquery
                    </a>
                  </h5>
                  <div className="meta d-flex flex-wrap align-items-center fs-13 lh-20 py-1">
                    <div className="pr-3">
                      <span>Asked</span>
                      <span className="text-black">1 hour ago</span>
                    </div>
                    <div className="pr-3">
                      <span className="pr-1">Active</span>
                      <a href="#" className="text-black">
                        19 days ago
                      </a>
                    </div>
                    <div className="pr-3">
                      <span className="pr-1">Viewed</span>
                      <span className="text-black">89 times</span>
                    </div>
                  </div>
                  <div className="tags">
                    <a href="#" className="tag-link">
                      javascript
                    </a>
                    <a href="#" className="tag-link">
                      jquery
                    </a>
                    <a href="#" className="tag-link">
                      attribute
                    </a>
                  </div>
                </div>
              </div>
              {/* end media */}
            </div>
            {/* end question-highlight */}
            <div className="question d-flex">
              <div className="votes votes-styled w-auto">
                <div id="vote" className="upvotejs">
                  <a
                    className="upvote upvote-on"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="This question is useful"
                  />
                  <span className="count">1</span>
                  <a
                    className="downvote"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="This question is not useful"
                  />
                  <a
                    className="star"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="Bookmark this question."
                  />
                </div>
              </div>
              {/* end votes */}
              <div className="question-post-body-wrap flex-grow-1">
                <div className="question-post-body">
                  <p>
                    I'm not able to get the data attribute from a button
                    element.
                  </p>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      &lt;button{"\n"} <span className="code-attr">class</span>=
                      <span className="code-string">
                        "btn btn-solid navigate"
                      </span>
                      {"\n"} <span className="code-attr">value</span>=
                      <span className="code-string">"2"</span>
                      {"\n"} <span className="code-attr">data-productId</span>=
                      {"{"}
                      {"{"}$product-&gt;id{"}"}
                      {"}"}
                      {"\n"} <span className="code-attr">id</span>=
                      <span className="code-string">"size-click"</span>
                      {"\n"} &gt;{"\n"} Next{"\n"}&lt;/button&gt;{"\n"}
                    </code>
                  </pre>
                  <p>Then I attempt to get it like so:</p>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      $(<span className="code-string">"#size-click"</span>
                      ).click(<span className="code-function">() =&gt;</span>{" "}
                      {"{"}
                      {"\n"} <span className="code-keyword">let</span> width =
                      $(<span className="code-string">"#prod-width"</span>
                      ).val();{"\n"} <span className="code-keyword">let</span>{" "}
                      height = $(
                      <span className="code-string">"#prod-height"</span>
                      ).val();{"\n"} <span className="code-keyword">var</span>{" "}
                      prodId = $(<span className="code-built-in">this</span>
                      ).data(<span className="code-string">"productId"</span>);
                      {"\n"}
                      {"\n"} <span className="code-built-in">console</span>.log(
                      <span className="code-string">'this is prodId'</span>);
                      {"\n"} <span className="code-built-in">console</span>
                      .log(prodId);{"\n"}
                      {"\n"} <span className="code-keyword">const</span> data ={" "}
                      {"{"}
                      {"\n"}
                      {"      "}
                      <span className="code-attr">prodId</span>: prodId,{"\n"}
                      {"      "}
                      <span className="code-attr">step</span>:{" "}
                      <span className="code-string">'Size'</span>,{"\n"}
                      {"      "}
                      <span className="code-attr">width</span>: width,{"\n"}
                      {"      "}
                      <span className="code-attr">height</span>: height,{"\n"}
                      {"    "}
                      {"}"}
                      {"\n"}
                      {"\n"}
                      {"    "}postDataEstimate(data);{"\n"}
                      {"\n"}
                      {"  "}
                      {"}"}){"\n"}
                    </code>
                  </pre>
                  <p>I'm also trying this:</p>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      <span className="code-keyword">var</span> prodId = $(
                      <span className="code-built-in">this</span>).attr(
                      <span className="code-string">'data-productId'</span>);
                      {"\n"}
                    </code>
                  </pre>
                  <p>Can you let me know what I'm missing?</p>
                </div>
                {/* end question-post-body */}
                <div className="question-post-user-action">
                  <div className="post-menu">
                    <div className="btn-group">
                      <button
                        className="btn dropdown-toggle after-none"
                        type="button"
                        id="shareDropdownMenu"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Share
                      </button>
                      <div
                        className="dropdown-menu dropdown--menu dropdown--menu-2 mt-2"
                        aria-labelledby="shareDropdownMenu"
                      >
                        <div className="py-3 px-4">
                          <h4 className="fs-15 pb-2">
                            Share a link to this question
                          </h4>
                          <form action="#" className="copy-to-clipboard">
                            <span className="text-success-message">
                              Link Copied!
                            </span>
                            <input
                              type="text"
                              className="form-control form--control form-control-sm copy-input"
                              defaultValue="https://Disilab.com/q/66552850/15319675"
                            />
                            <div className="btn-box pt-2 d-flex align-items-center justify-content-between">
                              <a href="#" className="btn-text copy-btn">
                                Copy link
                              </a>
                              <ul className="social-icons social-icons-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="bg-8 text-white shadow-none"
                                    title="Share link to this question on Facebook"
                                  >
                                    <i className="la la-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="bg-9 text-white shadow-none"
                                    title="Share link to this question on Twitter"
                                  >
                                    <i className="la la-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="bg-dark text-white shadow-none"
                                    title="Share link to this question on DEV"
                                  >
                                    <i className="lab la-dev" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* btn-group */}
                    <a href="#" className="btn">
                      Edit
                    </a>
                    <button className="btn">Follow</button>
                  </div>
                  {/* end post-menu */}
                  <div className="media media-card user-media owner align-items-center">
                    <a href="user-profile.html" className="media-img d-block">
                      <img src="images/img3.jpg" alt="avatar" />
                    </a>
                    <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                      <div>
                        <h5 className="pb-1">
                          <a href="user-profile.html">Arden Smith</a>
                        </h5>
                        <div className="stats fs-12 d-flex align-items-center lh-18">
                          <span className="text-black pr-2">224,110</span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball gold" />
                            16
                          </span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball silver" />
                            93
                          </span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball" />
                            136
                          </span>
                        </div>
                      </div>
                      <small className="meta d-block text-right">
                        <span className="text-black d-block lh-18">asked</span>
                        <span className="d-block lh-18 fs-12">6 hours ago</span>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card user-media align-items-center">
                    <a href="user-profile.html" className="media-img d-block">
                      <img src="images/img4.jpg" alt="avatar" />
                    </a>
                    <div className="media-body d-flex flex-wrap align-items-center justify-content-between">
                      <div>
                        <h5 className="pb-1">
                          <a href="user-profile.html">Kevin Martin</a>
                        </h5>
                        <div className="stats fs-12 d-flex align-items-center lh-18">
                          <span className="text-black pr-2">6,514</span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball gold" />3
                          </span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball silver" />
                            35
                          </span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball" />
                            48
                          </span>
                        </div>
                      </div>
                      <a
                        href="revisions.html"
                        className="meta d-block text-right fs-13 text-color"
                      >
                        <span className="d-block lh-18">edited</span>
                        <span className="d-block lh-18 fs-12">6 hours ago</span>
                      </a>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                {/* end question-post-user-action */}
                <div className="comments-wrap">
                  <ul className="comments-list">
                    <li>
                      <div className="comment-actions">
                        <span className="comment-score">1</span>
                      </div>
                      <div className="comment-body">
                        <span className="comment-copy">
                          Where are you trying to get{" "}
                          <code className="code">prodId</code>?
                        </span>
                        <span className="comment-separated">-</span>
                        <a
                          href="user-profile.html"
                          className="comment-user"
                          title="15,467 reputation"
                        >
                          Majed Badawi
                        </a>
                        <span className="comment-separated">-</span>
                        <a href="#" className="comment-date">
                          8 hours ago
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-actions">
                        <span className="comment-score" />
                      </div>
                      <div className="comment-body">
                        <span className="comment-copy">
                          In a separate js file. @MajedBadawi
                        </span>
                        <span className="comment-separated">-</span>
                        <a
                          href="user-profile.html"
                          className="comment-user owner"
                          title="224,110 reputation"
                        >
                          Arden Smith
                        </a>
                        <span className="comment-separated">-</span>
                        <a href="#" className="comment-date">
                          8 hours ago
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-actions">
                        <span className="comment-score" />
                      </div>
                      <div className="comment-body">
                        <span className="comment-copy">
                          @MajedBadawi I just updated the code to show where I'm
                          trying to get it.
                        </span>
                        <span className="comment-separated">-</span>
                        <a
                          href="user-profile.html"
                          className="comment-user owner"
                          title="224,110 reputation"
                        >
                          Arden Smith
                        </a>
                        <span className="comment-separated">-</span>
                        <a href="#" className="comment-date">
                          8 hours ago
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-actions">
                        <span className="comment-score" />
                      </div>
                      <div className="comment-body">
                        <span className="comment-copy">
                          Your are missing quotes{" "}
                          <code className="code">
                            data-productId={"{"}
                            {"{"}$product-&gt;id{"}"}
                            {"}"}
                          </code>{" "}
                          Your markup breaks after that
                        </span>
                        <span className="comment-separated">-</span>
                        <a
                          href="user-profile.html"
                          className="comment-user"
                          title="6,514 reputation"
                        >
                          Kevin Martin
                        </a>
                        <span className="comment-separated">-</span>
                        <a href="#" className="comment-date">
                          8 hours ago
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="comment-actions">
                        <span className="comment-score" />
                      </div>
                      <div className="comment-body">
                        <span className="comment-copy">
                          This doesn't work either:{" "}
                          <code className="code">
                            data-productId="{"{"}
                            {"{"}$product-&gt;id{"}"}
                            {"}"}"
                          </code>
                          . @Kevin Martin
                        </span>
                        <span className="comment-separated">-</span>
                        <a
                          href="user-profile.html"
                          className="comment-user owner"
                          title="224,110 reputation"
                        >
                          Arden Smith
                        </a>
                        <span className="comment-separated">-</span>
                        <a href="#" className="comment-date">
                          8 hours ago
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="comment-form">
                    <div className="comment-link-wrap text-center">
                      <a
                        className="collapse-btn comment-link"
                        data-toggle="collapse"
                        href="#addCommentCollapse"
                        role="button"
                        aria-expanded="false"
                        aria-controls="addCommentCollapse"
                        title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."
                      >
                        Add a comment
                      </a>
                    </div>
                    <div
                      className="collapse border-top border-top-gray mt-2 pt-3"
                      id="addCommentCollapse"
                    >
                      <form method="post" className="row pb-3">
                        <div className="col-lg-12">
                          <h4 className="fs-16 pb-2">Leave a Comment</h4>
                          <div className="divider mb-2">
                            <span />
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Name
                            </label>
                            <div className="form-group">
                              <input
                                className="form-control form--control form-control-sm fs-13"
                                type="text"
                                name="text"
                                placeholder="Your name"
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Email (Address never made public)
                            </label>
                            <div className="form-group">
                              <input
                                className="form-control form--control form-control-sm fs-13"
                                type="text"
                                name="text"
                                placeholder="Your email"
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Website
                            </label>
                            <div className="form-group">
                              <input
                                className="form-control form--control form-control-sm fs-13"
                                type="text"
                                name="text"
                                placeholder="Website link"
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Message
                            </label>
                            <div className="form-group">
                              <textarea
                                className="form-control form--control form-control-sm fs-13"
                                name="message"
                                rows={5}
                                placeholder="Your comment here..."
                                defaultValue={""}
                              />
                              <div className="d-flex flex-wrap align-items-center pt-2">
                                <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                  [named hyperlinks] (https://example.com)
                                </div>
                                <div className="mr-3 fw-bold fs-13">
                                  **bold**
                                </div>
                                <div className="mr-3 font-italic fs-13">
                                  _italic_
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-12">
                          <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                              <div className="custom-control custom-checkbox fs-13">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="getNewComments"
                                />
                                <label
                                  className="custom-control-label custom--control-label"
                                  htmlFor="getNewComments"
                                >
                                  Notify me of new comments vai email.
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox fs-13">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="getNewPosts"
                                />
                                <label
                                  className="custom-control-label custom--control-label"
                                  htmlFor="getNewPosts"
                                >
                                  Notify me of new posts vai email.
                                </label>
                              </div>
                            </div>
                            <button
                              className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                              type="submit"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                      </form>
                    </div>
                    {/* end collapse */}
                  </div>
                </div>
                {/* end comments-wrap */}
              </div>
              {/* end question-post-body-wrap */}
            </div>
            {/* end question */}
            <div className="subheader d-flex align-items-center justify-content-between">
              <div className="subheader-title">
                <h3 className="fs-16">1 Answer</h3>
              </div>
              {/* end subheader-title */}
              <div className="subheader-actions d-flex align-items-center lh-1">
                <label className="fs-13 fw-regular mr-1 mb-0">Order by</label>
                <div className="w-100px">
                  <select className="select-container">
                    <option value="active">active</option>
                    <option value="oldest">oldest</option>
                    <option value="votes" selected="selected">
                      votes
                    </option>
                  </select>
                </div>
              </div>
              {/* end subheader-actions */}
            </div>
            {/* end subheader */}
            <div className="answer-wrap d-flex">
              <div className="votes votes-styled w-auto">
                <div id="vote2" className="upvotejs">
                  <a
                    className="upvote upvote-on"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="This question is useful"
                  />
                  <span className="count">2</span>
                  <a
                    className="downvote"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="This question is not useful"
                  />
                  <a
                    className="star check star-on"
                    data-toggle="tooltip"
                    data-placement="right"
                    title="The question owner accepted this answer"
                  />
                </div>
              </div>
              {/* end votes */}
              <div className="answer-body-wrap flex-grow-1">
                <div className="answer-body">
                  <p>
                    Since you're using an{" "}
                    <code className="code">arrow-function</code>,{" "}
                    <code className="code">this</code> does not refer to the{" "}
                    <code className="code">button</code>:
                  </p>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      $(<span className="code-string">"#size-click"</span>
                      ).click(
                      <span className="code-function">
                        <span className="code-keyword">function</span>(){" "}
                      </span>
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="code-keyword">var</span> prodId = $(
                      <span className="code-built-in">this</span>).attr(
                      <span className="code-string">"data-productId"</span>);
                      {"\n"}
                      {"  "}
                      <span className="code-built-in">console</span>.log(
                      <span className="code-string">'this is prodId'</span>);
                      {"\n"}
                      {"  "}
                      <span className="code-built-in">console</span>
                      .log(prodId);{"\n"}
                      {"}"});
                    </code>
                  </pre>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      <span className="code-tag">
                        &lt;<span className="code-name">script</span>{" "}
                        <span className="code-attr">src</span>=
                        <span className="code-string">
                          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
                        </span>
                        &gt;
                      </span>
                      <span className="code-tag">
                        &lt;/<span className="code-name">script</span>&gt;
                      </span>
                      {"\n"}
                      {"\n"}
                      <span className="code-tag">
                        &lt;<span className="code-name">button</span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">class</span>=
                        <span className="code-string">
                          "btn btn-solid navigate"
                        </span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">value</span>=
                        <span className="code-string">"2"</span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">data-productId</span>=
                        <span className="code-string">"1"</span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">id</span>=
                        <span className="code-string">"size-click"</span>
                        {"\n"}&gt;
                      </span>
                      Next
                      <span className="code-tag">
                        &lt;/<span className="code-name">button</span>&gt;
                      </span>
                    </code>
                  </pre>
                  <p>
                    If you still want to use it, you can use the{" "}
                    <code className="code">event</code> passed to the function:
                  </p>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      $(<span className="code-string">"#size-click"</span>
                      ).click(
                      <span className="code-function">
                        <span className="code-params">e</span> =&gt;
                      </span>{" "}
                      {"{"}
                      {"\n"}
                      {"  "}
                      <span className="code-keyword">var</span> prodId =
                      $(e.currentTarget).attr(
                      <span className="code-string">"data-productId"</span>);
                      {"\n"}
                      {"  "}
                      <span className="code-built-in">console</span>.log(
                      <span className="code-string">'this is prodId'</span>);
                      {"\n"}
                      {"  "}
                      <span className="code-built-in">console</span>
                      .log(prodId);{"\n"}
                      {"}"});
                    </code>
                  </pre>
                  <pre className="code-block custom-scrollbar-styled">
                    <code>
                      <span className="code-tag">
                        &lt;<span className="code-name">script</span>{" "}
                        <span className="code-attr">src</span>=
                        <span className="code-string">
                          "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
                        </span>
                        &gt;
                      </span>
                      <span className="code-tag">
                        &lt;/<span className="code-name">script</span>&gt;
                      </span>
                      {"\n"}
                      {"\n"}
                      <span className="code-tag">
                        &lt;<span className="code-name">button</span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">class</span>=
                        <span className="code-string">
                          "btn btn-solid navigate"
                        </span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">value</span>=
                        <span className="code-string">"2"</span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">data-productId</span>=
                        <span className="code-string">"1"</span>
                        {"\n"}
                        {"  "}
                        <span className="code-attr">id</span>=
                        <span className="code-string">"size-click"</span>
                        {"\n"}&gt;
                      </span>
                      Next
                      <span className="code-tag">
                        &lt;/<span className="code-name">button</span>&gt;
                      </span>
                    </code>
                  </pre>
                </div>
                {/* end answer-body */}
                <div className="question-post-user-action">
                  <div className="post-menu">
                    <div className="btn-group">
                      <button
                        className="btn dropdown-toggle after-none"
                        type="button"
                        id="shareDropdownMenuTwo"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Share
                      </button>
                      <div
                        className="dropdown-menu dropdown--menu dropdown--menu-2 mt-2"
                        aria-labelledby="shareDropdownMenuTwo"
                      >
                        <div className="py-3 px-4">
                          <h4 className="fs-15 pb-2">
                            Share a link to this question
                          </h4>
                          <form action="#" className="copy-to-clipboard">
                            <span className="text-success-message">
                              Link Copied!
                            </span>
                            <input
                              type="text"
                              className="form-control form--control form-control-sm copy-input"
                              defaultValue="https://Disilab.com/q/66552850/15319675"
                            />
                            <div className="btn-box pt-2 d-flex align-items-center justify-content-between">
                              <a href="#" className="btn-text copy-btn">
                                Copy link
                              </a>
                              <ul className="social-icons social-icons-sm">
                                <li>
                                  <a
                                    href="#"
                                    className="bg-8 text-white shadow-none"
                                    title="Share link to this question on Facebook"
                                  >
                                    <i className="la la-facebook" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="bg-9 text-white shadow-none"
                                    title="Share link to this question on Twitter"
                                  >
                                    <i className="la la-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="#"
                                    className="bg-dark text-white shadow-none"
                                    title="Share link to this question on DEV"
                                  >
                                    <i className="lab la-dev" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* btn-group */}
                    <a href="#" className="btn">
                      Edit
                    </a>
                    <button className="btn">Follow</button>
                  </div>
                  {/* end post-menu */}
                  <div className="media media-card user-media align-items-center">
                    <a href="user-profile.html" className="media-img d-block">
                      <img src="images/img4.jpg" alt="avatar" />
                    </a>
                    <div className="media-body d-flex align-items-center justify-content-between">
                      <div>
                        <h5 className="pb-1">
                          <a href="user-profile.html">Majed Badawi</a>
                        </h5>
                        <div className="stats fs-12 d-flex align-items-center lh-18">
                          <span className="text-black pr-2">15.5k</span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball gold" />3
                          </span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball silver" />
                            10
                          </span>
                          <span className="pr-2 d-inline-flex align-items-center">
                            <span className="ball" />
                            26
                          </span>
                        </div>
                      </div>
                      <small className="meta d-block text-right">
                        <span className="text-black d-block lh-18">
                          answered
                        </span>
                        <span className="d-block lh-18 fs-12">8 hours ago</span>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card user-media align-items-center">
                    <div className="media-body d-flex align-items-center justify-content-end">
                      <a
                        href="revisions.html"
                        className="meta d-block text-right fs-13 text-color"
                      >
                        <span className="d-block lh-18">edited</span>
                        <span className="d-block lh-18 fs-12">8 hours ago</span>
                      </a>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                {/* end question-post-user-action */}
                <div className="comments-wrap">
                  <ul className="comments-list">
                    <li>
                      <div className="comment-actions">
                        <span className="comment-score">1</span>
                      </div>
                      <div className="comment-body">
                        <span className="comment-copy">
                          Ah excellent! Thank you!
                        </span>
                        <span className="comment-separated">-</span>
                        <a
                          href="user-profile.html"
                          className="comment-user owner"
                          title="224,110 reputation"
                        >
                          Arden Smith
                        </a>
                        <span className="comment-separated">-</span>
                        <a href="#" className="comment-date">
                          8 hours ago
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="comment-form">
                    <div className="comment-link-wrap text-center">
                      <a
                        className="collapse-btn comment-link"
                        data-toggle="collapse"
                        href="#addCommentCollapseTwo"
                        role="button"
                        aria-expanded="false"
                        aria-controls="addCommentCollapseTwo"
                        title="Use comments to ask for more information or suggest improvements. Avoid answering questions in comments."
                      >
                        Add a comment
                      </a>
                    </div>
                    <div
                      className="collapse border-top border-top-gray mt-2 pt-3"
                      id="addCommentCollapseTwo"
                    >
                      <form method="post" className="row pb-3">
                        <div className="col-lg-12">
                          <h4 className="fs-16 pb-2">Leave a Comment</h4>
                          <div className="divider mb-2">
                            <span />
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Name
                            </label>
                            <div className="form-group">
                              <input
                                className="form-control form--control form-control-sm fs-13"
                                type="text"
                                name="text"
                                placeholder="Your name"
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Email (Address never made public)
                            </label>
                            <div className="form-group">
                              <input
                                className="form-control form--control form-control-sm fs-13"
                                type="text"
                                name="text"
                                placeholder="Your email"
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-6 */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Website
                            </label>
                            <div className="form-group">
                              <input
                                className="form-control form--control form-control-sm fs-13"
                                type="text"
                                name="text"
                                placeholder="Website link"
                              />
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-12">
                          <div className="input-box">
                            <label className="fs-13 text-black lh-20">
                              Message
                            </label>
                            <div className="form-group">
                              <textarea
                                className="form-control form--control form-control-sm fs-13"
                                name="message"
                                rows={5}
                                placeholder="Your comment here..."
                                defaultValue={""}
                              />
                              <div className="d-flex flex-wrap align-items-center pt-2">
                                <div className="badge bg-gray border border-gray mr-3 fw-regular fs-13">
                                  [named hyperlinks] (https://example.com)
                                </div>
                                <div className="mr-3 fw-bold fs-13">
                                  **bold**
                                </div>
                                <div className="mr-3 font-italic fs-13">
                                  _italic_
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                        <div className="col-lg-12">
                          <div className="input-box d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                              <div className="custom-control custom-checkbox fs-13">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="getNewCommentsTwo"
                                />
                                <label
                                  className="custom-control-label custom--control-label"
                                  htmlFor="getNewCommentsTwo"
                                >
                                  Notify me of new comments vai email.
                                </label>
                              </div>
                              <div className="custom-control custom-checkbox fs-13">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="getNewPostsTwo"
                                />
                                <label
                                  className="custom-control-label custom--control-label"
                                  htmlFor="getNewPostsTwo"
                                >
                                  Notify me of new posts vai email.
                                </label>
                              </div>
                            </div>
                            <button
                              className="btn theme-btn theme-btn-sm theme-btn-outline theme-btn-outline-gray"
                              type="submit"
                            >
                              Post Comment
                            </button>
                          </div>
                        </div>
                        {/* end col-lg-12 */}
                      </form>
                    </div>
                    {/* end collapse */}
                  </div>
                </div>
                {/* end comments-wrap */}
              </div>
              {/* end answer-body-wrap */}
            </div>
            {/* end answer-wrap */}
            <div className="subheader">
              <div className="subheader-title">
                <h3 className="fs-16">Your Answer</h3>
              </div>
              {/* end subheader-title */}
            </div>
            {/* end subheader */}
            <div className="post-form">
              <form method="post" className="pt-3">
                <div className="input-box">
                  <label className="fs-14 text-black lh-20 fw-medium">
                    Body
                  </label>
                  <div className="form-group">
                    <textarea
                      className="form-control form--control form-control-sm fs-13 user-text-editor"
                      name="message"
                      rows={6}
                      placeholder="Your answer here..."
                      defaultValue={"Your answer here..."}
                    />
                  </div>
                </div>
                <div className="input-box">
                  <label className="fs-14 text-black fw-medium">Image</label>
                  <div className="form-group">
                    <div className="file-upload-wrap file-upload-layout-2">
                      <input
                        type="file"
                        name="files[]"
                        className="file-upload-input"
                        multiple=""
                      />
                      <span className="file-upload-text d-flex align-items-center justify-content-center">
                        <i className="la la-cloud-upload mr-2 fs-24" />
                        Drop files here or click to upload.
                      </span>
                    </div>
                  </div>
                </div>
                {/* end input-box */}
                <button className="btn theme-btn theme-btn-sm" type="submit">
                  Post Your Answer
                </button>
              </form>
            </div>
          </div>
          {/* end question-main-bar */}
        </div>
        {/* end col-lg-9 */}
        <div className="col-lg-3">
          <div className="sidebar">
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Number Achievement</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="row no-gutters text-center">
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color">980k</span>
                      <p className="fs-14">Questions</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color-2">610k</span>
                      <p className="fs-14">Answers</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color-3">650k</span>
                      <p className="fs-14">Answer accepted</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-6 responsive-column-half">
                    <div className="icon-box pt-3">
                      <span className="fs-20 fw-bold text-color-4">320k</span>
                      <p className="fs-14">Users</p>
                    </div>
                    {/* end icon-box */}
                  </div>
                  {/* end col-lg-6 */}
                  <div className="col-lg-12 pt-3">
                    <p className="fs-14">
                      To get answer of question{" "}
                      <a
                        href="signup.html"
                        className="text-color hover-underline"
                      >
                        Join
                        <i className="la la-arrow-right ml-1" />
                      </a>
                    </p>
                  </div>
                </div>
                {/* end row */}
              </div>
            </div>
            {/* end card */}
            <div className="card card-item">
              <div className="card-body">
                <div className="d-flex align-items-center pb-3">
                  <svg
                    className="mr-2"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="#6c727c"
                  >
                    <path d="M1 6l8 5 8-5V4L9 9 1 4c0-1.1.9-2 2-2h12c1.09 0 2 .91 2 2v10c0 1.09-.91 2-2 2H3c-1.09 0-2-.91-2-2V6z" />
                  </svg>
                  <h3 className="fs-17">Love this site?</h3>
                </div>
                <div className="divider">
                  <span />
                </div>
                <p className="fs-14 lh-20 py-3">
                  Get the{" "}
                  <span className="text-dark fw-medium">
                    weekly newsletter!
                  </span>{" "}
                  In it, you'll get:
                </p>
                <ul className="generic-list-item generic-list-item-bullet fs-14 pb-3">
                  <li className="lh-20">
                    The week's top questions and answers
                  </li>
                  <li className="lh-20">Important community announcements</li>
                  <li className="lh-20">Questions that need answers</li>
                </ul>
                <button className="btn theme-btn theme-btn-gray w-100">
                  Sign up for the digest
                </button>
                <p className="fs-14 pt-1 text-center">
                  See an example newsletter
                </p>
              </div>
            </div>
            {/* end card */}
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Related Questions</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="sidebar-questions pt-3">
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          How to select the dom element with event.target
                        </a>
                      </h5>
                      <small className="meta">
                        <span className="pr-1">2 mins ago</span>
                        <span className="pr-1">. by</span>
                        <a href="#" className="author">
                          Sudhir Kumbhare
                        </a>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          How can you cut an onion without crying?
                        </a>
                      </h5>
                      <small className="meta">
                        <span className="pr-1">48 mins ago</span>
                        <span className="pr-1">. by</span>
                        <a href="#" className="author">
                          wimax
                        </a>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          How to change the behavior of dropdown buttons in HTML
                        </a>
                      </h5>
                      <small className="meta">
                        <span className="pr-1">1 hour ago</span>
                        <span className="pr-1">. by</span>
                        <a href="#" className="author">
                          Antonin gavrel
                        </a>
                      </small>
                    </div>
                  </div>
                  {/* end media */}
                </div>
                {/* end sidebar-questions */}
              </div>
            </div>
            {/* end card */}
            <div className="card card-item">
              <div className="card-body">
                <h3 className="fs-17 pb-3">Trending Tags</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="tags pt-4">
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      analytics
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      computer
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      python
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      javascript
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="tag-item">
                    <a href="#" className="tag-link tag-link-md">
                      c#
                    </a>
                    <span className="item-multiplier fs-13">
                      <span>×</span>
                      <span>32924</span>
                    </span>
                  </div>
                  {/* end tag-item */}
                  <div className="collapse" id="showMoreTags">
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        java
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        swift
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        html
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        angular
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        flutter
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                    <div className="tag-item">
                      <a href="#" className="tag-link tag-link-md">
                        machine-language
                      </a>
                      <span className="item-multiplier fs-13">
                        <span>×</span>
                        <span>32924</span>
                      </span>
                    </div>
                    {/* end tag-item */}
                  </div>
                  {/* end collapse */}
                  <a
                    className="collapse-btn fs-13"
                    data-toggle="collapse"
                    href="#showMoreTags"
                    role="button"
                    aria-expanded="false"
                    aria-controls="showMoreTags"
                  >
                    <span className="collapse-btn-hide">
                      Show more
                      <i className="la la-angle-down ml-1 fs-11" />
                    </span>
                    <span className="collapse-btn-show">
                      Show less
                      <i className="la la-angle-up ml-1 fs-11" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* end card */}
            <div className="ad-card">
              <h4 className="text-gray text-uppercase fs-13 pb-3 text-center">
                Advertisements
              </h4>
              <div className="ad-banner mb-4 mx-auto">
                <span className="ad-text">290x500</span>
              </div>
            </div>
            {/* end ad-card */}
          </div>
          {/* end sidebar */}
        </div>
        {/* end col-lg-3 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* end question-area */}
  {/* ================================
   END QUESTION AREA
================================= */}
  {/* ================================
   END FOOTER AREA
================================= */}
  <section className="footer-area pt-80px bg-dark position-relative">
    <span className="vertical-bar-shape vertical-bar-shape-1" />
    <span className="vertical-bar-shape vertical-bar-shape-2" />
    <span className="vertical-bar-shape vertical-bar-shape-3" />
    <span className="vertical-bar-shape vertical-bar-shape-4" />
    <div className="container">
      <div className="row">
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Company</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Advertising</a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Legal Stuff</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Help</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">Knowledge Base</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
        <div className="col-lg-3 responsive-column-half">
          <div className="footer-item">
            <h3 className="fs-18 fw-bold pb-2 text-white">Connect with us</h3>
            <ul className="generic-list-item generic-list-item-hover-underline pt-3 generic-list-item-white">
              <li>
                <a href="#">
                  <i className="la la-facebook mr-1" /> Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="la la-twitter mr-1" /> Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="la la-linkedin mr-1" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="la la-instagram mr-1" /> Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* end footer-item */}
        </div>
        {/* end col-lg-3 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
    <hr className="border-top-gray my-5" />
    <div className="container">
      <div className="row align-items-center pb-4 copyright-wrap">
        <div className="col-lg-6">
          <a href="index.html" className="d-inline-block">
            <img
              src="images/logo-white.png"
              alt="footer logo"
              className="footer-logo"
            />
          </a>
        </div>
        {/* end col-lg-6 */}
        <div className="col-lg-6">
          <p className="copyright-desc text-right fs-14">
            Copyright © 2021 <a href="https://techydevs.com/">TechyDevs</a> Inc.
          </p>
        </div>
        {/* end col-lg-6 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
</>

        </>
    )
}
