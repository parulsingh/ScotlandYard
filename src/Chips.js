import React, { Component } from 'react';
import Chip from './Chip.js';
import cab from './cab2.png';
import tube from './tube.png';
import bus from './bus.png';

class Chips extends Component {

	constructor(props) {
	    super(props);
	    this.state = {sum: 24};
  	}

	decrement = () => {
    	this.setState({
    		sum: (this.state.sum-1)
    	});
  	}

	render() {
		return(
		<div className="App">
		  <Chip initialNum={11} decrement={this.decrement} imageString={cab} colorString={"#ffd700"}/>
	      <Chip initialNum={9} decrement={this.decrement} imageString={bus} colorString={"#009099"}/>
	      <Chip initialNum={4} decrement={this.decrement} imageString={tube} colorString={"#e72d2d"}/>
      	  <h3>{this.state.sum}</h3>
      	</div>);
	}
}
export default Chips;
