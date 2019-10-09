import React from "react";

// import styles
import '../styles/main.scss';

export default () => (
  <div className="container category">
    <div className="sidebar">
      <h1>Mobilier</h1>
      <hr/>
      <ul>
        <li>Mobilier type 1</li>
        <li>Mobilier type 2</li>
        <li>Mobilier type 3</li>
        <li>Mobilier type 4</li>
        <li>Mobilier type 5</li>
        <li>Mobilier type 6</li>
        <li>Mobilier type 7</li>
      </ul>
    </div>
    <div className="row-3">
      <div className="card">
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
      </div>
      <div className="card">
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
      </div>
      <div className="card">
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
      </div>
    </div>
  </div>
)
