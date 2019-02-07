const slash = require("slash");
const path = require("path");
const filterAtr = require("../myfunctions/filterAtr");

const buildPages = (createPage, result) => {
  const pages = result.data.allWordpressPage.edges;

  // console.log(pages);
  const Pagetemplate = path.resolve("./src/sablony/stranka.js");
  pages.forEach(page => {
    // let filtered = page.node.id;

    // console.log(page);
    createPage({
      path: `/${page.node.slug}/`,
      component: Pagetemplate,
      context: {
        id: filterAtr(page.node.id)
      }
    });
  });
};
module.exports = buildPages;
