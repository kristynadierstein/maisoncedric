import React from "react";
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

function isVendu(itemStatus) {
  if (itemStatus !== null) {
    return (
      <div className="vendu">
        <label htmlFor="">{itemStatus}</label>
      </div>
    )
  }
}

const Card = (props) => {
  console.log(props)
  return(
    <div className="card">
      <Link to={`/produit/${props.id}`} id={props.id}>
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
}

export default Card
