import React, { Component } from "react";
import { StaticQuery, Link } from "gatsby";
import "./navbar.scss";
class navbar extends Component {
  render() {
    console.log(this.props.data);
    return (
      <StaticQuery
        query={graphql`
          {
            allWordpressPage {
              edges {
                node {
                  title
                  content
                  slug
                }
              }
            }
          }
        `}
        render={data => (
          <nav>
            <ul>
              <Link key={"domu"} to={`/`}>
                <li>Domů</li>
              </Link>
              {data.allWordpressPage.edges.map((edge, index) => (
                <Link key={index} to={`/${edge.node.slug}/`}>
                  <li>{edge.node.title}</li>
                </Link>
              ))}
            </ul>
          </nav>
        )}
      />
    );
  }
}
export default navbar;

// export const query = graphql`

// `;
