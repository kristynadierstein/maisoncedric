import React from 'react';
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";

//import imagery
import FlagEN from '../../static/images/ic--flag--en.svg';
// import Esc from '../../static/images/ic--esc.svg';
// import Env from '../../static/images/ic-mail.svg';
// import Phone from '../../static/images/ic-phone.svg';
// import FlagFR from '../../static/images/ic--flag--fr.svg';

 const NavbarContent = (props) => {
 // loop thru all objects and create an array with all existing categories
 let Array = []
 props.data.allAirtable.nodes.map(node =>
   node.data.Categories.map(category =>
     Array.push(category))
   )
 //remove duplicates from the array above and create a new array
 const allCategories = new Set(Array);
 const Test = [...allCategories];
 // loop thru the array with unique categories and create menu items
 const activeStyle = {
  color: '#17181A',
  fontWeight: 600,
}
 // WE NEED TO ASK TO ADD ONE COLUMN TO AIRTABLE WITH CATEGORIES WITHOUT ACCENTS AS THIS WILL BE USED TO CREATE A DYNAMIC URL PATH
 return (
  <nav id="desktop-navbar">
        <div id="dk-navbar-left">
          <ul>
            {/* <li key="nouveautes"><Link to="/">Nouveautés</Link></li>
            {Test.map((category) =>
            <li key={category}><Link to="/">{category}</Link></li>
            )} */}
            <li><Link to="/" activeStyle={activeStyle} >Nouveautés</Link></li>
            <li><Link to="/assises" activeStyle={activeStyle} >Assises</Link></li>
            <li><Link to="/mobilier" activeStyle={activeStyle} >Mobilier</Link></li>
            <li><Link to="/luminaires" activeStyle={activeStyle} >Luminaires</Link></li>
            <li><Link to="/decoration" activeStyle={activeStyle} >Décoration</Link></li>
          </ul>
        </div>
        <div id="dk-navbar-right">
          <ul>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/"><FlagEN /></Link></li>
          </ul>
        </div>
  </nav>
 )
}

export default (props) => {
  return (<StaticQuery
    query={graphql`
      query MyNavbarQuery {
        allAirtable(filter: {data: {Images: {elemMatch: {size: {gte: 1}}}}}) {
          nodes {
            data {
              Categories
            }
          }
        }
      }
    `}
    render={data =>
      <NavbarContent data={data} />
    }
  />)
}
