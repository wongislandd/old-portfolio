import React, { Component } from 'react';
import HomeScreen from './components/home_screen/HomeScreen'
import './App.css';
import './styles.css';


// How to update on GitHub.
// - npm run deploy
const AppScreen = {
  HOME_SCREEN : "HOME_SCREEN"
}
class App extends Component{
  state = {
    currentScreen : AppScreen.HOME_SCREEN
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
  }

  render (){
    switch (this.state.currentScreen){
        case AppScreen.HOME_SCREEN:
          return <HomeScreen />
    }
  }
}

export default App;
