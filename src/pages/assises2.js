import React from "react";
import { graphql } from 'gatsby';
import { Link } from "gatsby";


// import styles
import '../styles/main.scss';

//import components
import Card from "../components/card"
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import NewsletterAd from '../components/newsletterAd';

class assises2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = graphql`
      query MyAssises2Query {
        allAirtable(sort: {fields: data___Created_Time, order: ASC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}, Categories: {in: "Assises"}}}) {
          nodes {
            data {
              Categories
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
    `;
    let displayedItems = data.allAirtable.nodes;
    return (
      <React.Fragment>
        < Header />
        < Navbar />
        <div className="container category">
          <div className="sidebar">
            <h1>Assises</h1>
            <hr/>
            <ul>
              <li>Toutes les assises</li>
              <li>Fauteuils</li>
              <li>Chaises</li>
              <li>Canapés</li>
              <li>Tabourets</li>
              <li>Tables</li>
              <li>Autres</li>
            </ul>
          </div>
          <div className="row-3">
            {displayedItems.map(node => (
              <Card
                title={node.data.Titre_de_l_annonce__FR_}
                price={node.data.Prix_de_vente}
                status={node.data.Statut}
                image={node.data.Images[0].url}>
              </Card>
            ))}
            <div className="btn-container">
              <Link className="btn-1">Voir plus d'assises</Link>
            </div>
          </div>
        </div>
        <NewsletterAd />
        <Footer />
      </React.Fragment>
    )
  }
}

export default assises2
