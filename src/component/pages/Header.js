import React from "react";
import { useState } from 'react';
import { api, utils } from "@epnsproject/frontend-sdk-staging";
import { Button, Popover, Typography } from "@material-ui/core";
// import {NotificationsNoneIcon} from '@mui/icons-material';
import { storiesOf } from '@storybook/react'
import centered from '@storybook/addon-centered/react'
// import { ToggleBox } from './ToggleBox'
import {Menu} from '@mui/material';
import {MenuItem} from '@mui/material';
import WorldCoin from "./WorldCoinLogin";
import {LoginContext} from '../Context/LoginContext';
import { Link } from "react-router-dom";
export default function Header() {

  const ethers = require("ethers");
  const [domain, setDomain] = useState("Connect");
  const [notificationItems, setNotificationItems] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
 
const loginContext = React.useContext(LoginContext);
const { web3Handler,accountss } = loginContext;
  async function fetchNotifications(recipient) {
    console.log(recipient, 'reci');
    // define the variables required to make a request
    const walletAddress = recipient;
    const pageNumber = 1;
    const itemsPerPage = 20;

    // fetch the notifications
    const { count, results } = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
    console.log('fetchedNotifications-----', { results });


    // parse all the fetched notifications
    const parsedResponse = utils.parseApiResponse(results);
    console.log('parsedResponse----', parsedResponse);
    setNotificationItems(parsedResponse);
    // return parsedResponse;
  }



  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  async function requestAccount() {
    if (window.ethereum) {
      console.log('detected');
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        fetchNotifications(accounts[0]);
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
                    <ul className="dropdown-menu-item">
                      <li>
                      <Link to="/nft-upload">
                      Create NFT
                      </Link>
                      </li>
                      <li>
                      <Link to="/readership-nft">
                        NFT Club
                        </Link>
                      </li>
                      <li>
                      <Link to="/pushchat">
                        Chat
                        </Link>
                      </li>

                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      blog <i className="la la-angle-down fs-11" />
                    </a>

                  </li>
                </ul>
              </nav>
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
              <nav className="menu-bar mr-auto">
                <ul>
                  <li>
                    <div className="nav-right-button">
                      <a 
                        style={{ textDecoration: "none", background: "aliceblue" }}
                        href="#"
                        className="btn theme-btn theme-btn-outline mr-2"
                        data-toggle="modal"
                        data-target="#loginModal"
                      >
                        <i style={{ color: 'blue' }} className="la la-sign-in mr-1" /> {domain}
                      </a>
                    </div>
                    <ul style={{width:'267px'}} className="dropdown-menu-item">
                      <li onClick={requestAccount} >
                        <a style={{fontWeight:"600",marginBottom:'12px',wordSpacing:'3px',letterSpacing:'1px',fontSize:'18px'}}>Login with ENS</a>
                      </li>
                      <li>
                        <WorldCoin/>
                      </li>
                      {
                        accountss ? (
                        <Button variant="outline-light">
                                    {accountss.slice(0, 5) + '...' + accountss.slice(38, 42)}
                                </Button>

                      ) : (
                      <li onClick={() => web3Handler()}>
                                        Login with Metamask
                      </li>
                      )}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="off-canvas-menu custom-scrollbar-styled">
        <div
          className="off-canvas-menu-close icon-element icon-element-sm shadow-sm"
          data-toggle="tooltip"
          data-placement="left"
          title="Close menu"
        >
          <i className="la la-times" />
        </div>
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
        </div>
      </div>
      <div className="body-overlay" />
    </header>


  )
}

