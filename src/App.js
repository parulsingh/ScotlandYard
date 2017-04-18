import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chips from './Chips.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
        <MuiThemeProvider>

      <div className="App">
        
         <Tabs>
          <Tab
            icon={<FontIcon className="material-icons">phone</FontIcon>}
            label="RECENTS">
             <Chips/>
          </Tab>
          <Tab
            icon={<FontIcon className="material-icons">favorite</FontIcon>}
            label="FAVORITES">
            <Chips/>
            </Tab>
          <Tab
            icon={<MapsPersonPin />}
            label="NEARBY">
            <Chips/>
            </Tab>
        </Tabs>
      </div>
        </MuiThemeProvider>

    );
  }
}

export default App;
