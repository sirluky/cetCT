import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.scss";
import { OutboundLink } from "gatsby-plugin-google-analytics";

// import Modernizr from "modernizr";

import BG from "../images/bg.png";
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
        # wordpressSiteMetadata {
        #   description
        #   name
        # }
      }
    `}
    render={data => (
      <>
        {/* {on("webp", function(result) {
          if (result) {
            console.log("Support WEBP");
          } else {
            console.log("The test failed! no WEBP :-(");
          }
        })} */}
        <div className="bg" />

        <div
          className="mainwrap"
          // style={{
          //   margin: `0 auto`
          //   // ,
          //   // padding: `0px 1.0875rem 1.45rem`,
          //   // paddingTop: 0
          // }}
        >
          {/* <Header
              siteTitle={data.wordpressSiteMetadata.name}
              siteSubtitle={data.wordpressSiteMetadata.description}
            /> */}
          <Header
            siteTitle={data.site.siteMetadata.title}
            siteSubtitle={data.site.siteMetadata.subtitle}
          />

          <div className="wrap">
            {children}
            <footer style={{ textAlign: "center" }}>
              © {new Date().getFullYear()}, Vytvořil{" "}
              <OutboundLink href="https://wizardly-ride-f58df7.netlify.com">
                Lukáš Kovář
              </OutboundLink>
              <img
                style={{ margin: 0, padding: 0, marginLeft: 10 }}
                src="https://api.netlify.com/api/v1/badges/8febcbba-e5a9-47f1-90ca-ad8b4fec7015/deploy-status"
              />
              {/* <br /> */}
            </footer>
          </div>
          {/* </div> */}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
