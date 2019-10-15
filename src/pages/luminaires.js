import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

//import components
import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import NewsletterAd from '../components/newsletterAd.js';

class Luminaires extends React.Component {
  render(){
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
              cardPrice="1.500">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.500">
            </Card>
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
              cardPrice="1.500">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.500">
            </Card>
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
              cardPrice="1.500">
            </Card>
            <Card
              cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
              cardPrice="2.500">
            </Card>
          </div>
        </div>
        <NewsletterAd />
        <Footer />
      </React.Fragment>
      )
    } 
  }

export default Luminaires

