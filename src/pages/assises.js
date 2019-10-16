import React from "react";
import { graphql } from 'gatsby';

// import styles
import '../styles/main.scss';

//import components
import Card from "../components/card"
import Footer from '../components/footer.js';
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import NewsletterAd from '../components/newsletterAd.js';

// Airtable query
export const query = graphql`
  query MyQueryAssises {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}) {
      nodes {
        data {
          Nom_d_achat
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Statut
        }
      }
    }
  }
`;

function Assises({data}) {
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
          {data.allAirtable.nodes.map(node => (
            <Card
              cardDesc={node.data.Titre_de_l_annonce__FR_}
              cardPrice={node.data.Prix_de_vente}
              cardSold={node.data.Statut}>
            </Card>
          ))}
        </div>
      </div>
      <NewsletterAd />
      <Footer />
    </React.Fragment>
  )
}

export default Assises
