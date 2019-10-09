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
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
)
