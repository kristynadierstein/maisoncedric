import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

function isVendu(itemStatus) {
  if (itemStatus !== null) {
    console.log(itemStatus)
    return (
      <div className="vendu">
        <label htmlFor="">{itemStatus}</label>
      </div>
    );
  }
}

export default props => (
  <div className="card">
    <Link to="/produit">
      <div className="image" style={{backgroundImage: "url(" + props.image + ")"}}>
        {isVendu(props.status)}
      </div>
      <div className="desc">
        <p>{props.title}</p>
        <label>
          <strong>{props.price} €</strong>
        </label>
      </div>
    </Link>
  </div>
)
