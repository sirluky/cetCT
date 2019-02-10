const path = require("path");
const slash = require("slash");
// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
// };
const buildPaging = require("./nodes/buildpaging");
const buildPages = require("./nodes/buildpages");

const fetchWordpressPosts = graphql =>
  graphql(
    `
      {
        allWordpressPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              slug
              title
              content
              id
              date
              author {
                name
              }
              excerpt
              acf {
                plnezob
              }
              featured_media {
                localFile {
                  childImageSharp {
                    resize(width: 300, height: 200) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  );

const fetchPages = graphql =>
  graphql(`
    {
      allWordpressPage {
        edges {
          node {
            title
            content
            slug
            id
            excerpt
          }
        }
      }
    }
  `);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/sablony/clanek.js");
    const blogpaged = path.resolve("./src/sablony/blogpaged.js");
    resolve(
      fetchWordpressPosts(graphql)
        .then(result => {
          if (result.errors) {
            console.log(result.errors);
            reject(result.errors);
          }

          const posts = result.data.allWordpressPost.edges;
          buildPaging(createPage, posts, blogPost, blogpaged);
        })
        .then(() => {
          return fetchPages(graphql);
        })
        .then(result => {
          buildPages(createPage, result);
        })
    );
  });
};
