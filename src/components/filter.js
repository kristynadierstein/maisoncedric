import React from "react";

class Filter extends React.Component{
  //function calling the toggle check function and pass it the argument the name from the props
  handleClick(){
    this.props.toggleChecked(this.props.name)
  }

  render() {
    return(
      <li key={this.props.name} className="checkbox-list">
        <input type="checkbox" checked={this.props.checked} onClick={this.handleClick.bind(this)} className="checkboxes-filters"/>
        {this.props.name}
      </li>
    )
  }
}

export default Filter
