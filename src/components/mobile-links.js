// import libraries
import React from "react";
import Modal from 'react-responsive-modal';


// import styles
import '../styles/main.scss';

//import imagery
import Env from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';


class MobileLinks extends React.Component {
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
      <div className="call-to-action-mobile">
        <label htmlFor="">Vendu</label>
        <div className="btn-1-modal" onClick={this.onOpenModal}>Contactez-nous</div>
        <Modal open={open} onClose={this.onCloseModal} closeIconSize={20} center >
          <h2>Contactez-nous</h2>
        <hr></hr>
        <div className="modal-section">
          <Env className="modal-svg"/>
          <a href="/#" className="email-modal">contact@maisoncedric.com</a>
        </div>
        <hr></hr>
        <div className="modal-section">
          <Phone className="modal-svg"/>
            <div>
              <FlagFR id="modal-phone-flag" />
              <a href="/#" className="phone-modal" > +33 6 24 55 52 51</a>
            </div>
        </div>
        </Modal>
      </div>
      </React.Fragment>

    )
  }
}

export default MobileLinks










  
