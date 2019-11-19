import React from 'react';
import { Link } from "gatsby";
import { injectIntl, changeLocale } from "gatsby-plugin-intl";

//import imagery
import Logo from '../../static/images/ic--mc.svg';
import FlagEN from '../../static/images/ic--flag--en.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';

export const getLocalizedFlag = (locale) => {
  if (locale === "fr") {
    return <div onClick={() => changeLocale("en")}><FlagEN/></div>
  } else {
    return <div onClick={() => changeLocale("fr")}><FlagFR/></div>
  }
}

const Header = (props) => {
  // current language
  const locale = props.intl.locale;
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
        {getLocalizedFlag(locale)}
      </div>
    </header>
  )
}

export default injectIntl(Header);
