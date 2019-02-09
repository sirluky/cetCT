const slash = require("slash");

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
    let cislo = index === 0 ? "" : "page/" + index;

    createPage({
      path: `/${cislo}`,
      component: blogpaged,
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
module.exports = buildPaging;
