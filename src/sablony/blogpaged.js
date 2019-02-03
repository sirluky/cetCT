import React, { Component } from "react";
// import get from "lodash/get";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Strankovani from "../components/strankovani";
class SiteTemplate extends Component {
  render() {
    const str = this.props.pageContext.str;
    const n = this.props.pageContext.n;
    const maxn = this.props.pageContext.maxn;

    // const page = this.props.data.wordpressPage;
    // const datum = new Date(page.date);
    console.log(str);
    return (
      <Layout>
        <div className="clanky">
          {str.map((clanek, index) => (
            <div className="clanek" key={index}>
              <Link to={clanek.node.slug}>
                <h2 dangerouslySetInnerHTML={{ __html: clanek.node.title }} />
              </Link>
              <p dangerouslySetInnerHTML={{ __html: clanek.node.content }} />
            </div>
          ))}
        </div>
        <Strankovani n={n} maxn={maxn} />
      </Layout>
    );
  }
}

export default SiteTemplate;
