import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

let imgUrl = 'https://picsum.photos/200/300';
let imgStyle = 'url(' + imgUrl + ')';
let imgStyle2 = 'backgroundImage: ' + imgStyle

export default props => (
  <div className="card">
    <Link to="/produit">
      <div className="image">
        <div className="vendu">
          <label htmlFor="">{props.cardSold}</label>
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
