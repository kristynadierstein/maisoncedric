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
          Sub_Categories
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
  // Items displayed
  let numberDisplayed = 9;
  let displayedItems = data.allAirtable.nodes.reverse().slice(0, numberDisplayed);
  // Sub-Categories
  let subCategories = [];
  data.allAirtable.nodes.map(node => (
    node.data.Sub_Categories.map(subCategory => (
      subCategories.push(subCategory)
    ))
  ))
  subCategories = subCategories.sort();
  // subCategories.push(subCategories.shift()); // puts the 1st item at the end
  subCategories = ["Toutes les catégories"].concat(subCategories);

  return (
    <React.Fragment>
      < Header />
      < Navbar />
      <div className="container category">
        <div className="sidebar">
          <h1>Décoration</h1>
          <hr/>
          <ul>
            {subCategories.map(subCategory =>
              <li>{subCategory}</li>
            )}
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
