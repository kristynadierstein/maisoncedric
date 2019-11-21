// external libraries
import React from "react"
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

// import styles
import '../styles/main.scss'

// images
import Envelope from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';

//import components
import Header from '../components/header.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import NewsletterAd from '../components/newsletterAd.js'
import MobileNavbar from '../components/mobile-navbar.js'

class APropos extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Header/>
        <MobileNavbar/>
        <Navbar/>
        <div className="container-small">
          <h1><FormattedMessage id="a-propos.titre"/></h1>
          <p>
            <FormattedMessage id="a-propos.content1"/>
            <br/>
            <FormattedMessage id="a-propos.content2"/>
          </p>
          <hr/>
          <div className="contact">
            <Envelope/>
            <Link>contact@maisoncedric.com</Link>
          </div>
          <hr/>
          <div className="contact">
            <Phone/>
            <Link>+33 6 24 55 52 51</Link>
          </div>
        </div>
        <NewsletterAd/>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default injectIntl(APropos)
