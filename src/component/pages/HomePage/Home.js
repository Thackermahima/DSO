import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import RelatedQuestion from './RelatedQuestion';
import TrendingQuestion from './TrandingQuestion';
import HomePageQuestion from './HomepageQuestion';
import JobsOnHomeapge from './JobsHomePage';
import TagsOnHomepage from './TagsHomepage';
import UsersOnHomepage from './UserOnHome';
import BadgesOnHomepage from './BadgesOnHome';

export default function Home() {

  const ethers = require("ethers");
  const [domain, setDomain] = useState("");

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
      console.log('where is metamask');
    }
  }

  async function getDomain(addr) {
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
          <Header />
          {/* end header-area */}

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


                      <HomePageQuestion />

                      <JobsOnHomeapge />

                      <TagsOnHomepage />

                      <UsersOnHomepage />


                      <BadgesOnHomepage />
                    </div>
                  </div>
                </div>
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
                    <div className="card card-item">
                      <div className="card-body">
                        <h3 className="fs-17 pb-3">Related Questions</h3>
                        <div className="divider">
                          <span />
                        </div>
                        <RelatedQuestion />
                      </div>
                    </div>
                    <div className="card card-item">
                      <div className="card-body">
                        <h3 className="fs-17 pb-3">Trending Questions</h3>
                        <div className="divider">
                          <span />
                        </div>
                        <TrendingQuestion />
                      </div>
                    </div>
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
                          </div>
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
                  </div>
                </div>
              </div>
            </div>
          </section>
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
                  </div>
                </div>
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
                  </div>
                </div>
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
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* -------------------------- Footer ---------------------- */}
          <Footer />
          <div
            id="back-to-top"
            data-toggle="tooltip"
            data-placement="top"
            title="Return to top"
          >
            <i className="la la-arrow-up" />
          </div>
        </>
      </div>
    </>
  )
}
