import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.scss";
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
      }
    `}
    render={data => (
      <>
        {console.log(data)}

        <div className="bg">
          <div
            style={{
              margin: `0 auto`,
              // ,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0
            }}
          >
            <Header
              siteTitle={data.site.siteMetadata.title}
              siteSubtitle={data.site.siteMetadata.subtitle}
            />

            <div className="wrap">
              {children}
              <footer style={{ textAlign: "center" }}>
                © {new Date().getFullYear()}, Vytvořil{" "}
                <a href="https://wizardly-ride-f58df7.netlify.com">
                  Lukáš Kovář
                </a>
              </footer>
            </div>
          </div>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
