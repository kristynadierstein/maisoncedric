import React from "react";
import { Link } from "gatsby"

// import styles
import '../styles/main.scss';

export default () => (
  <div className="container">
    <div className="row">
      <div className="caroussel"></div>
      <div className="content">
        <h1>Rare table de chevet laquée laiton de la Maison Jansen (1970)</h1>
        <hr/>
        <div className="call-to-action">
          <label htmlFor="">Vendu</label>
          <Link className="btn-1">Contactez-nous</Link>
        </div>
        <hr/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quasi iusto ab placeat non sed recusandae dignissimos quod. Sit adipisci asperiores veritatis nisi nihil. Nesciunt omnis excepturi totam porro hic.
        </p>
      </div>
    </div>
  </div>
)
