// external libraries
import React from 'react';
import { Link } from "gatsby";
import { injectIntl, FormattedMessage, changeLocale } from "gatsby-plugin-intl";

// import images
import FlagEN from '../../static/images/ic--flag--en.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';

export const getLocalizedFlag = (locale) => {
  if (locale === "fr") {
    return <Link onClick={() => changeLocale("en")}><FlagEN /></Link>
  } else if (locale === "en") {
    return <Link onClick={() => changeLocale("fr")}><FlagFR /></Link>
  }
}

const NavbarContent = (props) => {
  const activeStyle = {
    color: '#17181A',
    fontWeight: 600
  }
  // current language
  const locale = props.intl.locale;
  return (
    <nav id="desktop-navbar">
      <div id="dk-navbar-left">
        <ul>
          <li>
            <Link to="/" activeStyle={activeStyle} >
              <FormattedMessage id="navbar.tab1" />
            </Link>
          </li>
          <li>
            <Link to="/assises" activeStyle={activeStyle} >
              <FormattedMessage id="navbar.tab2" />
            </Link>
          </li>
          <li>
            <Link to="/mobilier" activeStyle={activeStyle} >
              <FormattedMessage id="navbar.tab3" />
            </Link>
          </li>
          <li>
            <Link to="/luminaires" activeStyle={activeStyle} >
              <FormattedMessage id="navbar.tab4" />
            </Link>
          </li>
          <li>
            <Link to="/decoration" activeStyle={activeStyle} >
              <FormattedMessage id="navbar.tab5" />
            </Link>
          </li>
        </ul>
      </div>
      <div id="dk-navbar-right">
        <ul>
          <li><Link to="/a-propos"><FormattedMessage id="navbar.tab6" /></Link></li>
          <li>{getLocalizedFlag(locale)}</li>
        </ul>
      </div>
    </nav>
  )
}

export default injectIntl(NavbarContent)
