import React from 'react'

export default function AskQuestion() {

    return(
        <>
        <>
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
  <section className="hero-area bg-white shadow-sm overflow-hidden">
    <span className="stroke-shape stroke-shape-1" />
    <span className="stroke-shape stroke-shape-2" />
    <span className="stroke-shape stroke-shape-3" />
    <span className="stroke-shape stroke-shape-4" />
    <span className="stroke-shape stroke-shape-5" />
    <span className="stroke-shape stroke-shape-6" />
    <div className="container">
      <div className="hero-content pt-80px pb-80px">
        <h2 className="section-title">Ask a public question</h2>
        <svg
          className="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 550 125"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".cls-3,.cls-6,.cls-7{fill:none;stroke-miterlimit:10}.cls-3{stroke:#3cb1c6}.cls-4{fill:#fff}.cls-5{fill:#f9b851}.cls-6{stroke:#f48024}.cls-7{stroke:#bbc0c4;stroke-dasharray:5}"
              }}
            />
          </defs>
          <g opacity=".5">
            <path
              fill="#cceaff"
              d="M232.73 73L217.5 92.89V73h-16V26h64v47H232.73z"
            />
            <path
              className="cls-3"
              d="M205 47V20.5h14.5M255.5 66.5h-18.51L221 86.06V66.5h-16V58M231.5 20.5H270v46h-6.5"
            />
            <path
              className="cls-4"
              d="M222.5 40.79v7.3l8.16 7.29 15.84-14.21V33.3l-15.84 14.31-8.16-6.82z"
            />
            <path
              className="cls-5"
              d="M374.36 76l-9.29 11.42-.26-11.42h-5.31V49h45v27h-30.14z"
            />
            <path
              className="cls-6"
              d="M379.5 46.5H402V55M402 62v11.5H372.02L363 84.92V73.5h-6v-27h11.5"
            />
            <path
              className="cls-4"
              d="M377.5 59h5v5h-5zM367.5 59h5v5h-5zM387.5 59h5v5h-5z"
            />
            <path
              className="cls-5"
              d="M180.25 67l5.16 6.77.14-6.77h2.95V51h-25v16h16.75z"
            />
            <path
              className="cls-6"
              d="M170.5 65.5h10.73l5.77 6.72V65.5h4V59M170.5 49.5H165V65M191 53v-3.5h-15.5"
            />
            <path
              className="cls-4"
              transform="rotate(-180 177 58.5)"
              d="M175.5 57h3v3h-3z"
            />
            <path
              className="cls-4"
              transform="rotate(-180 183 58.5)"
              d="M181.5 57h3v3h-3z"
            />
            <path
              className="cls-4"
              transform="rotate(-180 171 58.5)"
              d="M169.5 57h3v3h-3z"
            />
            <path
              className="cls-5"
              d="M486.95 77l15.55 19.89V77h16V30h-65v47H486.95z"
            />
            <path
              className="cls-6"
              d="M515 51V24.5h-14.5M464.5 70.5h18.51L499 90.06V70.5h16V62M488.5 24.5H450v46h6.5"
            />
            <path
              className="cls-4"
              d="M470.5 44.71V52l8.16 7.3 15.84-14.21v-7.87l-15.84 14.3-8.16-6.81z"
            />
            <path
              className="cls-3"
              d="M533.5 34.5h-2.14L527 40.34V34.5h-3v-12h4.5M545 30v5.5h-7.5M533.5 22.5H545V26M534 28.5h2v2h-2z"
            />
            <path
              className="cls-3"
              d="M529 28.5h2v2h-2zM539 28.5h2v2h-2zM280 30V16.5h7.5M305.5 39.5H296l-8 10v-10h-8V35M293.5 15.5H313v24h-3.5"
            />
            <path
              className="cls-3"
              d="M289 26.52v3.65l4.08 3.65 7.92-7.11v-3.93l-7.92 7.15-4.08-3.41z"
            />
            <path
              className="cls-6"
              d="M124.5 27.5h1.41l3.09 4.23V27.5h2v-10h-2.5M115 23v4.5h6.5M124.5 17.5H115V21"
            />
            <path
              className="cls-6"
              transform="rotate(-180 123 22.5)"
              d="M122 21.5h2v2h-2z"
            />
            <path
              className="cls-6"
              transform="rotate(-180 127 22.5)"
              d="M126 21.5h2v2h-2z"
            />
            <path
              className="cls-6"
              transform="rotate(-180 119 22.5)"
              d="M118 21.5h2v2h-2z"
            />
            <path
              className="cls-7"
              d="M188.5 78.19s4.69 18.91 27.5 16.28M131 32.67s21.64-2 33 15M271.12 69.19c23.92 31.24 55.21 35.18 90.64 19.3M402 43.5c.68-6.28 19.53-30.13 45.26-21M503.45 98.26c5.25.1 37.8-10.84 23.09-54.76M272.34 66.5s10.51 0 15.16-13.88"
            />
            <path
              className="cls-7"
              d="M97.22 79.67c14.33-2.39 42.51-3.18 55.87 12.65s58.91 20.93 64.49 3"
            />
          </g>
          <path
            className="cls-3"
            d="M59.15 84.6v-1.04M71.6 84.81v3.73M53.39 82.51l-3.96-.54 2.96-21.6 27.37 3.75-2.96 21.6-20.05-2.75"
          />
          <path
            className="cls-3"
            d="M50.22 76.21l-2.31-.32a2 2 0 01-1.73-2.28l.63-4.61a2 2 0 012.3-1.74l2.3.31zM79.88 80.27L77.59 80l1.18-8.64 2.32.32a2 2 0 011.73 2.27l-.64 4.62a2 2 0 01-2.3 1.7zM66.6 79.11l-.2 1.44M69.48 79.5l-.2 1.44M63.72 78.71l-.2 1.44M60.84 78.32l-.2 1.44M57.96 77.93l-.2 1.44"
          />
          <ellipse
            className="cls-3"
            cx="66.45"
            cy="70.5"
            rx="2.87"
            ry="2.94"
            transform="rotate(-82.2 66.45 70.504)"
          />
          <ellipse
            className="cls-3"
            cx="56.76"
            cy="69.18"
            rx="2.87"
            ry="2.94"
            transform="rotate(-82.2 56.758 69.175)"
          />
          <path
            className="cls-3"
            d="M55.42 105.96v7.46M72.84 105.96v7.46M76.57 96.01v1.24M66.62 96.01v1.24M54.18 95.38h7.47v4.98h-7.47z"
          />
          <path
            className="cls-3"
            d="M81.55 100.98v4.36H46.71V87.92h5.28M57.43 79.39l-1.98 3"
          />
          <path
            className="cls-3"
            d="M54.31 90.61c-2.34-1.55-3.17-4.43-1.85-6.43l1.8-2.73 8.49 5.61L61 89.78c-1.37 2.01-4.34 2.38-6.69.83zM62.27 87.92h19.28v9.33"
          />
          <path
            className="cls-3"
            d="M88.32 96.44l1.28-4.17a4.4 4.4 0 00-4.45-4.35h-5.47M79.29 104.84l2.68-3.44M82.72 107.53l2.69-3.44M88.32 96.83c2.22 1.73 2.81 4.67 1.33 6.56l-2 2.57-8-6.27 2-2.57c1.47-1.89 4.46-2.02 6.67-.29zM55.3 91.15a6.72 6.72 0 01-1.74.35H46.5"
          />
          <path
            className="cls-5"
            d="M40.82 46.24l7.96 10 .23-10h4.55V22.6H14.98v23.64h25.84z"
          />
          <path
            className="cls-6"
            d="M28.67 43.13h14.69l8.33 10.53V43.13h6.22V33.8M26.18 19.49H18.1v24.26M56.67 25.09v-5.6H33.65"
          />
          <path
            className="cls-4"
            d="M34.17 33.8a5.9 5.9 0 01.34-2.23 4.5 4.5 0 011.24-1.64A6.41 6.41 0 0037 28.62a2.06 2.06 0 00.3-1.07c0-1.12-.52-1.69-1.56-1.69a1.56 1.56 0 00-1.18.46 1.74 1.74 0 00-.46 1.25h-2.9a3.84 3.84 0 011.23-3 4.82 4.82 0 013.31-1.08 4.84 4.84 0 013.29 1 3.64 3.64 0 011.17 2.89 3.57 3.57 0 01-.43 1.62 6.57 6.57 0 01-1.33 1.68l-.81.77a2.78 2.78 0 00-.87 1.71v.61zM34 36.85a1.34 1.34 0 01.43-1 1.64 1.64 0 012.17 0 1.34 1.34 0 01.43 1 1.32 1.32 0 01-.42 1 1.7 1.7 0 01-2.19 0 1.32 1.32 0 01-.42-1z"
          />
          <path
            className="cls-3"
            d="M79.06 124H66.62v-4.21a6.45 6.45 0 015-6.42 6.29 6.29 0 017.47 6.33zM75.33 122.13v1.25M70.35 122.13v1.25M61.64 124H49.2v-4.21a6.47 6.47 0 015-6.42 6.29 6.29 0 017.47 6.33zM57.91 122.13v1.25M52.93 122.13v1.25"
          />
        </svg>
      </div>
      {/* end hero-content */}
    </div>
    {/* end container */}
  </section>
  {/*======================================
  END HERO AREA
======================================*/}
  {/* ================================
   START QUESTION AREA
================================= */}
  <section className="question-area pt-80px pb-40px">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="card card-item">
            <form method="post" className="card-body">
              <div className="input-box">
                <label className="fs-14 text-black fw-medium mb-0">
                  Question Title
                </label>
                <p className="fs-13 pb-3 lh-20">
                  Be specific and imagine you’re asking a question to another
                  person
                </p>
                <div className="form-group">
                  <input
                    className="form-control form--control"
                    type="text"
                    name="text"
                    placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
                  />
                </div>
              </div>
              {/* end input-box */}
              <div className="input-box">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <label className="fs-14 text-black fw-medium mb-0">
                      Tags
                    </label>
                    <p className="fs-13 pb-3 lh-20">
                      Add up to 5 tags to describe what your question is about:
                    </p>
                  </div>
                  <button
                    type="button"
                    className="popover-trigger btn border border-gray py-1 lh-18 px-2"
                    data-container="body"
                    data-toggle="popover"
                    data-placement="top"
                  >
                    <svg
                      aria-hidden="true"
                      className="svg-icon-color-gray"
                      width={14}
                      height={14}
                    >
                      <path d="M7 1a6 6 0 100 12A6 6 0 007 1zm1.06 9.06c-.02.63-.48 1.02-1.1 1-.57-.02-1.03-.43-1.01-1.06.02-.63.5-1.04 1.08-1.02.6.02 1.05.45 1.03 1.08zm.73-3.07l-.47.3c-.2.15-.36.36-.44.6a3.6 3.6 0 00-.08.65c0 .04-.03.14-.16.14h-1.4c-.14 0-.16-.09-.16-.13-.01-.5.11-.99.36-1.42A4.6 4.6 0 017.7 6.07c.15-.1.21-.21.3-.33a1.14 1.14 0 00.02-1.48c-.22-.26-.46-.4-.92-.4-.45 0-.83.23-1.02.52-.19.3-.16.63-.16.94H4.2c0-1.17.31-1.92.98-2.36a3.5 3.5 0 011.83-.44c.88 0 1.58.16 2.2.62.58.42.88 1.02.88 1.82 0 .5-.17.9-.43 1.24-.15.2-.44.47-.86.79h-.01z" />
                    </svg>
                  </button>
                  <div className="generic-popover d-none">
                    <h4 className="fs-16 pb-1">How to tag</h4>
                    <p className="pb-2 fs-14">
                      Tags help the right people find and answer your question.
                    </p>
                    <ul className="generic-list-item generic-list-item-bullet">
                      <li className="lh-18 text-black-50">
                        Identify your tags by completing the sentence, "My
                        question is about…"
                      </li>
                      <li className="lh-18 text-black-50">
                        Include tags that are crucial to your question only,
                        like <div className="tag-link">c#</div>
                      </li>
                      <li className="lh-18 text-black-50">
                        Only include version numbers, like{" "}
                        <div className="tag-link">c#-4.0</div>, when absolutely
                        necessary
                      </li>
                      <li className="lh-18 text-black-50">
                        Use existing{" "}
                        <a
                          href="#"
                          className="d-inline-block text-color hover-underline"
                          target="_blank"
                        >
                          popular tags
                        </a>
                      </li>
                    </ul>
                    <p className="pb-1 fs-14">If you can’t find a tag:</p>
                    <p className="fs-14 text-black-50">
                      <a
                        href="#"
                        className="text-color hover-underline"
                        target="_blank"
                      >
                        Create new tags
                      </a>{" "}
                      or post without it and{" "}
                      <a
                        href="#"
                        className="text-color hover-underline"
                        target="_blank"
                      >
                        ask the community
                      </a>
                      to create one for you.
                    </p>
                  </div>
                  {/* end generic-popover */}
                </div>
                <div className="form-group">
                  <input
                    className="input-tags input--tags"
                    type="text"
                    name="tags"
                    placeholder="e.g. javascript"
                  />
                </div>
              </div>
              {/* end input-box */}
              <div className="input-box">
                <label className="fs-14 text-black fw-medium mb-0">
                  Category
                </label>
                <p className="fs-13 pb-3 lh-20">
                  Please choose the appropriate section so the question can be
                  searched easily.
                </p>
                <div className="form-group">
                  <select
                    className="select-container select--container"
                    data-placeholder="Select a Category"
                  >
                    <option selected="" value="">
                      Select a Category
                    </option>
                    <option value={1}>Analytics</option>
                    <option value={2}>Communication</option>
                    <option value={3}>Company</option>
                    <option value={4}>Language</option>
                    <option value={5}>Management</option>
                    <option value={6}>Programmers</option>
                    <option value={7}>Programs</option>
                    <option value={8}>University</option>
                  </select>
                </div>
              </div>
              {/* end input-box */}
              <div className="input-box">
                <label className="fs-14 text-black fw-medium mb-0">
                  Details
                </label>
                <p className="fs-13 pb-3 lh-20">
                  Include all the information someone would need to answer your
                  question
                </p>
                <div className="form-group">
                  <textarea
                    className="form-control form--control user-text-editor"
                    rows={10}
                    cols={40}
                    defaultValue={""}
                  />
                  <div className="d-flex align-items-center pt-2">
                    <div className="mr-3">
                      ```{" "}
                      <code className="badge bg-gray border border-gray text-gray">
                        code
                      </code>{" "}
                      ```
                    </div>
                    <div className="mr-3 fw-bold">**bold**</div>
                    <div className="mr-3 font-italic">*italic*</div>
                    <div>&gt;quote</div>
                  </div>
                </div>
              </div>
              {/* end input-box */}
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
              <div className="input-box pt-2">
                <div className="form-group">
                  <div className="custom-control custom-checkbox fs-13 mb-1">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="notifiedMe"
                    />
                    <label
                      className="custom-control-label custom--control-label"
                      htmlFor="notifiedMe"
                    >
                      Get notified by email when someone answers this question.
                    </label>
                  </div>
                  <div className="custom-control custom-checkbox fs-13">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="youAgreeCheckBox"
                    />
                    <label
                      className="custom-control-label custom--control-label"
                      htmlFor="youAgreeCheckBox"
                    >
                      By asking your question, you agree to the{" "}
                      <a
                        href="privacy-policy.html"
                        className="text-color hover-underline"
                      >
                        Privacy Policy.
                      </a>
                    </label>
                  </div>
                </div>
                <div className="btn-box">
                  <button type="submit" className="btn theme-btn">
                    Publish your question
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* end card */}
        </div>
        {/* end col-lg-8 */}
        <div className="col-lg-4">
          <div className="sidebar">
            <div className="card card-item p-4">
              <h3 className="fs-17 pb-3">Step 1: Draft your question</h3>
              <div className="divider">
                <span />
              </div>
              <p className="fs-14 lh-22 pb-2 pt-3">
                The community is here to help you with specific coding,
                algorithm, or language problems.
              </p>
              <p className="fs-14 lh-22">
                Avoid asking opinion-based questions.
              </p>
              <div id="accordion" className="generic-accordion pt-4">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <button
                      className="btn btn-link fs-15"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <span>
                        <span className="text-color pr-2 fs-16">1.</span>{" "}
                        Summarize the problem
                      </span>
                      <i className="la la-angle-down collapse-icon" />
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet-2 fs-14">
                        <li className="lh-18 text-black-50">
                          Include details about your goal
                        </li>
                        <li className="lh-18 text-black-50">
                          Describe expected and actual results
                        </li>
                        <li className="lh-18 text-black-50 mb-0">
                          Include any error messages
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* end card */}
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="btn btn-link collapsed fs-15"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <span>
                        <span className="text-color pr-2 fs-16">2.</span>{" "}
                        Describe what you’ve tried
                      </span>
                      <i className="la la-angle-down collapse-icon" />
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p className="fs-14 lh-22 text-black-50">
                        Show what you’ve tried and tell us what you found (on
                        this site or elsewhere) and why it didn’t meet your
                        needs. You can get better answers when you provide
                        research.
                      </p>
                    </div>
                  </div>
                </div>
                {/* end card */}
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <button
                      className="btn btn-link collapsed fs-15"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <span>
                        <span className="text-color pr-2 fs-16">3.</span> Show
                        some code
                      </span>
                      <i className="la la-angle-down collapse-icon" />
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p className="fs-14 lh-22 text-black-50">
                        When appropriate, share the minimum amount of code
                        others need to reproduce your problem (also called a
                        <a href="#" className="text-color hover-underline">
                          minimum
                        </a>
                        ,{" "}
                        <a href="#" className="text-color hover-underline">
                          reproducible example
                        </a>
                        )
                      </p>
                    </div>
                  </div>
                </div>
                {/* end card */}
              </div>
              {/* end accordion */}
            </div>
            {/* end card */}
            <div id="accordion-two" className="generic-accordion">
              <div className="card mb-3">
                <div className="card-header" id="headingFour">
                  <button
                    className="btn btn-link collapsed fs-15"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span>Have a non-programming question?</span>
                    <i className="la la-angle-down collapse-icon" />
                  </button>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    <p className="fs-14 lh-22 text-black-50 pb-2">
                      <a
                        className="text-color hover-underline d-block"
                        href="#"
                        target="_blank"
                      >
                        Super user
                      </a>
                      Troubleshooting hardware and software issues
                    </p>
                    <p className="fs-14 lh-22 text-black-50 pb-2">
                      <a
                        className="text-color hover-underline d-block"
                        href="#"
                        target="_blank"
                      >
                        Software engineering
                      </a>
                      For software development methods and process questions
                    </p>
                    <p className="fs-14 lh-22 text-black-50 pb-2">
                      <a
                        className="text-color hover-underline d-block"
                        href="#"
                        target="_blank"
                      >
                        Hardware recommendations
                      </a>
                    </p>
                    <p className="fs-14 lh-22 text-black-50 pb-2">
                      <a
                        className="text-color hover-underline d-block"
                        href="#"
                        target="_blank"
                      >
                        Software recommendations
                      </a>
                    </p>
                    <p className="fs-14 lh-22 text-black-50">
                      Ask questions about the site on{" "}
                      <a
                        className="text-color hover-underline"
                        href="#"
                        target="_blank"
                      >
                        meta
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* end card */}
              <div className="card">
                <div className="card-header" id="headingFive">
                  <button
                    className="btn btn-link collapsed fs-15"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span>More helpful links</span>
                    <i className="la la-angle-down collapse-icon" />
                  </button>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="headingFive"
                  data-parent="#accordion-two"
                >
                  <div className="card-body">
                    <p className="fs-14 lh-22 text-black-50 pb-2">
                      Find more information about{" "}
                      <a
                        className="text-color hover-underline"
                        href="#"
                        target="_blank"
                      >
                        how to ask a good question here
                      </a>
                    </p>
                    <p className="fs-14 lh-22 text-black-50">
                      Visit the{" "}
                      <a
                        className="text-color hover-underline"
                        href="#"
                        target="_blank"
                      >
                        help center
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            {/* end accordion */}
          </div>
          {/* end sidebar */}
        </div>
        {/* end col-lg-4 */}
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
   START CTA AREA
