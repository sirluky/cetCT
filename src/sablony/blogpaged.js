import React, { Component } from "react";
// import get from "lodash/get";
import Layout from "../components/layout";
import { Link } from "gatsby";
import Strankovani from "../components/strankovani";
import Seo from "../components/seo";
import BlogFull from "./components/blogfull";
import "./clanky.scss";
import Img from "gatsby-image";
import { WOW } from "wowjs";

class SiteTemplate extends Component {
  componentDidMount() {
    new WOW().init();
  }
  render() {
    const str = this.props.pageContext.str;
    const n = this.props.pageContext.n;
    const maxn = this.props.pageContext.maxn;

    // const page = this.props.data.wordpressPage;
    // const datum = new Date(page.date);
    // console.log(str);
    return (
      <Layout>
        <Seo
          title={`Domovská stránka ${n > 0 ? " " + (n + 1) : ""}`}
          keywords={[
            `OB CET`,
            `Orientační běh Česká Třebová`,
            `OB Loko Česká Třebová`
          ]}
        />

        <div className="clanky">
          {str.map((clanek, index) => (
            <article className="clanek" className="wow fadeIn fast" key={index}>
              {clanek.node.acf !== null && clanek.node.acf.plnezob === true ? (
                <BlogFull post={clanek.node} />
              ) : (
                <div>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: clanek.node.title
                    }}
                  />
                  {/* {console.log(
                    clanek.node.featured_media !== null
                      ? clanek.node.featured_media.localFile.childImageSharp
                          .resize.src
                      : ""
                  )} */}
                  {clanek.node.featured_media !== null
                    ? ""
                    : // <Img
                      //   resize={
                      //     clanek.node.featured_media.localFile.childImageSharp
                      //       .resize.src
                      //   }
                      // />
                      ""}

                  <div
                    dangerouslySetInnerHTML={{
                      __html: clanek.node.excerpt
                    }}
                  />
                  <div className="cistic" />
                  <span className="more">
                    <Link to={clanek.node.slug}>Zobrazit celý článek.</Link>
                  </span>
                </div>
              )}
              <hr />
            </article>
          ))}
        </div>
        <Strankovani n={n} maxn={maxn} />
      </Layout>
    );
  }
}

export default SiteTemplate;
