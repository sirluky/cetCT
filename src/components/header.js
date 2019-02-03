import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import NavBar from "../components/navbar";
import "./header.scss";
const Header = ({ siteTitle, siteSubtitle }) => (
  <header style={{}}>
    {/* {console.log(siteTitle, siteSubtitle)} */}
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960
        // padding: `1.45rem 1.0875rem`
      }}
    >
      <div className="titulek">
        <h1 style={{ margin: 0, display: "block" }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <h2>{siteSubtitle}</h2>
      </div>
      <div className="navwrap">
        <NavBar />
      </div>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
