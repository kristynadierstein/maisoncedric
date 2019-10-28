import React from "react";

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Carousel from '../components/carousel';
import Modal from 'react-responsive-modal';

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
              <div className="call-to-action">
                <label htmlFor="">Vendu</label>
                <div className="btn-1" onClick={this.onOpenModal}>Contactez-nous</div>
                <Modal open={open} onClose={this.onCloseModal} closeIconSize="20" center closeIcon="closeIcon">
                  <h2>Contactez-nous</h2>
                <hr></hr>
                <div className="modal-section">
                  <Env className="modal-env-svg"/>
                  <a href="/#" className="email-modal">contact@maisoncedric.com</a>
                </div>
                <hr></hr>
                <div className="modal-section">
                  <Phone />
                    <div className="modal-phone-flag">
                      <FlagFR />
                      <a href="/#" className="phone-modal" > +33 6 24 55 52 51</a>
                    </div>
                </div>
                </Modal>
              </div>
              <hr/>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quasi iusto ab placeat non sed recusandae dignissimos quod. Sit adipisci asperiores veritatis nisi nihil. Nesciunt omnis excepturi totam porro hic.
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
