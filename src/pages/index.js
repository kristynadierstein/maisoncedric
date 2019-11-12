import React from 'react';
import {graphql} from 'gatsby';
import { Link } from "gatsby";

// import styles
import '../styles/main.scss';

// import components
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
// import Card from '../components/card';


export const Card = (props) => {
  return(
    <div className="card">
        <Link to={`/produit/${props.id}`} key={ props.id }>
        <div className="image" style={{backgroundImage: "url(" + props.image + ")"}}>
          {isVendu(props.status)}
        </div>
        <div className="desc">
          <p>{props.title}</p>
          <label>
            <strong>{props.price} €</strong>
          </label>
        </div>
        </Link>
    </div>
  )
}
  function isVendu(itemStatus) {
    if (itemStatus !== null) {
      return (
        <div className="vendu">
          <label htmlFor="">{itemStatus}</label>
        </div>
      );
    }
  }

class Index extends React.Component {
  render(){
    const nodes = this.props.data.allAirtable.nodes;

    return (
      <React.Fragment>
        < Header />
        < NavBar />
        <div className="container">

          <h1>Nouveautés</h1>

          <div className="row-3">
            <Card
              title={nodes[4].data.Titre_de_l_annonce__FR_}
              price={nodes[4].data.Prix_de_vente}
              status={nodes[4].data.Statut}
              image={nodes[4].data.Images[0].url}
              id={nodes[4].data.ID}>
            </Card>
            <Card
              title={nodes[3].data.Titre_de_l_annonce__FR_}
              price={nodes[3].data.Prix_de_vente}
              status={nodes[3].data.Statut}
              image={nodes[3].data.Images[0].url}
              id={nodes[3].data.ID}>
            </Card>
            <Card
              title={nodes[2].data.Titre_de_l_annonce__FR_}
              price={nodes[2].data.Prix_de_vente}
              status={nodes[2].data.Statut}
              image={nodes[2].data.Images[0].url}
              id={nodes[2].data.ID}>
            </Card>
          </div>

          <div className="row-4">
            <Card
              title={nodes[0].data.Titre_de_l_annonce__FR_}
              price={nodes[0].data.Prix_de_vente}
              status={nodes[0].data.Statut}
              image={nodes[0].data.Images[0].url}
              id={nodes[0].data.ID}>
            </Card>
            <Card
              title={nodes[1].data.Titre_de_l_annonce__FR_}
              price={nodes[1].data.Prix_de_vente}
              status={nodes[1].data.Statut}
              image={nodes[1].data.Images[0].url}
              id={nodes[1].data.ID}>
            </Card>
            <Card
              title={nodes[2].data.Titre_de_l_annonce__FR_}
              price={nodes[2].data.Prix_de_vente}
              status={nodes[2].data.Statut}
              image={nodes[2].data.Images[0].url}
              id={nodes[2].data.ID}>
            </Card>
            <Card
              title={nodes[3].data.Titre_de_l_annonce__FR_}
              price={nodes[3].data.Prix_de_vente}
              status={nodes[3].data.Statut}
              image={nodes[3].data.Images[0].url}
              id={nodes[3].data.ID}>
            </Card>
          </div>
        </div>
        < NewsletterAd />
        < Footer />
      </React.Fragment>
    )
  }
}

export default Index;

// Airtable query
export const query = graphql`
  query MyIndexQuery {
    allAirtable(sort: {fields: data___Created_Time, order: DESC}, filter: {data: {Images: {elemMatch: {size: {gt: 1}}}}}) {
      nodes {
        data {
          ID
          Nom_d_achat
          Created_Time
          Prix_de_vente
          Titre_de_l_annonce__FR_
          Statut
          Images {
            url
          }
        }
      }
    }
  }
`;
