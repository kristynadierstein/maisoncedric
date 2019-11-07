//import libraries
import React from "react";
import MediaQuery from 'react-responsive';
import Modal from 'react-responsive-modal';
// import { graphql } from 'gatsby';

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Carousel from '../components/carousel.js';
import MobileLinks from '../components/mobile-links.js';

//import imagery
import Env from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';

// // Airtable query
export const query = graphql`
query MyProduitQuery {
  allAirtable (filter: {data: {Images: {elemMatch: {size: {gt: 1}}}}}) {
    nodes {
      data {
        Categories
        Description__FR_
        ID
        Images {
          url
        }
        Prix_de_vente
        Statut
        Sub_Categories
        Titre_de_l_annonce__FR_
      }
    }
  }
}
`

class Produit extends React.Component {
  state = {
    open: false,
  };
  
  onOpenModal = () => {
    this.setState({ open: true });
  };
  
  onCloseModal = () => {
    this.setState({ open: false });
  };
  
  
  render() {    
    const { open } = this.state;
 
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
                <h1>blabla</h1>
              <MediaQuery maxDeviceWidth={1199}>   
              <div className="fixed-mobile-links">  
                  <MobileLinks />
              </div>
              </MediaQuery>
              <MediaQuery minDeviceWidth={1199}>
              <hr/>
              <div className="call-to-action">
                <label htmlFor="">Vendu</label>
                <div className="btn-1-modal" onClick={this.onOpenModal}>Contactez-nous</div>
                <Modal open={open} onClose={this.onCloseModal} closeIconSize={20} center >
                  <h2>Contactez-nous</h2>
                <hr></hr>
                <div className="modal-section">
                  <Env className="modal-svg"/>
                  <a href="/" className="email-modal">contact@maisoncedric.com</a>
                </div>
                <hr></hr>
                <div className="modal-section">
                  <Phone className="modal-svg"/>
                    <div>
                      <FlagFR id="modal-phone-flag" />
                      <a href="/" className="phone-modal" > +33 6 24 55 52 51</a>
                    </div>
                </div>
                </Modal>
              </div>
              <hr/>
              </MediaQuery>
              <p>
    
              </p>
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


// // Airtable query
// export const query = graphql`
// query MyQuery {
//   allAirtable(filter: {id: {eq: "$id"}}) {
//     nodes {
//       data {
//         Categories
//         Description__FR_
//         ID
//         Images {
//           url
//         }
//         Prix_de_vente
//         Statut
//         Sub_Categories
//         Titre_de_l_annonce__FR_
//       }
//     }
//   }
// }
// `
