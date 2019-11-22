// import libraries
import React from "react"
import Modal from 'react-responsive-modal'
import { graphql } from 'gatsby'

// import styles
import '../styles/main.scss'

// import components
import Header from '../components/header.js'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import NewsletterAd from '../components/newsletterAd.js'
import Carousel from '../components/carousel.js'
import MobileLinks from '../components/mobile-links.js'
import MobileNavbarFilters from '../components/mobile-navbar-filters.js'

// import imagery
import Env from '../../static/images/ic-mail.svg'
import Phone from '../../static/images/ic-phone.svg'
import FlagFR from '../../static/images/ic--flag--fr.svg'

class Produit extends React.Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }

  render() {
    const { open } = this.state
    const urls = this.props.data.allAirtable.nodes[0].data.Images.map(e => e.url)
    const data = this.props.data.allAirtable.nodes[0].data
    const path = this.props.path

    // display price or status if item is sold
    const getItemPrice = (data, path) => {
      if (data.Statut !== null && data.Statut[0] === 'Vendu' && path.match(/en/g)) {
        return "Sold"
      } else if (data.Statut !== null && data.Statut[0] === 'Vendu' && path.match(/fr/g)) {
        return "Vendu"
      } else {
        return `${data.Prix_de_vente} €`
      }
    }

    // for translation
    const getLocalizedProductTitle = (path, data) => {
      if (path.match(/en/g)) {
        return data.Titre_de_l_annonce__EN_
      } else if (path.match(/fr/g)) {
        return data.Titre_de_l_annonce__FR_
      }
    }
    const getLocalizedProductDescription = (path, data) => {
      if (path.match(/en/g)) {
        return data.Description__EN_
      } else if (path.match(/fr/g)) {
        return data.Description__FR_
      }
    }
    const getLocalizedButton = (path) => {
      if (path.match(/en/g)) {
        return 'Contact Us'
      } else if (path.match(/fr/g)) {
        return 'Contactez-nous'
      }
    }

    return (
      <React.Fragment>
        <Header/>
        <MobileNavbarFilters/>
        <Navbar/>
        <div className="container produit">
          <div className="row">
            <div className="caroussel">
              <Carousel urls= {urls}/>
            </div>
            <div className="content">
              <h1>
                {getLocalizedProductTitle(path, data)}
              </h1>
              <div className="fixed-mobile-links">
                <MobileLinks/>
              </div>
              <hr/>
              <div className="call-to-action">
                {/* <label htmlFor="">{status}</label> */}
                <label htmlFor="">
                  {getItemPrice(data, path)}
                </label>
                <div className="btn-1-modal" onClick={this.onOpenModal}>
                  {getLocalizedButton(path)}
                </div>
                <Modal open={open} onClose={this.onCloseModal} closeIconSize={20} center >
                  <h2>
                    {getLocalizedButton(path)}
                  </h2>
                <hr></hr>
                <div className="modal-section">
                  <Env className="modal-svg"/>
                  <a href="/" className="email-modal">contact@maisoncedric.com</a>
                </div>
                <hr></hr>
                <div className="modal-section">
                  <Phone className="modal-svg"/>
                    <div>
                      <FlagFR id="modal-phone-flag"/>
                      <a href="/" className="phone-modal">+33 6 24 55 52 51</a>
                    </div>
                </div>
                </Modal>
              </div>
              <hr className="tab-d-none"/>
              <p>
                {getLocalizedProductDescription(path, data)}
              </p>
              <hr className="tab-d-none"/>
            </div>
          </div>
        </div>
        <NewsletterAd/>
        <Footer/>
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
