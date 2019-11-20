// external libraries
import React from "react"
import MediaQuery from 'react-responsive'
import { injectIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

// import styles
import '../styles/main.scss'

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
        <MediaQuery maxDeviceWidth={1199}>
          <MobileNavbar/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={1199}>
          <Navbar/>
        </MediaQuery>
        <div className="container-small">
          <h1><FormattedMessage id="a-propos.titre"/></h1>
          <p>
            <FormattedMessage id="a-propos.content1"/>
            <br/>
            <FormattedMessage id="a-propos.content2"/>
          </p>
          <hr/>
          <div className="contact">
            <img src="../images/ic-mail.svg" alt=""/>
            <Link>contact@maisoncedric.com</Link>
          </div>
          <hr/>
          <div className="contact">
            <img src="../images/ic-phone.svg" alt=""/>
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
