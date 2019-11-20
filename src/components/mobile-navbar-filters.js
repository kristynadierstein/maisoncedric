//import libraries
import React from 'react'
import Sidebar from 'react-sidebar'
import Modal from 'react-responsive-modal'
import { Link, injectIntl, FormattedMessage } from 'gatsby-plugin-intl'

//import components
import ModalContent from '../components/modal-content.js'
import Filter from '../components/filter.js'

//import imagery
import Esc from '../../static/images/ic--esc.svg'


class MobileNavbarFilters extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      sidebarOpen: false,
      open: false,
      sidebarOpenFilters: false,
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.onSetSidebarOpenFilters = this.onSetSidebarOpenFilters.bind(this)
  }

  onSetSidebarOpen = (open) => {
    this.setState({ sidebarOpen: open })
  }

  onSetSidebarOpenFilters = (open) => {
    this.setState({ sidebarOpenFilters: open })
  }

  handleClick = (e) => {
    this.setState({ sidebarOpen: false })
  }

  handleClickFilters = (e) => {
    this.setState({ sidebarOpenFilters: false })
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
                  <li>
                    <Link to={ `/`} activeStyle={activeStyle}>
                      <FormattedMessage id="navbar.tab1"/>
                    </Link>
                  </li>
                  <li>
                    <Link to={ `/assises/`} activeStyle={activeStyle}>
                      <FormattedMessage id="navbar.tab2"/>
                    </Link>
                  </li>
                  <li>
                    <Link to={ `/mobilier/`} activeStyle={activeStyle}>
                      <FormattedMessage id="navbar.tab3"/>
                    </Link>
                  </li>
                  <li>
                    <Link to={ `/luminaires/`} activeStyle={activeStyle}>
                      <FormattedMessage id="navbar.tab4"/>
                    </Link>
                  </li>
                  <li>
                    <Link to={ `/decoration/`} activeStyle={activeStyle}>
                      <FormattedMessage id="navbar.tab5"/>
                    </Link>
                  </li>
                </ul>
                <div onClick={this.onOpenModal} className="mb-sidebar-btn-contact">
                  <FormattedMessage id="a-propos.titre"/>
                </div>
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
          <Sidebar
            sidebar={
              <div>
                <div className="mb-sidebar-header">
                  <h3>{this.props.value}</h3>
                  <Esc onClick={this.handleClickFilters}/>
                </div>
                <ul className="mb-sidebar-list">
                  {this.props.subCategories.map((subCategory) =>
                    <Filter
                      name={subCategory.name}
                      checked={subCategory.checked}
                      toggleChecked={this.props.toggleChecked}
                      key={subCategory.name}/>
                  )}
                </ul>
              </div>
            }
            open={this.state.sidebarOpenFilters}
            onSetOpen={this.onSetSidebarOpenFilters}
            sidebarClassName = "mobile-sidebar">
            <div onClick={() => this.onSetSidebarOpenFilters(true)} className="mb-navbar-btn-filters">
              <div className="mb-navbar-filtres">
                Filters
              </div>
            </div>
          </Sidebar>
        </nav>
      </React.Fragment>
    )
  }
}

export default injectIntl(MobileNavbarFilters)
