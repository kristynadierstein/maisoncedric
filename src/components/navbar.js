import React, { Component } from 'react';
import { Link } from "gatsby";
import Sidebar from "react-sidebar";

//import imagery
import FlagEN from '../../static/images/ic--flag--en.svg';
import Esc from '../../static/images/ic--esc.svg';
import Env from '../../static/images/ic-mail.svg';
import Phone from '../../static/images/ic-phone.svg';
import FlagFR from '../../static/images/ic--flag--fr.svg';

//import components
import Modal from 'react-responsive-modal';

class navbar extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
      open: false,
    };

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open });
  }

  handleClick = (e) => {
    this.setState({ sidebarOpen: false });
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render (){
    const activeStyle = {
      color: '#17181A',
      fontWeight: 600,
    }
    const { open } = this.state

    return(
      <React.Fragment>
        <nav id="desktop-navbar">
          <div id="dk-navbar-left">
            <ul>
              <li><Link to="" activeStyle={activeStyle} >Nouveautés</Link></li>
              <li><Link to="/assises" activeStyle={activeStyle} >Assises</Link></li>
              <li><Link to="/mobilier" activeStyle={activeStyle}>Mobilier</Link></li>
              <li><Link to="/luminaires" activeStyle={activeStyle} >Luminaires</Link></li>
              <li><Link to="/decoration" activeStyle={activeStyle} >Décoration</Link></li>
            </ul>
          </div>
          <div id="dk-navbar-right">
            <ul>
              <li><Link to="/a-propos" activeStyle={activeStyle} >À propos</Link></li>
              <li><Link to="#" activeStyle={activeStyle} >< FlagEN /></Link></li>
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
                <li><Link to="" activeStyle={activeStyle} >Nouveautés</Link></li>
                <li><Link to="/assises" activeStyle={activeStyle} >Assises</Link></li>
                <li><Link to="/mobilier" activeStyle={activeStyle} >Mobilier</Link></li>
                <li><Link to="/luminaires" activeStyle={activeStyle} >Luminaires</Link></li>
                <li><Link to="/decoration" activeStyle={activeStyle} >Décoration</Link></li>
              </ul>
            <div onClick={this.onOpenModal} className="mb-sidebar-btn-contact">Contactez-nous </div>
            <Modal open={open} onClose={this.onCloseModal} closeIconSize="20" center closeIcon="closeIcon">
              <h2>Contactez-nous</h2>
              <hr></hr>
              <div className="modal-section">
                <Env className="modal-env-svg"/>
                <a href="/#" className="email-modal">contact@maisoncedric.com</a>
              </div>
              <hr></hr>
              <div className="modal-section">
                <Phone />
                <div className="modal-phone-flag">
                  <FlagFR />
                  <a href="/#" className="phone-modal" > +33 6 24 55 52 51</a>
                </div>
              </div>
            </Modal>
            </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            sidebarClassName = "mobile-sidebar"
            >
          <div onClick={() => this.onSetSidebarOpen(true)} className="mb-navbar-btn-categories" >
            <div className="mb-navbar-empty-category">
              Categories
            </div>
          </div>
          </Sidebar>
          <div className="mb-navbar-filtres">
            <Link to="/a-propos" activeStyle={activeStyle} >À propos</Link>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default navbar
