import React, { Component } from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "./layout";
export default class blog extends Component {
  render() {
    console.log(this.props);
    return (
      <StaticQuery
        query={graphql`
          query ShowArticles {
            allWordpressPost {
              edges {
                node {
                  slug
                  title
                  content
                  id
                }
              }
            }
          }
        `}
        render={data => (
          <>
            {data.allWordpressPost.edges.map((edge, index) => {
              return (
                <div className="clanek" key={index}>
                  <Link to={edge.node.slug}>
                    {" "}
                    <h2>{edge.node.title}</h2>
                  </Link>
                  <div
                    className="obsah"
                    dangerouslySetInnerHTML={{ __html: edge.node.content }}
                  />
                  <small>{edge.node.id}</small>
                </div>
              );
            })}
          </>
        )}
      />
    );
  }
}
