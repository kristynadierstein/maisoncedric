import React from 'react';
import { Link } from "gatsby";

//import imagery
import FlagEN from '../../static/images/ic--flag--en.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';

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
            <div id="navbar">
                <div id="navbar-left">
                    <ul className={`mobile-menu ${this.state.navbarIsOpen ? 'show-menu' : 'hide-menu' } `}>
                        <li><Link to="#">Nouveautés</Link></li>
                        <li><Link to="#">Assises</Link></li>
                        <li><Link to="#">Mobilier</Link></li>
                        <li><Link to="#">Luminaire</Link></li>
                        <li><Link to="#">Décoration</Link></li>
                    </ul>
                </div>
                <div id="navbar-right">
                    <ul className={`mobile-menu ${this.state.navbarIsOpen ? 'show-menu' : 'hide-menu' } `}>
                        <li><Link to="#">À propos</Link></li>
                        < FlagEN />
                    </ul>

                </div>
            </div>
        )
    }
}

export default NavBar