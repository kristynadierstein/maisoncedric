// external libraries
import React from 'react';
import { Link } from "gatsby";

// import images
import FlagEN from '../../static/images/ic--flag--en.svg';
// import FlagFR from '../../static/images/ic--flag--fr.svg';

const NavbarContent = (props) => {
  const activeStyle = {
    color: '#17181A',
    fontWeight: 600
  }

  return (
    <nav id="desktop-navbar">
      <div id="dk-navbar-left">
        <ul>
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

export default NavbarContent
