import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

export default () => (
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
