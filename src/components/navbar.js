import React from 'react';

//import react-router-dom to be use Navlink and active tabs styling, once pages done, add switch to create routes
import {
    Route,
    NavLink,
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';


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
            <Router>
                <nav id="navbar">
                    <div id="navbar-left">
                        <ul>
                            <li><NavLink exact={true} activeClassName="active" to="#">Nouveautés</NavLink></li>
                            <li><NavLink activeClassName="active" to="#">Assises</NavLink></li>
                            <li><NavLink activeClassName="active" to="#">Mobilier</NavLink></li>
                            <li><NavLink activeClassName="active" to="#">Luminaire</NavLink></li>
                            <li><NavLink activeClassName="active" to="#">Décoration</NavLink></li>
                        </ul>
                    </div>
                    <div id="navbar-right">
                        <ul>
                            <li><NavLink activeClassName="active" to="#">À propos</NavLink></li>
                            <li><NavLink activeClassName="active" to="#">< FlagEN /></NavLink></li>
                        </ul>
                    </div>
                </nav>
            </Router>
        )
    }
}

export default NavBar