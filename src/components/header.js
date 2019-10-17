import React from 'react';
import { Link } from "gatsby";

//import imagery
import Logo from '../../static/images/ic--mc.svg';
import FlagEN from '../../static/images/ic--flag--en.svg';

const Header = (props) => {
  return(
    <header>
      <div className="dk-header">
       < Logo className="dk-logo-header"/>
      </div>
      <div className="mb-header">
       < Logo className="mb-logo-header"/>
      <Link to="#">< FlagEN id="mb-logo" /></Link>
      </div>
    </header>
  )
}

export default Header;
