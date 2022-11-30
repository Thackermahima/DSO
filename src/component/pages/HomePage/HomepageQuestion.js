import React from "react";

function HomePageQuestion(){
    return(
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
        </div>
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

          </div>
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
      </div>
    )
}

export default HomePageQuestion;