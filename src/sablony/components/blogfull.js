import React from "react";
import Img from "gatsby-image";

// import Seo from "../../components/seo";
const filterAtr = require("../../../myfunctions/filterAtr");

export default function blogfull({ post }) {
  const datum = new Date(post.date);

  return (
    <div>
      <div className="clanek">
        <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
        {post.featured_media !== null ? (
          <Img
            style={{ float: "left", marginRight: 10 }}
            fixed={post.featured_media.localFile.childImageSharp.fixed}
            key={post.featured_media.localFile.childImageSharp.fixed.src}
          />
        ) : (
          ""
        )}

        {/* {post.featured_media !== null ? (
          <img
            src={post.featured_media.localFile.childImageSharp.resize.tracedSVG}
            alt=""
          />
        ) : (
          ""
        )} */}
        <div dangerouslySetInnerHTML={{ __html: filterAtr(post.content) }} />

        {/* <p>{post.content}</p> */}
      </div>
      {/* {post.acf !== null ? (
          <p style={{ color: "darkred" }}>{post.acf.poradi}</p>
        ) : (
          ""
        )} */}

      <small>
        Napsal: {post.author.name + " "}
        {datum.getDate() + "." + datum.getMonth() + "." + datum.getFullYear()}
      </small>
    </div>
  );
}
