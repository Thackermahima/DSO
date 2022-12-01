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
import Cards from '../Cards';
import NumberAchievement from '../NumberAchievement';
import TrendingTags from '../TrendingTags';

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
                    <NumberAchievement/>
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
                    <TrendingTags/>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Cards/>

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
