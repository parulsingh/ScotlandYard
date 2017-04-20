import React, { Component } from 'react';
import './App.css';
import Chips from './Chips.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Search from 'material-ui/svg-icons/action/search';
import bluespy from './bluespy.png';
import greenspy from './greenspy.png';
import yellowspy from './yellowspy.png';
import redspy from './redspy.png';
import blackspy from './blackspy.png';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App"> 
         <Tabs>
          <Tab
            icon={<Search style={divStyle} />}
            label="Blue Spy">
             <Chips/>
          </Tab>
          <Tab
            icon={<Search />}
            label="Red Spy">
            <Chips/>
          </Tab>
          <Tab
            icon={<Search />}
            label="Green Spy">
            <Chips/>
          </Tab>
          <Tab
            icon={<Search />}
            label="Black Spy">
            <Chips/>
          </Tab>
          <Tab
            icon={<Search />}
            label="Yellow Spy">
            <Chips/>
          </Tab>
         </Tabs>
        </div>
      </MuiThemeProvider>

    );
  }
}

    const divStyle = {
      color:"blue"
    };

export default App;
