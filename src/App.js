import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chips from './Chips.js';
import cab from './cab2.png';
import tube from './tube.png';
import bus from './bus.png';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Chips initialNum={11} imageString={cab} colorString={"#ffd700"}/>
        <Chips initialNum={9} imageString={bus} colorString={"#009099"}/>
        <Chips initialNum={4} imageString={tube} colorString={"#e72d2d"}/>
         <Tabs>
          <Tab
   
          />
          <Tab

          />
          <Tab

          />
        </Tabs>
      </div>
    );
  }
}

export default App;
