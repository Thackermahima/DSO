import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function Home() {

  const ethers = require("ethers");
  const [domain,setDomain]=useState("");

  async function requestAccount() {
    if (window.ethereum) {
      console.log('detected');
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        
        getDomain(accounts[0]);
      } catch (error) {
        console.log("there is an error");
      }
    } else {
      console.log('');
    }
  }

async function getDomain (addr) {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://goerli.infura.io/v3/dc074125a5a84daca1f4f33b0daf6c4f"
    );
console.log('getting domain...');
   
    const name = await provider.lookupAddress(addr)
    // const balance = await provider.getBalance("bang.eth");
    setDomain(name);
    console.log(name, 'name')
  };


  return (
    <>
    <div>

    <>

  <header className="header-area bg-white">
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
               
                </li>
                <li>
                  <a href="#">
                    blog <i className="la la-angle-down fs-11" />
                  </a>
                
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
              <a  onClick={requestAccount} 
                href="#"
                className="btn theme-btn theme-btn-outline mr-2"
                data-toggle="modal"
                data-target="#loginModal"
              >
                <i className="la la-sign-in mr-1" /> {domain ? domain : 'login with ENS'}
              </a>
              {/* <a
                href="#"
                className="btn theme-btn"
                data-toggle="modal"
                data-target="#signUpModal"
              >
                <i className="la la-user mr-1" /> Sign up
              </a> */}
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
  <section className="hero-area pt-80px pb-80px hero-bg-1">
    <div className="overlay" />
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
            <h2 className="section-title pb-3 text-white">
              Share &amp; grow knowledge with us!
            </h2>
            <p className="section-desc text-white">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there
              <br /> isn't anything embarrassing hidden in the middle of text.
            </p>
            
            <div className="hero-btn-box py-4">
              <a
                href="ask-question.html"
                className="btn theme-btn theme-btn-white"
              >
                Ask a Question <i className="la la-arrow-right icon ml-1" />
              </a>
            </div>
          </div>
          {/* end hero-content */}
        </div>
        {/* end col-lg-9 */}
        <div className="col-lg-3">
          <div className="hero-list hero-list-bg">
            <div className="d-flex align-items-center pb-30px">
              <img
                src="../../../assets/images/anonymousHeroAnswers.svg"
                alt="question icon"
                className="mr-3"
              />
              <p className="fs-15 text-white lh-20">
                Anybody can ask a question
              </p>
            </div>
            <div className="d-flex align-items-center pb-30px">
              <img
                src="../../../assets/images/anonymousHeroQuestions.svg"
                alt="question answer icon"
                className="mr-3"
              />
              <p className="fs-15 text-white lh-20">Anybody can answer</p>
            </div>
            <div className="d-flex align-items-center">
              <img
                src="../../../assets/images/anonymousHeroUpvote.svg"
                alt="vote icon"
                className="mr-3"
              />
              <p className="fs-15 text-white lh-20">
                The best answers are voted up and rise to the top
              </p>
            </div>
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
  <section className="question-area pt-80px pb-40px">
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="sidebar pb-45px position-sticky top-0 mt-2">
            <ul className="generic-list-item generic-list-item-highlight fs-15">
              <li className="lh-26 active">
                <a href="home-2.html">
                  {/* <i className="la la-home mr-1 text-black" />  */}
                  <FontAwesomeIcon className='la la-home mr-1 text-black' icon={faHouse} />
                  Home
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-flask mr-1 text-black" /> Science
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-pencil mr-1 text-black" /> Math
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-globe mr-1 text-black" /> History
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-book-open mr-1 text-black" /> Literature
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-laptop mr-1 text-black" /> Technology
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-dumbbell mr-1 text-black" /> Health
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-gavel mr-1 text-black" /> Law
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-briefcase mr-1 text-black" /> Business
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-file-text mr-1 text-black" /> All Topics
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-puzzle-piece mr-1 text-black" /> Random
                </a>
              </li>
              <li className="lh-26">
                <a href="category.html">
                  <i className="la la-check mr-1 text-black" /> Unanswered
                </a>
              </li>
            </ul>
          </div>
          {/* end sidebar */}
        </div>
        {/* end col-lg-2 */}
        <div className="col-lg-7">
          <div className="question-tabs mb-50px">
            <ul
              className="nav nav-tabs generic-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <div className="anim-bar" />
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="questions-tab"
                  data-toggle="tab"
                  href="#questions"
                  role="tab"
                  aria-controls="questions"
                  aria-selected="true"
                >
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="jobs-tab"
                  data-toggle="tab"
                  href="#jobs"
                  role="tab"
                  aria-controls="jobs"
                  aria-selected="false"
                >
                  Jobs
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="tags-tab"
                  data-toggle="tab"
                  href="#tags"
                  role="tab"
                  aria-controls="tags"
                  aria-selected="false"
                >
                  Tags
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="users-tab"
                  data-toggle="tab"
                  href="#users"
                  role="tab"
                  aria-controls="users"
                  aria-selected="false"
                >
                  Users
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="badges-tab"
                  data-toggle="tab"
                  href="#badges"
                  role="tab"
                  aria-controls="badges"
                  aria-selected="false"
                >
                  Badges
                </a>
              </li>
            </ul>
            <div className="tab-content pt-40px" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="questions"
                role="tabpanel"
                aria-labelledby="questions-tab"
              >
                <div className="filters d-flex align-items-center justify-content-between pb-4">
                  <h3 className="fs-17 fw-medium">All Questions</h3>
                  <div className="filter-option-box w-20">
                    <select className="select-container">
                      <option value="newest" selected="selected">
                        Newest{" "}
                      </option>
                      <option value="featured">Bountied (390)</option>
                      <option value="frequent">Frequent </option>
                      <option value="votes">Votes </option>
                      <option value="active">Active </option>
                      <option value="unanswered">Unanswered </option>
                      <option value="Votes">Votes </option>
                    </select>
                  </div>
                  {/* end filter-option-box */}
                </div>
                {/* end filters */}
                <div className="question-main-bar">
                  <div className="questions-snippet">
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">0</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">0</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            css resizeable div position different sizes
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">1 hour ago</span>
                          <a href="user-profile.html" className="author">
                            edublog
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes answered-accepted">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            How can i change the order of nodes in a list
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">1 min ago</span>
                          <a href="user-profile.html" className="author">
                            Epsi95
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            About Create a User Defined Funtion that return a
                            value
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">3 mins ago</span>
                          <a href="user-profile.html" className="author">
                            mstdmstd
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            How to switch to postman mode to debug requests
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">41 secs ago</span>
                          <a href="user-profile.html" className="author">
                            Pratik Singh
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            What is the name of this figure?
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">55 mins ago</span>
                          <a href="user-profile.html" className="author">
                            javabeginner
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Using web3 to call precompile contract
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">1 day ago</span>
                          <a href="user-profile.html" className="author">
                            Meow Meow
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes answered-accepted">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            ViewErrorBag Empty - Validation is not passing
                            errors
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">2 days ago</span>
                          <a href="user-profile.html" className="author">
                            DumBot
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            python: how to change python-config into my current
                            python version
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">4 days ago</span>
                          <a href="user-profile.html" className="author">
                            hgwd
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            How to calculate running average on tuples being
                            streamed in SQL
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">Dec 2 '19 at 17:23 </span>
                          <a href="user-profile.html" className="author">
                            Braiam
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes answered-accepted">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">-3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Identity Server 4 with .net Core 3.1 -- Identity
                            Server returning token as null
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">Jan 2 '20 at 7:23</span>
                          <a href="user-profile.html" className="author">
                            Ajay Patidar
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Using web3 to call precompile contract
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">1 day ago</span>
                          <a href="#" className="author">
                            Meow Meow
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes answered-accepted">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            ViewErrorBag Empty - Validation is not passing
                            errors
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">2 days ago</span>
                          <a href="#" className="author">
                            DumBot
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            python: how to change python-config into my current
                            python version
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">4 days ago</span>
                          <a href="#" className="author">
                            hgwd
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            How to calculate running average on tuples being
                            streamed in SQL
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">Dec 2 '19 at 17:23 </span>
                          <a href="#" className="author">
                            Braiam
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="votes answered-accepted">
                        <div
                          className="vote-block d-flex align-items-center justify-content-between"
                          title="Votes"
                        >
                          <span className="vote-counts">-3</span>
                          <span className="vote-icon" />
                        </div>
                        <div
                          className="answer-block d-flex align-items-center justify-content-between"
                          title="Answers"
                        >
                          <span className="vote-counts">1</span>
                          <span className="answer-icon" />
                        </div>
                      </div>
                      <div className="media-body">
                        <h5>
                          <a href="question-details.html">
                            Identity Server 4 with .net Core 3.1 -- Identity
                            Server returning token as null
                          </a>
                        </h5>
                        <small className="meta">
                          <span className="pr-1">Jan 2 '20 at 7:23</span>
                          <a href="#" className="author">
                            Ajay Patidar
                          </a>
                        </small>
                        <div className="tags">
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            bootstrap-4
                          </a>
                          <a href="#" className="tag-link">
                            grid
                          </a>
                          <a href="#" className="tag-link">
                            resize
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                  </div>
                  {/* end questions-snippet */}
                  <div className="pager d-flex flex-wrap align-items-center justify-content-between pt-30px">
                    <div>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination generic-pagination pr-1">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">
                                <i className="la la-arrow-left" />
                              </span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                <i className="la la-arrow-right" />
                              </span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p className="fs-13 pt-3">
                        Showing 1-15 results of 50,577 questions
                      </p>
                    </div>
                    <div className="filter-option-box w-20">
                      <select className="select-container">
                        <option value={10}>10 per page</option>
                        <option selected="" value={15}>
                          15 per page
                        </option>
                        <option value={20}>20 per page</option>
                        <option value={30}>30 per page</option>
                        <option value={40}>40 per page</option>
                        <option value={50}>50 per page</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end question-main-bar */}
              </div>
              {/* end tab-pane */}
              <div
                className="tab-pane fade"
                id="jobs"
                role="tabpanel"
                aria-labelledby="jobs-tab"
              >
                <p className="fs-15 pb-2">
                  <span className="fw-medium text-black">
                    Developers first.
                  </span>{" "}
                  You’ll never receive recruiter spam or see fake job listings
                  on our site.
                </p>
                <p className="fs-15 pb-4">
                  <span className="fw-medium text-black">Find a job by</span>{" "}
                  <a href="companies.html" className="btn-text">
                    companies
                    <i className="la la-arrow-right icon ml-1 fs-14" />
                  </a>
                </p>
                <div className="filters pb-4">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <form method="post" className="flex-grow-1 mr-3">
                      <div className="form-group mb-0">
                        <input
                          className="form-control form--control form-control-sm h-auto lh-34"
                          type="text"
                          name="search"
                          placeholder="Type here to find jobs..."
                        />
                        <button className="form-btn" type="button">
                          <i className="la la-search" />
                        </button>
                      </div>
                    </form>
                    <div className="filter-option-box">
                      <a
                        className="btn theme-btn theme-btn-outline theme-btn-outline-gray"
                        data-toggle="collapse"
                        href="#collapseSearchAdvanced"
                        role="button"
                        aria-expanded="false"
                        aria-controls="collapseSearchAdvanced"
                      >
                        <i className="la la-gear mr-1" /> Filters
                      </a>
                    </div>
                  </div>
                  {/* end d-flex */}
                  <div className="collapse pt-3" id="collapseSearchAdvanced">
                    <div className="card card-item mb-0">
                      <form
                        method="post"
                        className="search-advanced card-body pb-1"
                      >
                        <div className="search-advanced-item mb-10px row align-items-center">
                          <div className="col-lg-6">
                            <h4 className="fs-16">Filters</h4>
                          </div>
                          {/* end col-lg-6 */}
                          <div className="col-lg-6">
                            <div className="search-filter-btn-box text-right">
                              <button
                                type="submit"
                                className="btn theme-btn theme-btn-sm"
                              >
                                Search <i className="la la-search ml-1" />
                              </button>
                            </div>
                          </div>
                          {/* end col-lg-6 */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Location
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Distance
                              </label>
                              <div className="form-group">
                                <select className="select-container">
                                  <option value={5}>within 5 km</option>
                                  <option value={10}>within 10 km</option>
                                  <option selected="selected" value={20}>
                                    within 20 km
                                  </option>
                                  <option value={50}>within 50 km</option>
                                  <option value={100}>within 100 km</option>
                                </select>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                City
                              </label>
                              <div className="form-group">
                                <select className="select-container">
                                  <option selected="selected" value={1}>
                                    New york
                                  </option>
                                  <option value={2}>Austin</option>
                                  <option value={3}>Chicago</option>
                                  <option value={4}>Boston</option>
                                  <option value={5}>Denver</option>
                                  <option value={6}>Berlin</option>
                                  <option value={7}>Munich</option>
                                  <option value={8}>Hamburg</option>
                                  <option value={9}>Cologne</option>
                                  <option value={10}>Rome</option>
                                  <option value={11}>Turin</option>
                                  <option value={12}>Milan</option>
                                  <option value={13}>Florence</option>
                                  <option value={14}>Bologna</option>
                                  <option value={15}>Marylebone</option>
                                  <option value={16}>Southwark</option>
                                  <option value={16}>Westminster</option>
                                </select>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Tech
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Tech You Like
                              </label>
                              <div className="form-group">
                                <input
                                  className="form-control form--control form-control-sm"
                                  type="text"
                                  name="text"
                                  placeholder="e.g. javascript"
                                />
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Tech You Dislike
                              </label>
                              <div className="form-group">
                                <input
                                  className="form-control form--control form-control-sm"
                                  type="text"
                                  name="text"
                                  placeholder="e.g. java"
                                />
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Compensation
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Minimum Annual Salary
                              </label>
                              <div className="form-group">
                                <input
                                  className="form-control form--control form-control-sm"
                                  type="text"
                                  name="text"
                                  placeholder="e.g. 35"
                                />
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Currency
                              </label>
                              <div className="form-group">
                                <select className="select-container">
                                  <option selected="selected" value="BDT">
                                    BDT
                                  </option>
                                  <option value="USD">USD ($)</option>
                                  <option value="EUR">EUR (€)</option>
                                  <option value="GBP">GBP (£)</option>
                                  <option value="CAD">CAD (C$)</option>
                                  <option value="AUD">AUD (A$)</option>
                                  <option value="INR">INR (₹)</option>
                                  <option value="SEK">SEK (kr)</option>
                                  <option value="PLN">PLN (zł)</option>
                                  <option value="CHF">CHF</option>
                                  <option value="DKK">DKK</option>
                                  <option value="NZD">NZD</option>
                                </select>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="form-group col-lg-12">
                              <div className="custom-control custom-checkbox fs-13">
                                <input
                                  type="checkbox"
                                  className="custom-control-input"
                                  id="offersEquity"
                                />
                                <label
                                  className="custom-control-label custom--control-label"
                                  htmlFor="offersEquity"
                                >
                                  Offers Equity
                                </label>
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Perks
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Location options
                              </label>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="allowsRemote"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="allowsRemote"
                                  >
                                    Allows remote
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="offersRelocation"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="offersRelocation"
                                  >
                                    Offers relocation
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="offersVisaSponsorship"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="offersVisaSponsorship"
                                  >
                                    Offers visa sponsorship
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Perks
                              </label>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="educationAndTuitionBenefits"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="educationAndTuitionBenefits"
                                  >
                                    Education and tuition benefits
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="vacationDays10Plus"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="vacationDays10Plus"
                                  >
                                    10+ vacation days
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="gymAndFitnessPerks"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="gymAndFitnessPerks"
                                  >
                                    Gym and fitness perks
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Background
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Experience Level Min
                              </label>
                              <div className="form-group">
                                <select className="select-container">
                                  <option selected="selected" value="">
                                    Select min. experience
                                  </option>
                                  <option value="Student">Student</option>
                                  <option value="Junior">Junior</option>
                                  <option value="MidLevel">Mid-Level</option>
                                  <option value="Senior">Senior</option>
                                  <option value="Lead">Lead</option>
                                  <option value="Manager">Manager</option>
                                </select>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Experience Level Max
                              </label>
                              <div className="form-group">
                                <select className="select-container">
                                  <option selected="selected" value="">
                                    Select max. experience
                                  </option>
                                  <option value="Student">Student</option>
                                  <option value="Junior">Junior</option>
                                  <option value="MidLevel">Mid-Level</option>
                                  <option value="Senior">Senior</option>
                                  <option value="Lead">Lead</option>
                                  <option value="Manager">Manager</option>
                                </select>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Role
                              </label>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="backendDeveloper"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="backendDeveloper"
                                  >
                                    Backend Developer
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="dataScientist"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="dataScientist"
                                  >
                                    Data Scientist
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="databaseAdministrator"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="databaseAdministrator"
                                  >
                                    Database Administrator
                                  </label>
                                </div>
                                <div className="collapse" id="collapseMore">
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Designer"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Designer"
                                    >
                                      Designer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="DesktopDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="DesktopDeveloper"
                                    >
                                      Desktop Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="DevOps"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="DevOps"
                                    >
                                      DevOps
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="EmbeddedDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="EmbeddedDeveloper"
                                    >
                                      Embedded Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="FrontendDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="FrontendDeveloper"
                                    >
                                      Frontend Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="FullStackDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="FullStackDeveloper"
                                    >
                                      Full Stack Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="GraphicsGameDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="GraphicsGameDeveloper"
                                    >
                                      Graphics/Game Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="MobileDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="MobileDeveloper"
                                    >
                                      Mobile Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="ProductManager"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="ProductManager"
                                    >
                                      Product Manager
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="QATestDeveloper"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="QATestDeveloper"
                                    >
                                      QA/Test Developer
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="SystemAdministrator"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="SystemAdministrator"
                                    >
                                      {" "}
                                      System Administrator
                                    </label>
                                  </div>
                                </div>
                                {/* end collapse */}
                                <a
                                  className="collapse-btn fs-13"
                                  data-toggle="collapse"
                                  href="#collapseMore"
                                  role="button"
                                  aria-expanded="false"
                                  aria-controls="collapseMore"
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
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Job Type
                              </label>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="FullTime"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="FullTime"
                                  >
                                    Full-time
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="PartTime"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="PartTime"
                                  >
                                    Part-time
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Contract"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="Contract"
                                  >
                                    Contract
                                  </label>
                                </div>
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="Internship"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="Internship"
                                  >
                                    Internship
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item mb-10px">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            Companies
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Companies to Include
                              </label>
                              <div className="form-group">
                                <input
                                  className="input-tags"
                                  type="text"
                                  name="text"
                                  placeholder="Add up to 5 (e.g. Initrode)"
                                />
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Companies to Exclude
                              </label>
                              <div className="form-group">
                                <input
                                  className="input-tags"
                                  type="text"
                                  name="text"
                                  placeholder="Add up to 5 (e.g. Initech)"
                                />
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-12">
                              <label className="fs-13 text-black lh-20">
                                Industries
                              </label>
                              <div className="form-group row">
                                <div className="col-lg-4">
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Accounting"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Accounting"
                                    >
                                      Accounting
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Advertising"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Advertising"
                                    >
                                      Advertising
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Aerospace"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Aerospace"
                                    >
                                      Aerospace
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Agriculture"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Agriculture"
                                    >
                                      Agriculture
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Architecture"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Architecture"
                                    >
                                      Architecture
                                    </label>
                                  </div>
                                </div>
                                {/* end col-lg-4 */}
                                <div className="col-lg-4">
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Arts"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Arts"
                                    >
                                      Arts
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Automotive"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Automotive"
                                    >
                                      Automotive
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="CustomerService"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="CustomerService"
                                    >
                                      Customer Service
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Data&Analytics"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Data&Analytics"
                                    >
                                      Data &amp; Analytics
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Finance"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Finance"
                                    >
                                      Finance
                                    </label>
                                  </div>
                                </div>
                                {/* end col-lg-4 */}
                                <div className="col-lg-4">
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Food&Beverage"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Food&Beverage"
                                    >
                                      Food &amp; Beverage
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Gaming"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Gaming"
                                    >
                                      Gaming
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Government"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Government"
                                    >
                                      Government
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Hardware"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Hardware"
                                    >
                                      Hardware
                                    </label>
                                  </div>
                                  <div className="custom-control custom-checkbox fs-13">
                                    <input
                                      type="checkbox"
                                      className="custom-control-input"
                                      id="Health&Fitness"
                                    />
                                    <label
                                      className="custom-control-label custom--control-label"
                                      htmlFor="Health&Fitness"
                                    >
                                      Health &amp; Fitness
                                    </label>
                                  </div>
                                </div>
                                {/* end col-lg-4 */}
                                <div className="col-lg-12">
                                  <div
                                    className="collapse"
                                    id="collapseMoreTwo"
                                  >
                                    <div className="row">
                                      <div className="col-lg-4">
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="HealthCare"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="HealthCare"
                                          >
                                            Health Care
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="HomeAndGarden"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="HomeAndGarden"
                                          >
                                            Home and Garden
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Hospitality"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Hospitality"
                                          >
                                            Hospitality
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="InformationTechnology"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="InformationTechnology"
                                          >
                                            Information Technology
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Insurance"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Insurance"
                                          >
                                            Insurance
                                          </label>
                                        </div>
                                      </div>
                                      {/* end col-lg-4 */}
                                      <div className="col-lg-4">
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="LanguageServices"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="LanguageServices"
                                          >
                                            Language Services
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Legal"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Legal"
                                          >
                                            Legal
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="LifeSciences"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="LifeSciences"
                                          >
                                            Life Sciences
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="LocationServices"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="LocationServices"
                                          >
                                            Location Services
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Logistics&Distribution"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Logistics&Distribution"
                                          >
                                            Logistics &amp; Distribution
                                          </label>
                                        </div>
                                      </div>
                                      {/* end col-lg-4 */}
                                      <div className="col-lg-4">
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Manufacturing"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Manufacturing"
                                          >
                                            Manufacturing
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Marketing"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Marketing"
                                          >
                                            Marketing
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Media"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Media"
                                          >
                                            Media
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Meteorology"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Meteorology"
                                          >
                                            Meteorology
                                          </label>
                                        </div>
                                        <div className="custom-control custom-checkbox fs-13">
                                          <input
                                            type="checkbox"
                                            className="custom-control-input"
                                            id="Mobile"
                                          />
                                          <label
                                            className="custom-control-label custom--control-label"
                                            htmlFor="Mobile"
                                          >
                                            Mobile
                                          </label>
                                        </div>
                                      </div>
                                      {/* end col-lg-4 */}
                                    </div>
                                    {/* end row */}
                                  </div>
                                  {/* end collapse */}
                                  <a
                                    className="collapse-btn fs-13"
                                    data-toggle="collapse"
                                    href="#collapseMoreTwo"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseMoreTwo"
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
                                {/* end col-lg-12 */}
                              </div>
                            </div>
                            {/* end col-lg-12 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                        <div className="search-advanced-item">
                          <h4 className="fs-14 pb-2 text-gray text-uppercase">
                            More
                          </h4>
                          <div className="divider">
                            <span />
                          </div>
                          <div className="row pt-3">
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Applications
                              </label>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="BeOneOfTheFirstApplicants"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="BeOneOfTheFirstApplicants"
                                  >
                                    Be one of the first applicants
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                            <div className="input-box col-lg-6">
                              <label className="fs-13 text-black lh-20">
                                Responses
                              </label>
                              <div className="form-group">
                                <div className="custom-control custom-checkbox fs-13">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="HighResponseRate"
                                  />
                                  <label
                                    className="custom-control-label custom--control-label"
                                    htmlFor="HighResponseRate"
                                  >
                                    High response rate
                                  </label>
                                </div>
                              </div>
                            </div>
                            {/* end col-lg-6 */}
                          </div>
                          {/* end row */}
                        </div>
                        {/* end search-advanced-item */}
                      </form>
                    </div>
                    {/* end card */}
                  </div>
                  {/* end collapse */}
                  <div className="d-flex flex-wrap align-items-center justify-content-between pt-4">
                    <h3 className="fs-17 fw-medium">572 results</h3>
                    <div className="filter-option-box w-20">
                      <select className="select-container">
                        <option value="matches" selected="selected">
                          Matches{" "}
                        </option>
                        <option value="newest">Newest</option>
                        <option value="salary">Salary</option>
                      </select>
                    </div>
                  </div>
                  {/* end d-flex */}
                </div>
                {/* end filters */}
                <div className="jobs-main-bar">
                  <div className="jobs-snippet">
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            React Native Engineer at sustainable mobility
                            Start-up (m/f/x)
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>20 mins ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            £30k - 50k
                          </span>
                          <span className="pr-1 text-success">| Equity</span>
                          <span className="pr-1 text-danger">Visa sponsor</span>
                          <span className="text-info">Paid relocation</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Front-End Engineer (Remote)
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            €60k - 70k
                          </span>
                          <span className="pr-1 text-warning">Remote</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            html5
                          </a>
                          <a href="#" className="tag-link">
                            css
                          </a>
                          <a href="#" className="tag-link">
                            angular
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Senior Java Web Developer
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>5d ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-danger">Visa sponsor</span>
                          <span className="pl-1 text-info">
                            Paid relocation
                          </span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Software Engineer, Full Stack
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>3w ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-danger">Visa sponsor</span>
                          <span className="text-info">Paid relocation</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Senior Full-Stack (PHP, Node, React) Engineer
                            (Remote)
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-warning">Remote</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Join G2i as a 100% Remote React Engineer (Native or
                            Web) | Fully Remote Position
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-warning">Remote</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            React Native Developer
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-danger">
                            {" "}
                            Visa sponsor
                          </span>
                          <span className="text-info">Paid relocation</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Software Engineer - Fullstack
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-danger">Visa sponsor</span>
                          <span className="text-info">Paid relocation</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            PHP &amp; MySQL &amp; HTML/CSS &amp; JS Developers
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-danger">Visa sponsor</span>
                          <span className="text-info">Paid relocation</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                    <div className="media media-card media--card align-items-center">
                      <div className="media-body border-left-0">
                        <h5 className="pb-1">
                          <a href="career-details.html">
                            Web Developer (m/w/d) Magento/Shopware - REMOTE
                          </a>
                        </h5>
                        <small className="meta d-block lh-20 pb-1">
                          <a href="company-details.html" className="author">
                            Fintech Firm
                          </a>
                          <span className="px-1">-</span>
                          <span>Amsterdam, Netherlands</span>
                          <span className="px-1">-</span>
                          <span>1 hour ago</span>
                        </small>
                        <small className="meta d-block lh-20">
                          <span className="pr-1 text-success fw-medium">
                            $25k - 65k
                          </span>
                          <span className="pr-1 text-warning">Remote</span>
                        </small>
                        <div className="tags pt-2">
                          <a href="#" className="tag-link">
                            javascript
                          </a>
                          <a href="#" className="tag-link">
                            react-native
                          </a>
                          <a href="#" className="tag-link">
                            typescript
                          </a>
                          <a href="#" className="tag-link">
                            node.js
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* end media */}
                  </div>
                  {/* end jobs-snippet */}
                  <div className="pager d-flex flex-wrap align-items-center justify-content-between pt-30px pb-20px">
                    <div>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination generic-pagination pr-1">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">
                                <i className="la la-arrow-left" />
                              </span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                <i className="la la-arrow-right" />
                              </span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p className="fs-13 pt-3">
                        Showing 1-10 results of 1,577 jobs
                      </p>
                    </div>
                    <div className="filter-option-box w-20">
                      <select className="select-container">
                        <option selected="" value={10}>
                          10 per page
                        </option>
                        <option value={20}>20 per page</option>
                        <option value={30}>30 per page</option>
                        <option value={40}>40 per page</option>
                        <option value={50}>50 per page</option>
                      </select>
                    </div>
                  </div>
                  <div className="related-links pb-4">
                    <div className="related-links-item fs-13 lh-18 mb-1">
                      <span className="text-black fw-medium pr-1">
                        Popular Searches:
                      </span>
                      <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-inline">
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            javascript developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            postgresql developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            node.js developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            c# developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            reactjs developer jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end related-links-item */}
                    <div className="related-links-item fs-13 lh-18 mb-1">
                      <span className="text-black fw-medium pr-1">
                        Experience Level:
                      </span>
                      <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-inline">
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Student developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Junior developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Senior developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Lead developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Manager developer jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end related-links-item */}
                    <div className="related-links-item fs-13 lh-18 mb-1">
                      <span className="text-black fw-medium pr-1">
                        Top Cities:
                      </span>
                      <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-inline">
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Developer jobs in Munich, Germany
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Developer jobs in Barcelona, Spain
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Developer jobs in New York, NY
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            Developer jobs in Hamburg, Germany
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end related-links-item */}
                    <div className="related-links-item fs-13 lh-18">
                      <span className="text-black fw-medium pr-1">
                        Top Technologies:
                      </span>
                      <ul className="generic-list-item generic-list-item-bullet generic-list-item--bullet d-inline">
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            sql developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            android developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            typescript developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            react-native developer jobs
                          </a>
                        </li>
                        <li className="lh-18 mb-1 d-inline-block">
                          <a href="#" className="hover-underline">
                            rust developer jobs
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* end related-links-item */}
                  </div>
                  {/* end related-links */}
                </div>
                {/* end jobs-main-bar */}
              </div>
              {/* end tab-pane */}
              <div
                className="tab-pane fade"
                id="tags"
                role="tabpanel"
                aria-labelledby="tags-tab"
              >
                <div className="filters pb-4">
                  <h3 className="fs-17 fw-medium pb-2">Tags</h3>
                  <p className="fs-15 lh-24 pb-4">
                    A tag is a keyword or label that categorizes your question
                    with other, similar questions. Using the right tags makes it
                    easier for others to find and answer your question.
                  </p>
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <form method="post" className="flex-grow-1 mr-3">
                      <div className="form-group mb-0">
                        <input
                          className="form-control form--control form-control-sm h-auto lh-34"
                          type="text"
                          name="search"
                          placeholder="Filter by tag name..."
                        />
                        <button className="form-btn" type="button">
                          <i className="la la-search" />
                        </button>
                      </div>
                    </form>
                    <div className="filter-option-box w-20">
                      <select className="select-container mt-2">
                        <option value="popular" selected="selected">
                          Popular
                        </option>
                        <option value="name">Name</option>
                        <option value="new">New</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end filters */}
                <div className="tags-main-bar">
                  <div className="tags-snippet">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                javascript
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              For questions regarding programming in ECMAScript
                              (JavaScript/JS) and its various
                              dialects/implementations (excluding ActionScript).
                              Please include all relevant tags on your question;
                              e.g., [node.js],…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                java
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a high-level programming language. Use this tag
                              when you're having problems using or understanding
                              the language itself. This tag is rarely used alone
                              and is most often used in conjunction with…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                python
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a multi-paradigm, dynamically typed, multipurpose
                              programming language. It is designed to be quick
                              to learn, understand, and use, and enforce a clean
                              and uniform syntax. Please note that Pyt…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                c#
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a high level, statically typed, multi-paradigm
                              programming language developed by Microsoft. C#
                              code usually targets Microsoft's .NET family of
                              tools and run-times, which…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                php
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a widely used, high-level, dynamic,
                              object-oriented, and interpreted scripting
                              language primarily designed for server-side web
                              development. Used for questions about the PHP
                              language.
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                android
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              Google's mobile operating system, used for
                              programming or developing digital devices
                              (Smartphones, Tablets, Automobiles, TVs, Wear,
                              Glass, IoT). For topics related to Android, use
                              Android-s…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                html
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              the markup language for creating web pages and
                              other information to be displayed in a web
                              browser. Questions regarding HTML should include a
                              minimal reproducible ex…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                jquery
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a JavaScript library, consider also adding the
                              JavaScript tag. jQuery is a popular cross-browser
                              JavaScript library that facilitates Document
                              Object Model (DOM) traversal, event handling…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                c++
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a general-purpose programming language. It was
                              originally designed as an extension to C and has a
                              similar syntax, but it is now a completely
                              different language. Use this tag for questions
                              about…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="card card-item">
                          <div className="card-body">
                            <div className="tags pb-1">
                              <a
                                href="#"
                                className="tag-link tag-link-md tag-link-blue"
                              >
                                css
                              </a>
                            </div>
                            <p className="card-text fs-14 truncate-4 lh-24 text-black-50">
                              a representation style sheet language used for
                              describing the look and formatting of HTML
                              (HyperText Markup Language), XML (Extensible
                              Markup Language) documents and SV…
                            </p>
                            <div className="d-flex tags-info fs-14 pt-3 border-top border-top-gray mt-3">
                              <p className="pr-1 lh-18">2177849 questions</p>
                              <p className="lh-18">
                                901 asked today, 5319 this week
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-6 */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end tags-snippet */}
                  <div className="pager d-flex align-items-center justify-content-between pt-10px pb-30px">
                    <div>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination generic-pagination pr-1">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">
                                <i className="la la-arrow-left" />
                              </span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                <i className="la la-arrow-right" />
                              </span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p className="fs-13 pt-3">
                        Showing 1-10 results of 50,577 tags
                      </p>
                    </div>
                    <div className="filter-option-box w-20">
                      <select className="select-container">
                        <option selected="" value={10}>
                          10 per page
                        </option>
                        <option value={20}>20 per page</option>
                        <option value={30}>30 per page</option>
                        <option value={40}>40 per page</option>
                        <option value={50}>50 per page</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end tags-main-bar */}
              </div>
              {/* end tab-pane */}
              <div
                className="tab-pane fade"
                id="users"
                role="tabpanel"
                aria-labelledby="users-tab"
              >
                <div className="filters pb-4">
                  <h3 className="fs-17 fw-medium pb-4">Users</h3>
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <form method="post" className="flex-grow-1 mr-3">
                      <div className="form-group mb-0">
                        <input
                          className="form-control form--control form-control-sm h-auto lh-34"
                          type="text"
                          name="search"
                          placeholder="Filter by user..."
                        />
                        <button className="form-btn" type="button">
                          <i className="la la-search" />
                        </button>
                      </div>
                    </form>
                    <div className="filter-option-box w-20 mt-2">
                      <select className="select-container">
                        <option value="reputation" selected="selected">
                          Reputation
                        </option>
                        <option value="new-users">New users</option>
                        <option value="voters">Voters</option>
                        <option value="editors">Editors</option>
                        <option value="moderators">Moderators</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end filters */}
                <div className="users-main-bar">
                  <div className="users-snippet">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Sector labs</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Barmar</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">CertainPerformance</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">mck</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">LoicTheAztec</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Günter Zöchbauer</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Suragch</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Martijn Pieters</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Frank van Puffelen</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Igor Goyda</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Sector labs</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Barmar</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">CertainPerformance</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">mck</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">LoicTheAztec</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Günter Zöchbauer</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Suragch</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo2.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Martijn Pieters</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo3.jpg"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Frank van Puffelen</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                      <div className="col-lg-6">
                        <div className="media media-card p-3">
                          <a href="#" className="media-img d-inline-block">
                            <img
                              src="images/company-logo4.png"
                              alt="company logo"
                            />
                          </a>
                          <div className="media-body">
                            <h5 className="fs-16 fw-medium">
                              <a href="user-profile.html">Igor Goyda</a>
                            </h5>
                            <small className="meta d-block lh-24 pb-1">
                              <span>New York, United States</span>
                            </small>
                            <p className="fw-medium fs-15 text-black-50 lh-18">
                              1,200
                            </p>
                          </div>
                          {/* end media-body */}
                        </div>
                        {/* end media */}
                      </div>
                      {/* end col-lg-6 */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end users-snippet */}
                  <div className="pager d-flex align-items-center justify-content-between pt-10px pb-30px">
                    <div>
                      <nav aria-label="Page navigation example">
                        <ul className="pagination generic-pagination pr-1">
                          <li className="page-item">
                            <a
                              className="page-link"
                              href="#"
                              aria-label="Previous"
                            >
                              <span aria-hidden="true">
                                <i className="la la-arrow-left" />
                              </span>
                              <span className="sr-only">Previous</span>
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              4
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">
                                <i className="la la-arrow-right" />
                              </span>
                              <span className="sr-only">Next</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                      <p className="fs-13 pt-3">
                        Showing 1-20 results of 50,577 users
                      </p>
                    </div>
                    <div className="filter-option-box w-20">
                      <select className="select-container">
                        <option value={10}>10 per page</option>
                        <option selected="" value={20}>
                          20 per page
                        </option>
                        <option value={30}>30 per page</option>
                        <option value={40}>40 per page</option>
                        <option value={50}>50 per page</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* end users-main-bar */}
              </div>
              {/* end tab-pane */}
              <div
                className="tab-pane fade"
                id="badges"
                role="tabpanel"
                aria-labelledby="badges-tab"
              >
                <div className="filters pb-4">
                  <h3 className="fs-17 fw-medium pb-2">Badges</h3>
                  <p className="fs-15 lh-24 pb-4">
                    Besides gaining reputation with your questions and answers,
                    you receive badges for being especially helpful. Badges
                    appears on your profile page, questions &amp; answers.
                  </p>
                  <div className="filter-option-box w-20">
                    <select className="select-container">
                      <option value="all" selected="selected">
                        All
                      </option>
                      <option value="bronze">Bronze</option>
                      <option value="silver">Silver</option>
                      <option value="gold">Gold</option>
                    </select>
                  </div>
                </div>
                {/* end filters */}
                <div className="badges-main-bar">
                  <div className="badges-snippet">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Altruist
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                First bounty you manually award on another
                                person's question
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Analytical
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>43587</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Visited every section of the FAQ
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Announcer
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>227641</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Share a link to a post later visited by 25
                                unique IP addresses
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Archaeologist
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>2514</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Edit 100 posts that were inactive for 6 months
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Autobiographer
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>1367031</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Complete "About Me" section of user profile
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Benefactor
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>48793</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                First bounty you manually award on your own
                                question
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Beta
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Voted 10 times, added 3 posts score &gt; 0, and
                                visited the site on 3 separate days during the
                                private beta
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Booster
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Share a link to a post later visited by 300
                                unique IP addresses
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Census
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Completed the annual Disilab survey; your
                                responses are anonymous
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Citizen Patrol
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                First flagged post
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Civic Duty
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Vote 300 or more times
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Cleanup
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                First rollback
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Commentator
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Leave 10 comments
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-3" /> Constable
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>0</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Served as a pro-tem moderator for at least 1
                                year or through site graduation
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-3" /> Copy Editor
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Edit 500 posts (excluding own or deleted posts
                                and tag edits)
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Critic
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                First down vote
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Curious
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Ask a well-received question on 5 separate days,
                                and maintain a positive question record
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Deputy
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Raise 80 helpful flags
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Disciplined
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Delete own post with score of 3 or higher
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Documentation
                                Beta
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Contributed 3+ substantive pieces of
                                documentation during the private beta
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Documentation
                                Pioneer
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Contributed 3+ substantive pieces of
                                documentation in the first month of
                                documentation
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball" /> Editor
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                First edit
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Favorite
                                Question
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Question bookmarked by 25 users
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-4">
                        <div className="card card-item">
                          <div className="card-body p-3">
                            <div className="badge-item">
                              <a
                                href="#"
                                className="badge badge-md badge-dark d-inline-flex align-items-center"
                              >
                                <span className="ball bg-gray" /> Generalist
                              </a>
                              <span className="item-multiplier fs-13 fw-medium">
                                <span>×</span>
                                <span>32924</span>
                              </span>
                              <p className="fs-13 lh-18 pt-2 text-black-50">
                                Provide non-wiki answers of 15 total score in 20
                                of top 40 tags
                              </p>
                            </div>
                          </div>
                          {/* end card-body */}
                        </div>
                        {/* end card */}
                      </div>
                      {/* end col-lg-4 */}
                      <div className="col-lg-12 pb-40px">
                        <div className="collapse" id="collapseMoreBadges">
                          <div className="row">
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" /> Good
                                      Answer
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Answer score of 25 or more
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" /> Good
                                      Question
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Question score of 25 or more
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" /> Guru
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Accepted answer and score of 40 or more
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Scholar
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Ask a question and accept an answer
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Self-Learner
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Answer your own question with score of 3
                                      or more
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" />{" "}
                                      Sportsmanship
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Up vote 100 answers on questions where an
                                      answer of yours has a positive score
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-3" /> Stellar
                                      Question
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Question bookmarked by 100 users
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Student
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      First question with score of 1 or more
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Supporter
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      First up vote
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Tag Editor
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      First tag wiki edit
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" />{" "}
                                      Taxonomist
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Create a tag used by 50 questions
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Teacher
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Answer a question with score of 1 or more
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" />{" "}
                                      Tenacious
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Zero score accepted answers: more than 5
                                      and 20% of total
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Tumbleweed
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Asked a question with zero score, no
                                      answers, no comments, and low views for a
                                      week
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball" /> Vox Populi
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Use the maximum 40 votes in a day
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                            <div className="col-lg-4">
                              <div className="card card-item">
                                <div className="card-body p-3">
                                  <div className="badge-item">
                                    <a
                                      href="#"
                                      className="badge badge-md badge-dark d-inline-flex align-items-center"
                                    >
                                      <span className="ball bg-gray" /> Yearling
                                    </a>
                                    <span className="item-multiplier fs-13 fw-medium">
                                      <span>×</span>
                                      <span>32924</span>
                                    </span>
                                    <p className="fs-13 lh-18 pt-2 text-black-50">
                                      Active member for a year, earning at least
                                      200 reputation
                                    </p>
                                  </div>
                                </div>
                                {/* end card-body */}
                              </div>
                              {/* end card */}
                            </div>
                            {/* end col-lg-4 */}
                          </div>
                        </div>
                        <a
                          className="collapse-btn btn theme-btn theme-btn-sm text-white w-100"
                          data-toggle="collapse"
                          href="#collapseMoreBadges"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseMoreBadges"
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
                      {/* end col-lg-12 */}
                    </div>
                    {/* end row */}
                  </div>
                  {/* end badges-snippet */}
                </div>
                {/* end badges-main-bar */}
              </div>
              {/* end tab-pane */}
            </div>
            {/* end tab-content */}
          </div>
          {/* end question-tabs */}
        </div>
        {/* end col-lg-7 */}
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
                <h3 className="fs-17 pb-3">Related Questions</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="sidebar-questions pt-3">
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          Using web3 to call precompile contract
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
                          Is it true while finding Time Complexity of the
                          algorithm [closed]
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
                          image picker and store them into firebase with flutter
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
                <h3 className="fs-17 pb-3">Trending Questions</h3>
                <div className="divider">
                  <span />
                </div>
                <div className="sidebar-questions pt-3">
                  <div className="media media-card media--card media--card-2">
                    <div className="media-body">
                      <h5>
                        <a href="question-details.html">
                          How did chickenpox get its name?
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
                          Does flu vaccine protect against Coronavirus?
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
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="careers.html">Careers</a>
              </li>
              <li>
                <a href="advertising.html">Advertising</a>
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
                <a href="privacy-policy.html">Privacy Policy</a>
              </li>
              <li>
                <a href="terms-and-conditions.html">Terms of Service</a>
              </li>
              <li>
                <a href="privacy-policy.html">Cookie Policy</a>
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
                <a href="faq.html">Knowledge Base</a>
              </li>
              <li>
                <a href="contact.html">Support</a>
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
  {/* end footer-area */}
  {/* ================================
    END FOOTER AREA
================================= */}
  {/* start back to top */}
  <div
    id="back-to-top"
    data-toggle="tooltip"
    data-placement="top"
    title="Return to top"
  >
    <i className="la la-arrow-up" />
  </div>
  {/* end back to top */}
  {/* Modal */}
  {/* <div
    className="modal fade modal-container login-form"
    id="loginModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="loginModalTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header align-items-center">
          <h5 className="modal-title" id="loginModalTitle">
            Good to see you again!
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="la la-times" />
          </button>
        </div>
        <div className="modal-body">
          <form method="post">
            <div className="form-group">
              <label className="fs-14 text-black fw-medium lh-18">Email</label>
              <input
                className="form-control form--control"
                type="email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <label className="fs-14 text-black fw-medium lh-18">
                Password
              </label>
              <div className="input-group mb-1">
                <input
                  className="form-control form--control password-field"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <div className="input-group-append">
                  <button
                    className="btn theme-btn-outline theme-btn-outline-gray toggle-password"
                    type="button"
                  >
                    <svg
                      className="eye-on"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 0 24 24"
                      width="22px"
                      fill="#7f8897"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                    </svg>
                    <svg
                      className="eye-off"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 0 24 24"
                      width="22px"
                      fill="#7f8897"
                    >
                      <path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                      />
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group d-flex align-items-center justify-content-between">
              <div className="custom-control custom-checkbox fs-14">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="rememberMe"
                />
                <label
                  className="custom-control-label custom--control-label"
                  htmlFor="rememberMe"
                >
                  Remember me!
                </label>
              </div>
              <a
                href="javascript:void(0)"
                className="lost-pass-btn fs-14 hover-underline"
              >
                Forgot Password?
              </a>
            </div>
            <div className="btn-box">
              <button type="submit" className="btn theme-btn w-100">
                Login to Account <i className="la la-arrow-right icon ml-1" />
              </button>
            </div>
            <p className="create-account-text text-right fs-14 pt-1">
              New to disilab?{" "}
              <a
                className="signup-btn text-color hover-underline"
                href="javascript:void(0)"
              >
                Create account
              </a>
            </p>
            <div className="icon-element my-4 mx-auto shadow-sm fs-25">Or</div>
            <div className="text-center">
              <p className="fs-15 pb-3">Login with your social network</p>
              <button className="btn theme-btn bg-8 mb-2 mr-2">
                <i className="la la-facebook mr-1" /> Facebook
              </button>
              <button className="btn theme-btn bg-9 mb-2 mr-2">
                <i className="la la-twitter mr-1" /> Twitter
              </button>
              <button className="btn theme-btn bg-10 mb-2 mr-2">
                <i className="la la-google mr-1" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> */}
  {/* Modal */}
  <div
    className="modal fade modal-container signup-form"
    id="signUpModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="signUpModalTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header align-items-center">
          <h5 className="modal-title" id="signUpModalTitle">
            Welcome! create your account
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="la la-times" />
          </button>
        </div>
        <div className="modal-body">
          <form method="post">
            <div className="form-group">
              <label className="fs-14 text-black fw-medium lh-18">Name</label>
              <input
                className="form-control form--control"
                type="text"
                name="text"
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label className="fs-14 text-black fw-medium lh-18">Email</label>
              <input
                className="form-control form--control"
                type="email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <label className="fs-14 text-black fw-medium lh-18">
                Password
              </label>
              <div className="input-group mb-1">
                <input
                  className="form-control form--control password-field"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                />
                <div className="input-group-append">
                  <button
                    className="btn theme-btn-outline theme-btn-outline-gray toggle-password"
                    type="button"
                  >
                    <svg
                      className="eye-on"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 0 24 24"
                      width="22px"
                      fill="#7f8897"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5C4.83 8.13 8.21 6 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5c1.38 0 2.5 1.12 2.5 2.5S13.38 14 12 14s-2.5-1.12-2.5-2.5S10.62 9 12 9m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" />
                    </svg>
                    <svg
                      className="eye-off"
                      xmlns="http://www.w3.org/2000/svg"
                      height="22px"
                      viewBox="0 0 24 24"
                      width="22px"
                      fill="#7f8897"
                    >
                      <path
                        d="M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"
                        fill="none"
                      />
                      <path d="M12 6c3.79 0 7.17 2.13 8.82 5.5-.59 1.22-1.42 2.27-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68C3.06 7.83 1.77 9.53 1 11.5 2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02-1.38 0-2.5-1.12-2.5-2.5 0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75c-.23.55-.36 1.15-.36 1.78 0 2.48 2.02 4.5 4.5 4.5.63 0 1.23-.13 1.77-.36l.98.98c-.88.24-1.8.38-2.75.38-3.79 0-7.17-2.13-8.82-5.5.7-1.43 1.72-2.61 2.93-3.53z" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="fs-14 lh-20">
                Your password must be at least 6 characters long and must
                contain letters, numbers and special characters. Cannot contain
                whitespace.
              </p>
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox fs-14">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="agreeCheckBox"
                />
                <label
                  className="custom-control-label custom--control-label"
                  htmlFor="agreeCheckBox"
                >
                  By signing up, you agree to our{" "}
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
              <button type="submit" className="btn theme-btn w-100">
                Register Account <i className="la la-arrow-right icon ml-1" />
              </button>
            </div>
            <p className="create-account-text text-right fs-14">
              Already on disilab?{" "}
              <a
                className="login-btn text-color hover-underline"
                href="javascript:void(0)"
              >
                Log in
              </a>
            </p>
            <div className="icon-element my-4 mx-auto shadow-sm fs-25">Or</div>
            <div className="text-center">
              <p className="fs-15 pb-3">
                Create account with your social network
              </p>
              <button className="btn theme-btn bg-8 mb-2 mr-2">
                <i className="la la-facebook mr-1" /> Facebook
              </button>
              <button className="btn theme-btn bg-9 mb-2 mr-2">
                <i className="la la-twitter mr-1" /> Twitter
              </button>
              <button className="btn theme-btn bg-10 mb-2 mr-2">
                <i className="la la-google mr-1" /> Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* Modal */}
  <div
    className="modal fade modal-container recover-form"
    id="recoverModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="recoverModalTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header align-items-center">
          <h5 className="modal-title" id="recoverModalTitle">
            Reset password
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="la la-times" />
          </button>
        </div>
        <div className="modal-body">
          <p className="fs-15 lh-20 pb-3">
            Enter your username or email to reset your password. You will
            receive an email with instructions on how to reset your password. If
            you are experiencing problems resetting your password{" "}
            <a href="contact.html" className="text-color hover-underline">
              contact us
            </a>{" "}
            or{" "}
            <a href="#" className="text-color hover-underline">
              send us an email
            </a>
          </p>
          <form method="post">
            <div className="form-group">
              <label className="fs-14 text-black fw-medium lh-18">Email</label>
              <input
                className="form-control form--control"
                type="text"
                name="text"
                placeholder="Email address"
              />
            </div>
            <div className="btn-box">
              <button type="submit" className="btn theme-btn w-100">
                Get New Password <i className="la la-arrow-right icon ml-1" />
              </button>
              <p className="create-account-text text-right fs-14">
                Not a member?{" "}
                <a
                  className="text-color signup-btn hover-underline"
                  href="javascript:void(0)"
                >
                  Create account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* template js files */}
</>



</div>
    </>
    )
}
