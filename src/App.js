import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import BackDrop from "./components/BackDrop/BackDrop";
import Slideshow from './components/Slide/Slide';
import './components/pagesEX/first'
import './App.css'

class App extends Component {

  
state = {
  SideDrawerOpen : false
};

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen : !prevState.sideDrawerOpen};
    })
  }

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        
        <main>
          <div>
            <Slideshow />
          </div>
        </main>

      </div>
    );
  }
}

export default App;

