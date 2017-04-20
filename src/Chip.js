import React, { Component } from 'react';


class Chip extends Component {
  constructor(props){
   super(props);
   this.state={ count: props.initialNum}
  }

  handleClick = () => {
    this.setState({
         count: this.state.count - 1
      });
    this.props.decrement();
  }




  render() {
    const buttonStyle = {
      backgroundColor: this.props.colorString,
      borderRadius: 15,
      width: 82,
      height: 50,
      float: "left"
    };

    const divStyle = {
      display:"inline-block"
    };

    const paragraphStyle = {
      float: "right",
      paddingLeft: 25
    };
    return (
      <div>
      <div style={divStyle}>
        <button style={buttonStyle}> <img height="42" width="42" 
        src={this.props.imageString} alt="my" onClick={this.handleClick} /></button>
        <h3 style={paragraphStyle}>x{this.state.count}</h3>
      </div>
      </div>);
  }
}
export default Chip;
