// external libraries
import React from "react";
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl";

// images
import Envelope from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';

const ModalContent  = () => {
  return(
    <React.Fragment>
      <h2><FormattedMessage id="a-propos.titre"/></h2>
      <hr></hr>
      <div className="modal-section">
        <Envelope className="modal-env-svg"/>
        <a href="/" className="email-modal">contact@maisoncedric.com</a>
      </div>
      <hr></hr>
      <div className="modal-section">
        <Phone/>
      <div className="modal-phone-flag">
        <a href="/" className="phone-modal" > +33 6 24 55 52 51</a>
      </div>
      </div>
    </React.Fragment>
  )
}

export default injectIntl(ModalContent);
