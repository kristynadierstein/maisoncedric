import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

export default props => (
  <div className="card">
    <Link to="/produit">
      <div className="image">
        <div className="vendu">
          <label htmlFor="">Vendu</label>
        </div>
      </div>
      <div className="desc">
        <p>{props.cardDesc}</p>
        <label>
          <strong>{props.cardPrice} €</strong>
        </label>
      </div>
    </Link>
  </div>
)
