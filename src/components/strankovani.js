import { Link } from "gatsby";
import React from "react";

export default ({ n, maxn }) => (
  <div className="strankovani">
    {" "}
    <Link
      style={{ display: n - 1 >= 0 ? "block" : "none" }}
      to={`/${n - 1 > 0 ? n - 1 : "/"}`}
    >
      Minulá stránka
    </Link>
    <Link style={{ display: n + 1 < maxn ? "block" : "none" }} to={`/${n + 1}`}>
      Další stránka
    </Link>
  </div>
);
