//import libraries
import React from "react";
import { Link } from "gatsby";
import Sidebar from "react-sidebar";
import Modal from 'react-responsive-modal';

//import imagery
import Esc from '../../static/images/ic--esc.svg';

//import components
import ModalContent from "../components/modal-content.js";

class MobileNavbar extends React.Component{
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
    
    const { open } = this.state;

    return(
      <React.Fragment>     
      <nav id="mobile-navbar">
        <Sidebar
          sidebar={
          <div>
            <div className="mb-sidebar-header">
              <h3>Categories</h3>
              < Esc onClick={this.handleClick}/>
            </div>
            <ul className="mb-sidebar-list">
              <li><Link to="/" activeStyle={activeStyle} >Nouveautés</Link></li>
              <li><Link to="/assises" activeStyle={activeStyle} >Assises</Link></li>
              <li><Link to="/mobilier" activeStyle={activeStyle} >Mobilier</Link></li>
              <li><Link to="/luminaires" activeStyle={activeStyle} >Luminaires</Link></li>
              <li><Link to="/decoration" activeStyle={activeStyle} >Décoration</Link></li>
            </ul>
          <div onClick={this.onOpenModal} className="mb-sidebar-btn-contact">Contactez-nous </div>
          <Modal open={open} onClose={this.onCloseModal} closeIconSize={20} center closeIcon="closeIcon">
            <ModalContent />
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
        <div className="mb-navbar-apropos">
          <Link to="/a-propos" activeStyle={activeStyle} >À propos</Link>
        </div>
      </nav>
      </React.Fragment>
      )
    }
  } 

  export default MobileNavbar