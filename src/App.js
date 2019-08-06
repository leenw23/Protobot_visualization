import React, { Component } from 'react';
import './App.css';

import { TreeGrid } from "./components/TreeGrid/TreeGrid.js";
import { RightSideBar } from "./components/RightSideBar/RightSideBar.js";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div class="background">
        <div class="leftGrid">
          <TreeGrid />
        </div>
        <div class="rightGrid">
          <RightSideBar />
        </div>
      </div>
    );
  }  
}

export default App;
