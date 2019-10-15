import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

function isVendu(statut) {
  if (statut !== null) {
    return (
      <div className="vendu">
        <label htmlFor="">{statut}</label>
      </div>
    );
  }
}

export default props => (
  <div className="card">
    <Link to="/produit">
      <div className="image">
        {isVendu(props.cardSold)}
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
