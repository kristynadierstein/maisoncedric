import React from "react"

class Navbartest extends React.Component {
    state = {
      activeIndex: null
    }
  
    handleTab = (index) => this.setState({ activeIndex: index })
  
    render() {
      return <div>
        <Tab name="Nouveautés" index={0} isActive={ this.state.activeIndex===0 } onClick={ this.handleTab } />
        <Tab name="Assises" index={1} isActive={ this.state.activeIndex===1 } onClick={ this.handleTab }/>
      </div>
    }
  }


  
  class Tab extends React.Component {
    handleTab = () => this.props.onClick(this.props.index)
    
    render() {
      return <button
        type='button'
        className={
          this.props.isActive ? 'active' : null
        }
        onClick={ this.handleTab }
      >
        <span>{ this.props.name }</span>
      </button>
    }
  }
  
export default Navbartest