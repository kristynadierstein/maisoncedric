//import libraries
import React from "react";

//import imagery
import FlagEN from '../../static/images/ic--flag--en.svg';
import Env from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';

const ModalContent  = () => {
  return(
    <React.Fragment>
      <h2>Contactez-nous</h2>
      <hr></hr>
      <div className="modal-section">
        <Env className="modal-env-svg"/>
        <a href="/" className="email-modal">contact@maisoncedric.com</a>
      </div>
      <hr></hr>
      <div className="modal-section">
        <Phone />
      <div className="modal-phone-flag">
        <FlagFR />
        <a href="/" className="phone-modal" > +33 6 24 55 52 51</a>
      </div>
      </div>
    </React.Fragment>
  )
}

export default ModalContent;



