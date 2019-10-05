import React from 'react';

//import imagery
import Logo from '../../static/images/ic--mc.svg';


const Header = (props) => {
    return(
    <header>
      <div className="header">
       < Logo className="logo-header"/>    
      </div>
    </header>
    )
  }
  
  export default Header;