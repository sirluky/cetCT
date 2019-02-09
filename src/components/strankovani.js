import { Link } from "gatsby";
import React from "react";
import "./strankovani.scss";
export default ({ n, maxn }) => (
  <div className="strankovani">
    {" "}
    {n - 1 >= 0 ? (
      <Link className="pred" to={`/${n - 1 > 0 ? "page/" + n : ""}`}>
        Předchozí stránka
      </Link>
    ) : (
      <p className="pred"> Minulá stránka</p>
    )}
    {n + 1 < maxn ? (
      <Link className="dalsi" to={`/page/${n + 2}`}>
        Další stránka
      </Link>
    ) : (
      <p className="dalsi"> Další stránka</p>
    )}
  </div>
);
