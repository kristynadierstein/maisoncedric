import React from "react";


// import styles
import '../styles/main.scss';

class Index extends React.Component {
  render(){
    return(
      <div className="container">

        <h1>Nouveautés</h1>

        <div className="row-1">
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

        <div className="row-2">
          <div className="card">
            <div className="image">
              <div className="vendu">
                <label htmlFor="">Vendu</label>
              </div>
            </div>
            <div className="desc">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <label>
                <strong>Vendu</strong>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <label>
                <strong>2.500 €</strong>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <label>
                <strong>2.500 €</strong>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <label>
                <strong>2.500 €</strong>
              </label>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

export default Index

