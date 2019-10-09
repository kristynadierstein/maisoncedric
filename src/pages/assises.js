import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

export default () => (
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
      <Card
        cardDesc="Lorem ipsum dolor sit amet, consectetur adipisicing."
        cardPrice="2.400"
        cardSold="Vendu">
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
        cardPrice="2.500"
        cardSold="Vendu">
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
)
