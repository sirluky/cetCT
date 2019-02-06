import React from "react";
import Seo from "../../components/seo";

export default function blogfull({ post }) {
  const datum = new Date(post.date);

  return (
    <div>
      <div className="clanek">
        <h2 dangerouslySetInnerHTML={{ __html: post.title }} />

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

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
