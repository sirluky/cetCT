import React, { Component } from "react";
// import get from "lodash/get";
import { graphql } from "gatsby";
// import BackButton from "../components/backbutton";
import Layout from "../components/layout";
import BlogFull from "./components/blogfull";
// export default class clanek extends Component {
//   render() {
//     const currentPage = this.props.data.wordpressPost;
//     console.log(currentPage);
//     return (
//       <div>
//         <h1>{currentPage.title}</h1>
//       </div>
//     );
//   }
// }

class PostTemplate extends Component {
  render() {
    // console.log(this.props.pageContext);
    const post = this.props.data.wordpressPost;

    return (
      <Layout>
        <BlogFull post={post} />
      </Layout>
    );
  }
}

export default PostTemplate;
// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
export const query = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      date
      author {
        name
      }
      # acf {
      #   poradi
      #   nahledovka {
      #     source_url
      #   }
      # }
    }
  }
`;
// import React from "react";
// import { graphql } from "gatsby";
// import Layout from "../components/layout";

// export default ({ data }) => (
//   <Layout>
//     <h1>About {data.site.siteMetadata.title}</h1>
//     <p>
//       We're the only site running on your computer dedicated to showing the best
