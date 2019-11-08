//import libraries
import React from "react";
import MediaQuery from 'react-responsive';
import Modal from 'react-responsive-modal';
import { graphql } from 'gatsby';

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Carousel from '../components/carousel.js';
import MobileLinks from '../components/mobile-links.js';
import MobileNavbar from '../components/mobile-navbar.js';


//import imagery
import Env from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';


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
    const title = this.props.data.allAirtable.nodes[0].data.Titre_de_l_annonce__FR_
    const urls = this.props.data.allAirtable.nodes[0].data.Images.map(e => e.url)
    const status = this.props.data.allAirtable.nodes[0].data.Statut
    const prix = this.props.data.allAirtable.nodes[0].data.Prix_de_vente
    const description = this.props.data.allAirtable.nodes[0].data.Description__FR_
    return (
      <React.Fragment>
        < Header />
        <MediaQuery maxDeviceWidth={1199}>
        < MobileNavbar />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1199}>
        < Navbar />
        </MediaQuery>
        
        <div className="container">
          <div className="row">
            <div className="caroussel">
            <Carousel 
             urls= {urls}
             />
            </div>
            <div className="content">
                <h1>{title}</h1>
              <MediaQuery maxDeviceWidth={1199}>   
              <div className="fixed-mobile-links">  
                  <MobileLinks />
              </div>
              </MediaQuery>
              <MediaQuery minDeviceWidth={1199}>
              <hr/>
              <div className="call-to-action">
                {/* <label htmlFor="">{status}</label> */}
                <label htmlFor="">{prix} €</label>
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
                {description}
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



// Airtable query
export const query = graphql`
query MyQuery($id: Int!) {
  allAirtable(filter: {data: {ID: {eq: $id}}}) {
    nodes {
      data {
        ID
        Categories
        Sub_Categories
        Description__FR_
        Description__EN_
        Created_Time
        Prix_de_vente
        Statut
        Titre_de_l_annonce__FR_
        Titre_de_l_annonce__EN_
        Images {
          url
        }
      }
    }
  }
}
`
