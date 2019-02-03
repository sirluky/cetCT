import React, { Component } from "react";
// import get from "lodash/get";
import { graphql } from "gatsby";
import Layout from "../components/layout";

class SiteTemplate extends Component {
  render() {
    const page = this.props.data.wordpressPage;
    const datum = new Date(page.date);
    return (
      <Layout>
        <div className="clanek">
          {/* <h2>{page.title}</h2> */}
          <h2 dangerouslySetInnerHTML={{ __html: page.title }} />

          <p dangerouslySetInnerHTML={{ __html: page.content }} />
          <small>
            Napsal: {page.author.name}{" "}
            {datum.getDate() +
              "." +
              datum.getMonth() +
              "." +
              datum.getFullYear()}
          </small>
        </div>
      </Layout>
    );
  }
}

export default SiteTemplate;

export const query = graphql`
  query($id: String!) {
    wordpressPage(id: { eq: $id }) {
      slug
      title
      content
      date
      author {
        name
      }
    }
  }
`;
