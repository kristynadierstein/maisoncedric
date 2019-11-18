import React from "react";
import { injectIntl, FormattedMessage, Link } from "gatsby-plugin-intl";

// import styles
import '../styles/main.scss';

const Card = (props) => {
  const isVendu = (itemStatus) => {
    if (itemStatus !== null && itemStatus[0] === "Vendu") {
      return (
        <div className="vendu">
          <label htmlFor=""><FormattedMessage id="labels.vendu" /></label>
        </div>
      )
    }
  }

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

export default injectIntl(Card)
