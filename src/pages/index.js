import React from "react";
import Card from "../components/card";

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import NavBar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';
import Navbar from '../components/navbar.js';

class Index extends React.Component {
  render(){
    return(
      <React.Fragment>
        < Header />
        < Navbar />
        <div className="container">
          <h1>Nouveautés</h1>
          <div className="row-3">
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ipsam."
              cardPrice="3.000"
              cardSold="Vendu">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, voluptatum!"
              cardPrice="2.500">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, quaerat!"
              cardPrice="3.800">
            </Card>
          </div>

          <div className="row-4">
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.400">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.800">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="1.500"
              cardSold="Vendu">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.500">
            </Card>
          </div>
        </div>
        < NewsletterAd />
        < Footer />
      </React.Fragment>
    )
  }
}

export default Index
