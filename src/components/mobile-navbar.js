//import libraries
import React from 'react'
import Sidebar from 'react-sidebar'
import Modal from 'react-responsive-modal'
import { injectIntl, FormattedMessage, Link } from 'gatsby-plugin-intl'

//import imagery
import Esc from '../../static/images/ic--esc.svg'

//import components
import ModalContent from '../components/modal-content.js'

class MobileNavbar extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      open: false,
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open })
  }

  handleClick = (e) => {
    this.setState({ sidebarOpen: false })
  }

  onOpenModal = () => {
    this.setState({ open: true })
  }

  onCloseModal = () => {
    this.setState({ open: false })
  }


  render (){
    const activeStyle = {
      color: '#17181A',
      fontWeight: 600,
    }
    const { open } = this.state
    const locale = this.props.intl.locale

    return(
      <React.Fragment>
        <nav id="mobile-navbar">
          <Sidebar
            sidebar={
              <div>
                <div className="mb-sidebar-header">
                  <h3><FormattedMessage id="navbar.tabs_title"/></h3>
                  <Esc onClick={this.handleClick}/>
                </div>
                <ul className="mb-sidebar-list">
                  <li><Link to={ `/${locale}/` } activeStyle={activeStyle}><FormattedMessage id="navbar.tab1"/></Link></li>
                  <li><Link to={ `/${locale}/assises` } activeStyle={activeStyle}><FormattedMessage id="navbar.tab2"/></Link></li>
                  <li><Link to={ `/${locale}/mobilier` } activeStyle={activeStyle}><FormattedMessage id="navbar.tab3"/></Link></li>
                  <li><Link to={ `/${locale}/luminaires` } activeStyle={activeStyle}><FormattedMessage id="navbar.tab4"/></Link></li>
                  <li><Link to={ `/${locale}/decoration` } activeStyle={activeStyle}><FormattedMessage id="navbar.tab5"/></Link></li>
                </ul>
              <div onClick={this.onOpenModal} className="mb-sidebar-btn-contact"><FormattedMessage id="a-propos.titre"/></div>
              <Modal open={open} onClose={this.onCloseModal} closeIconSize={20} center closeIcon="closeIcon">
                <ModalContent/>
              </Modal>
              </div>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            sidebarClassName = "mobile-sidebar">
            <div onClick={() => this.onSetSidebarOpen(true)} className="mb-navbar-btn-categories">
              <div className="mb-navbar-empty-category">
                <FormattedMessage id="navbar.tabs_title"/>
              </div>
            </div>
          </Sidebar>
          <div className="mb-navbar-apropos">
            <Link to={ `${locale}/a-propos` } activeStyle={activeStyle}><FormattedMessage id="navbar.tab6"/></Link>
          </div>
        </nav>
      </React.Fragment>
    )
  }
}

export default injectIntl(MobileNavbar)
