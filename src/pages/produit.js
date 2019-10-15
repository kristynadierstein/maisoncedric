import React from "react";
import { Link } from "gatsby"

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Carousel from '../components/carousel';

class Produit extends React.Component {
  render(){
    return (
      <React.Fragment>
        < Header />
        < Navbar />
        <div className="container">
          <div className="row">
            <div className="caroussel">
            <Carousel />
            </div>
            <div className="content">
              <h1>Rare table de chevet laquée laiton de la Maison Jansen (1970)</h1>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quasi iusto ab placeat non sed recusandae dignissimos quod. Sit adipisci asperiores veritatis nisi nihil. Nesciunt omnis excepturi totam porro hic.
              </p>
              <hr/>
              <div className="call-to-action">
                <label htmlFor="">Vendu</label>
                <Link className="btn-1">Contactez-nous</Link>
              </div>
              <hr/>
            </div>
          </div>
        </div>
        <NewsletterAd />
        <Footer />
      </React.Fragment>
      )
    } 
  }

export default Produit

