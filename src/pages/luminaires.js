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
  query MyLuminairesQuery {
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

function Luminaires({data}) {
  return (
    <React.Fragment>
      < Header />
      < Navbar />
      <div className="container category">
        <div className="sidebar">
          <h1>Luminaires</h1>
          <hr/>
          <ul>
            <li>Luminaires type 1</li>
            <li>Luminaires type 2</li>
            <li>Luminaires type 3</li>
            <li>Luminaires type 4</li>
            <li>Luminaires type 5</li>
            <li>Luminaires type 6</li>
            <li>Luminaires type 7</li>
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

export default Luminaires
