import React from 'react';
import { Link } from "gatsby";
import Sidebar from "react-sidebar";

//import imagery
import FlagEN from '../../static/images/ic--flag--en.svg';
// import FlagFR from '../../static/images/ic--flag--fr.svg';
import Esc from '../../static/images/ic--esc.svg';

class NavBar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

    handleClick = (e) => {
        this.setState({
            sidebarOpen: false
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
                            <li><Link to="/a-propos">À propos</Link></li>
                            <li><Link to="#">< FlagEN /></Link></li>
                        </ul>
                    </div>
                </nav>

                <nav id="mobile-navbar">
                    <Sidebar
                        sidebar={
                            <div>
                                <div className="mb-sidebar-header">
                                    <h3>Categories</h3>
                                    < Esc onClick={this.handleClick}/>
                                </div>
                                <ul className="mb-sidebar-list">
                                    <li><Link to="">Nouveautés</Link></li>
                                    <li><Link to="/assises">Assises</Link></li>
                                    <li><Link to="/mobilier">Mobilier</Link></li>
                                    <li><Link to="/luminaires">Luminaires</Link></li>
                                    <li><Link to="/decoration">Décoration</Link></li>
                                </ul>
                                <Link to="#" className="mb-sidebar-btn-contact">Contactez-nous </Link>
                            </div>
                        }
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        sidebarClassName = "mobile-sidebar"
                    >
                        <Link onClick={() => this.onSetSidebarOpen(true)} className="mb-navbar-btn-categories">
                            Categories
                        </Link>
                    </Sidebar>
                    <div className="mb-navbar-filtres">
                        <Link to="a-propos">À propos</Link>
                    </div> 
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar
