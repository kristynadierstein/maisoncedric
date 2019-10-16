import React from 'react';
import {graphql} from 'gatsby';

// import styles
import '../styles/main.scss';

// import components
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Card from '../components/card';

// Airtable query
export const query = graphql`
  query MyIndexQuery {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}) {
      nodes {
        data {
          Nom_d_achat
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Statut
          Created_Time
          Images {
            url
          }
        }
      }
    }
  }
`;

function Index({data}) {
  return (
    <React.Fragment>
      < Header />
      < NavBar />
      <div className="container">

        <h1>Nouveautés</h1>

        <div className="row-3">
          <Card
            title={data.allAirtable.nodes[4].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[4].data.Prix_de_vente}
            status={data.allAirtable.nodes[4].data.Statut}
            image={data.allAirtable.nodes[4].data.Images[0].url}>
          </Card>
          <Card
            title={data.allAirtable.nodes[5].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[5].data.Prix_de_vente}
            status={data.allAirtable.nodes[5].data.Statut}
            image={data.allAirtable.nodes[5].data.Images[0].url}>
          </Card>
          <Card
            title={data.allAirtable.nodes[12].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[12].data.Prix_de_vente}
            status={data.allAirtable.nodes[12].data.Statut}
            image={data.allAirtable.nodes[12].data.Images[0].url}>
          </Card>
        </div>

        <div className="row-4">
          <Card
            title={data.allAirtable.nodes[13].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[13].data.Prix_de_vente}
            status={data.allAirtable.nodes[13].data.Statut}
            image={data.allAirtable.nodes[13].data.Images[0].url}>
          </Card>
          <Card
            title={data.allAirtable.nodes[14].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[14].data.Prix_de_vente}
            status={data.allAirtable.nodes[14].data.Statut}
            image={data.allAirtable.nodes[14].data.Images[0].url}>
          </Card>
          <Card
            title={data.allAirtable.nodes[13].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[13].data.Prix_de_vente}
            status={data.allAirtable.nodes[13].data.Statut}
            image={data.allAirtable.nodes[13].data.Images[0].url}>
          </Card>
          <Card
            title={data.allAirtable.nodes[14].data.Titre_de_l_annonce__FR_}
            price={data.allAirtable.nodes[14].data.Prix_de_vente}
            status={data.allAirtable.nodes[14].data.Statut}
            image={data.allAirtable.nodes[14].data.Images[0].url}>
          </Card>
        </div>
      </div>
      < NewsletterAd />
      < Footer />
    </React.Fragment>
  )
}

export default Index;
