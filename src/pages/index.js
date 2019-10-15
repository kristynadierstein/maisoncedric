import React from 'react';
import {graphql} from 'gatsby';

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Card from '../components/card';

// Airtable query
export const query = graphql`
  query MyQueryIndex {
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

export default ({data}) => (
  <React.Fragment>
    < Header />
    < NavBar />
    <div className="container">

      <h1>Nouveautés</h1>

      <div className="row-3">
        <Card
          cardDesc={data.allAirtable.nodes[0].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[0].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[0].data.Statut}>
        </Card>
        <Card
          cardDesc={data.allAirtable.nodes[1].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[1].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[1].data.Statut}>
        </Card>
        <Card
          cardDesc={data.allAirtable.nodes[2].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[2].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[2].data.Statut}>
        </Card>
      </div>

      <div className="row-4">
        <Card
          cardDesc={data.allAirtable.nodes[3].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[3].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[3].data.Statut}>
        </Card>
        <Card
          cardDesc={data.allAirtable.nodes[4].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[4].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[4].data.Statut}>
        </Card>
        <Card
          cardDesc={data.allAirtable.nodes[5].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[5].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[5].data.Statut}>
        </Card>
        <Card
          cardDesc={data.allAirtable.nodes[6].data.Titre_de_l_annonce__FR_}
          cardPrice={data.allAirtable.nodes[6].data.Prix_de_vente}
          cardSold={data.allAirtable.nodes[6].data.Statut}>
        </Card>
      </div>
    </div>
    < NewsletterAd />
    < Footer />
  </React.Fragment>
)
