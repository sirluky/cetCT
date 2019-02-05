/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
// const { Promise } = "bluebird";
const path = require("path");
const slash = require("slash");
// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;
// };
const fetchWordpressPosts = graphql =>
  graphql(
    `
      {
        allWordpressPost {
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
            }
          }
        }
      }
    `
  );

const buildPaging = (createPage, posts, blogPost, blogpaged) => {
  posts.forEach((post, index) => {
    createPage({
      path: `/${post.node.slug}/`,
      component: slash(blogPost),
      context: {
        id: post.node.id
      }
    });
  });

  let stranky = [];
  let stranka = [];
  let p = 0;
  while (p < posts.length) {
    if (stranka.length < 5) stranka.push(posts[p]);
    else {
      stranky.push(stranka);
      stranka = [];
    }
    p++;
  }

  stranky.push(stranka);
  stranka = [];
  stranky.forEach((str, index) => {
    let cislo = index === 0 ? "" : index;
    createPage({
      path: `/${cislo}`,
      component: slash(blogpaged),
      context: {
        str: str,
        n: index,
        maxn: stranky.length
      }
    });
  });
};
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
const buildPages = (createPage, result) => {
  const pages = result.data.allWordpressPage.edges;
  // console.log(pages);
  const Pagetemplate = path.resolve("./src/sablony/stranka.js");
  pages.forEach(page => {
    // console.log(page);
    createPage({
      path: `/${page.node.slug}/`,
      component: slash(Pagetemplate),
      context: {
        id: page.node.id
      }
    });
  });
};

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