================================= */}
  <section className="get-started-area pt-80px pb-50px pattern-bg bg-gray">
    <div className="container">
      <div className="text-center">
        <h2 className="section-title">
          Disilab Q&amp;A communities are different. <br /> Here's how
        </h2>
      </div>
      <div className="row pt-50px">
        <div className="col-lg-4 responsive-column-half">
          <div className="card card-item hover-y text-center">
            <div className="card-body">
              <img src="assets/images/bubble.png" alt="bubble" />
              <h5 className="card-title pt-4 pb-2">Expert communities.</h5>
              <p className="card-text">
                This is just a simple text made for this unique and awesome
                template, you can easily edit it as you want.
              </p>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        {/* end col-lg-4 */}
        <div className="col-lg-4 responsive-column-half">
          <div className="card card-item hover-y text-center">
            <div className="card-body">
              <img src="assets/images/vote.png" alt="vote" />
              <h5 className="card-title pt-4 pb-2">
                The right answer. Right on top.
              </h5>
              <p className="card-text">
                This is just a simple text made for this unique and awesome
                template, you can easily edit it as you want.
              </p>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        {/* end col-lg-4 */}
        <div className="col-lg-4 responsive-column-half">
          <div className="card card-item hover-y text-center">
            <div className="card-body">
              <img src="assets/images/check.png" alt="check" />
              <h5 className="card-title pt-4 pb-2">
                Share knowledge. Earn trust.
              </h5>
              <p className="card-text">
                This is just a simple text made for this unique and awesome
                template, you can easily edit it as you want.
              </p>
            </div>
            {/* end card-body */}
          </div>
          {/* end card */}
        </div>
        {/* end col-lg-4 */}
      </div>
      {/* end row */}
    </div>
    {/* end container */}
  </section>
  {/* ================================
   END CTA AREA
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
