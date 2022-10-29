import React, { useRef, useEffect } from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import Economy from "./Economy";
import CompanyRoadmap from "src/component/CompanyRoadmap";
import Tokenomics from "./Tokenomics";
import Token from "./Token";
import TokenDetails from "./TokenDetails";
import TokenMembers from "./TeamMembers";
import Advisers from "./Advisers";
import OurBlogs from "./OurBlogs";
import FAQ from "./FAQ";
import EducationMeta from "./EducationMeta";
import { useLocation } from "react-router-dom";
import TopBar from "src/layouts/HomeLayout/TopBar";
// import Roadmap from "./Roadmap";
function Home(props) {
  const location = useLocation();
  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  };

  const onButtonClick = (abc) => {
    window.scrollTo({
      top: refs[abc].current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Page title="HEXAVERSE">
      <Box>
        <TopBar buttonClick={onButtonClick} />
        <div id="home">
          <Banner />
        </div>
        <div id="economy">
          <Economy />
        </div>
        <div id="tokenomics">
          <Tokenomics />
        </div>
        <Token />
        <div id="tokendetails">
          <TokenDetails />
        </div>
        <div id="roadmap">
          <CompanyRoadmap />
        </div>
        <div id="team">
          <TokenMembers />
        </div>
        <div id="advisors">
          <Advisers />
        </div>
        <OurBlogs />
        <FAQ />
        <div id="about">
          <EducationMeta />
        </div>
        {/* <Roadmap /> */}
      </Box>
    </Page>
  );
}

export default Home;
