import React from 'react';
import { Link } from "gatsby";

//import imagery
import Logo from '../../static/images/ic--mc.svg';
import FlagEN from '../../static/images/ic--flag--en.svg';

const Header = (props) => {
  return(
    <header>
      <div className="dk-header">
      <Link to="/">
        <Logo className="dk-logo-header"/>
      </Link>
      </div>
      <div className="mb-header">
        <Link to="/">
          <Logo className="mb-logo-header"/>
        </Link>
      <Link to="/"><FlagEN id="mb-logo" /></Link>
      </div>
    </header>
  )
}

export default Header;
