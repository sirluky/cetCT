import { Link } from "gatsby";
import React from "react";

export default ({ n, maxn }) => (
  <div className="strankovani">
    {" "}
    {n - 1 >= 0 ? (
      <Link style={{ display: "block" }} to={`/${n - 1 > 0 ? n - 1 : "/"}`}>
        Minulá stránka
      </Link>
    ) : (
      <p> Minulá stránka</p>
    )}
    {n + 1 < maxn ? (
      <Link style={{ display: "block" }} to={`/${n + 1}`}>
        Další stránka
      </Link>
    ) : (
      <p> Další stránka</p>
    )}
  </div>
);
