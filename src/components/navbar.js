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
            <nav id="navbar">
                <div id="navbar-left">
                    <ul>
                        <li><Link exact={true} activeClassName="active" to="">Nouveautés</Link></li>
                        <li><Link activeClassName="active" to="/assises">Assises</Link></li>
                        <li><Link activeClassName="active" to="/mobilier">Mobilier</Link></li>
                        <li><Link activeClassName="active" to="/luminaires">Luminaires</Link></li>
                        <li><Link activeClassName="active" to="/decoration">Décoration</Link></li>
                    </ul>
                </div>
                <div id="navbar-right">
                    <ul>
                        <li><Link activeClassName="active" to="#">À propos</Link></li>
                        <li><Link activeClassName="active" to="#">< FlagEN /></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar
