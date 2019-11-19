// external libraries
import React from 'react'
import {graphql} from 'gatsby'
import MediaQuery from 'react-responsive'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

// import styles
import '../styles/main.scss'

//import components
import Card from '../components/card.js'
import Footer from '../components/footer.js'
import Header from '../components/header.js'
import MobileNavbar from '../components/mobile-navbar.js'
import Navbar from '../components/navbar.js'
import NewsletterAd from '../components/newsletterAd.js'

class Index extends React.Component {
  render(){
    // data from Airtable
    const nodes = this.props.data.allAirtable.nodes

    // current language
    const locale = this.props.intl.locale

    // gives product title according to current language
    const getLocalizedProductTitle = (locale, data) => {
      if (locale === "en") {
        return data.Titre_de_l_annonce__EN_
      } else if (locale === "fr") {
        return data.Titre_de_l_annonce__FR_
      }
    }

    return (
      <React.Fragment>
        <Header />
        <MediaQuery maxDeviceWidth={1199}>
          <MobileNavbar />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1199}>
          <Navbar />
        </MediaQuery>
        <div className="container">

          <h1><FormattedMessage id="index.titre" /></h1>

          {console.log(nodes)}

          <div className="row-3">

            {(2 < nodes.length - 1) &&
            // Makes the card appear only if the item exists
              <Card
                title={getLocalizedProductTitle(locale, nodes[2].data)}
                price={nodes[2].data.Prix_de_vente}
                status={nodes[2].data.Statut}
                image={nodes[2].data.Images[0].url}
                id={nodes[2].data.ID}>
              </Card>
            }
          </div>

          <div className="row-4">
          </div>
        </div>
        <NewsletterAd />
        <Footer />
      </React.Fragment>
    )
  }
}

export default injectIntl(Index)

// Airtable query
export const query = graphql`
  query MyIndexQuery {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}, Nouveaut__New: {eq: true}}}) {
      nodes {
        data {
          ID
          Nom_d_achat
          Created_Time
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Titre_de_l_annonce__EN_
          Statut
          Images {
            url
          }
        }
      }
    }
  }
`
