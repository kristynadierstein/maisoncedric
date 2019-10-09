import React from "react";
import { Link } from "gatsby";
import Card from "../components/card";

// import styles
import '../styles/main.scss';

class Index extends React.Component {
  render(){
    return(
      <div className="container">

        <h1>Nouveautés</h1>

        <div className="row-3">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>

        <div className="row-4">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    )
  }
}

export default Index

