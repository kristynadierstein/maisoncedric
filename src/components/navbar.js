import React from 'react';
import { Link } from "gatsby";


//import imagery
import FlagEN from '../../static/images/ic--flag--en.svg';
// import FlagFR from '../../static/images/ic--flag--fr.svg';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            navbarIsOpen: false
        }
    }

    handleClick = (e) => {
        this.setState({
            navbarIsOpen: !this.state.navbarIsOpen
        })
    }

    render (){
        return(
            <React.Fragment>
                <nav id="desktop-navbar">
                    <div id="dk-navbar-left">
                        <ul>
                            <li><Link to="">Nouveautés</Link></li>
                            <li><Link to="/assises">Assises</Link></li>
                            <li><Link to="/mobilier">Mobilier</Link></li>
                            <li><Link to="/luminaires">Luminaires</Link></li>
                            <li><Link to="/decoration">Décoration</Link></li>
                        </ul>
                    </div>
                    <div id="dk-navbar-right">
                        <ul>
                            <li><Link to="#">À propos</Link></li>
                            <li><Link to="#">< FlagEN /></Link></li>
                        </ul>
                    </div>
                </nav>

                <nav id="mobile-navbar">
                    <div className="mb-navbar-categories">
                    </div>
                    <div className="mb-navbar-filtres">
                    </div>
                </nav>



            </React.Fragment>
        )
    }
}

export default NavBar
