import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

export default () => (
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
