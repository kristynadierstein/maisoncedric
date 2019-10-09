import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

export default () => (
  <div className="card">
    <Link to="/produit">
      <div className="image">
        <div className="vendu">
          <label htmlFor="">Vendu</label>
        </div>
      </div>
      <div className="desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur facere corporis atque consequuntur.</p>
        <label>
          <strong>3.000 €</strong>
        </label>
      </div>
    </Link>
  </div>
)
