import React from "react";
import Images from "../assets/Images";
import About from "../components/About/About";
import Download from "../components/Download/Download";
import Faq from "../components/Faq/Faq";
import Features from "../components/Features/Features";
import FeaturesOverView from "../components/FeaturesOverView/FeaturesOverView";
import Header from "../components/Header/Header";
import Reviews from "../components/Reviews/Reviews";
import Screenshots from "../components/Screenshots/Screenshots";
import Head from "next/head";
var lastScrolled = 0;

function HomePage() {
  const navBar = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const navDrawer = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  React.useEffect(() => {
    if (navBar.current != null) {
      window.addEventListener("scroll", () => onScroll(navBar));
    }
  }, [navBar]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Head>
        <meta
          name="description"
          content="Kiosk Software to Lock down your Tablet & Android devices to specific apps. 
               Simplified Device Management with our Enterprise Kiosk Lock down Solution. 
               Single App Kiosk Mode. Lock Tablet to One or More Apps. 
               Smart Child Lock Features for Parental Control.
               Filter Web Content with KeyOS Web Blocker. 
               Block Incoming and Outgoing Calls with KeyOS Call Blocker."
        />
        <title>KeyOS - Kiosk Lockdown & Parental Control</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {getNavBar(navBar, navDrawer)}
      <Header />
      <FeaturesOverView />
      <Features />
      <Download />
      <Reviews />
      <Screenshots />
      <Faq />
      <About />
    </div>
  );
}

function scroll(page: any) {
  setTimeout(() => {
    document.querySelector(page)!!.scrollIntoView();
  }, 0);
}

function getNavBar(
  navBar: React.MutableRefObject<HTMLInputElement>,
  navDrawer: React.MutableRefObject<HTMLInputElement>
) {
  return (
    <nav ref={navBar} className="navBar">
      <div className="logo-container">
        <img src={Images.keyOS} />
      </div>
      <div className="color-container"></div>
      <div
        onClick={() => {
          navDrawer.current.classList.toggle("drawerOpen");
        }}
        ref={navDrawer}
        className="options"
      >
        <ul>
          <li
            onClick={() => {
              scroll(".featureOverview-selector");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              scroll(".features");
            }}
          >
            Features
          </li>
          <li
            onClick={() => {
              scroll(".reviews");
            }}
          >
            Reviews
          </li>

          <li
            onClick={() => {
              scroll(".screenshots-container");
            }}
          >
            Screenshots
          </li>
          <li
            onClick={() => {
              scroll(".faq");
            }}
          >
            Faq
          </li>
        </ul>
      </div>

      <div
        onClick={() => {
          console.log(navDrawer.current.classList);
          navDrawer.current.classList.add("drawerOpen");
        }}
        className="burgar-menu"
      >
        <img src={Images.burgarMenu} alt="" />
      </div>
    </nav>
  );
}

function onScroll(navBar: any): void {
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body).scrollTop;
  if (scrollTop < lastScrolled) {
    navBar.current.classList.add("open");
  } else {
    navBar.current.classList.remove("open");
  }

  if (scrollTop > 75) {
    navBar.current.classList.add("elevate");
  } else {
    navBar.current.classList.remove("elevate");
  }

  lastScrolled = scrollTop;
}

export default HomePage;
