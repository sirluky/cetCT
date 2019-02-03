import React from "react";
import { Link } from "gatsby";
import Blog from "../components/blog";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Blog />
  </Layout>
);

export default IndexPage;
