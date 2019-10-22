import React from "react";
import { graphql } from 'gatsby';
import { Link } from "gatsby";

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
  query MyDecoQuery {
    allAirtable(sort: {fields: data___Created_Time, order: ASC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}, Categories: {in: "Décoration"}}}) {
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

function Decoration({data}) {
  return (
    <React.Fragment>
      < Header />
      < Navbar />
      <div className="container category">
        <div className="sidebar">
          <h1>Décoration</h1>
          <hr/>
          <ul>
            <li>Décoration type 1</li>
            <li>Décoration type 2</li>
            <li>Décoration type 3</li>
            <li>Décoration type 4</li>
            <li>Décoration type 5</li>
            <li>Décoration type 6</li>
            <li>Décoration type 7</li>
          </ul>
        </div>
        <div className="row-3">
          {data.allAirtable.nodes.reverse().map(node => (
            <Card
              title={node.data.Titre_de_l_annonce__FR_}
              price={node.data.Prix_de_vente}
              status={node.data.Statut}
              image={node.data.Images[0].url}>
            </Card>
          ))}
          <div className="btn-container">
            <Link className="btn-1">Voir plus de décorations</Link>
          </div>
        </div>
      </div>
      <NewsletterAd />
      <Footer />
    </React.Fragment>
  )
}

export default Decoration
