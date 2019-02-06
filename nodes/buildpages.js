const slash = require("slash");
const path = require("path");

const buildPages = (createPage, result) => {
  const pages = result.data.allWordpressPage.edges;
  // console.log(pages);
  const Pagetemplate = path.resolve("./src/sablony/stranka.js");
  pages.forEach(page => {
    // console.log(page);
    createPage({
      path: `/${page.node.slug}/`,
      component: Pagetemplate,
      context: {
        id: page.node.id
      }
    });
  });
};
module.exports = buildPages;
