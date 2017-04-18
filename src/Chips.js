import React, { Component } from 'react';
import Chip from './Chip.js';
import cab from './cab2.png';
import tube from './tube.png';
import bus from './bus.png';

class Chips extends Component {
	render() {
		<div className="App">
		 <Chip initialNum={11} imageString={cab} colorString={"#ffd700"}/>
              <Chip initialNum={9} imageString={bus} colorString={"#009099"}/>
              <Chip initialNum={4} imageString={tube} colorString={"#e72d2d"}/>
              </div>
	}
}