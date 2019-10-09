import React from "react";
import Card from "../components/card"

// import styles
import '../styles/main.scss';

export default () => (
  <div className="container category">
    <div className="sidebar">
      <h1>Mobilier</h1>
      <hr/>
      <ul>
        <li>Mobilier type 1</li>
        <li>Mobilier type 2</li>
        <li>Mobilier type 3</li>
        <li>Mobilier type 4</li>
        <li>Mobilier type 5</li>
        <li>Mobilier type 6</li>
        <li>Mobilier type 7</li>
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
