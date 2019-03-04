import React, { Component } from "react";
// import get from "lodash/get";
import { graphql } from "gatsby";
// import BackButton from "../components/backbutton";
import Seo from "../components/seo";
import Layout from "../components/layout";
import BlogFull from "./components/blogfull";
// import Img from "gatsby-image";
import { WOW } from "wowjs";

class PostTemplate extends Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    // console.log(this.props.pageContext);
    const post = this.props.data.wordpressPost;

    return (
      <Layout>
        <Seo
          title={post.title}
          keywords={[
            `OB CET`,
            `Orientační běh Česká Třebová`,
            `OB Loko Česká Třebová`
          ]}
        />
        <div className="wow fadeIn fast">
          <BlogFull post={post} />
        </div>
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
      featured_media {
        localFile {
          childImageSharp {
            fixed(width: 300, height: 200) {
              # ...GatsbyImageSharpResolutions_withWebp_tracedSVG
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
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
