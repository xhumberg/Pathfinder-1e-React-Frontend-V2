import './App.css';
import React from 'react';
import { Component } from 'react';
import CharacterSheetComponent from './components/CharacterSheetComponent';
import { Pane } from 'evergreen-ui'
import GoogleLoginButton from './components/Google/GoogleLoginButton';
import GoogleLogoutButton from './components/Google/GoogleLogoutButton';
import CharacterComponent from './components/CharacterComponent';

const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
// const CHARACTER_SERVICE_URL = "http://localhost:8080";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      googleToken: {},
      loggedIn: false,
      loadedCharacter: {}
    }

    console.log('I exist!')

    this.setState = this.setState.bind(this);
    this.loadCharacter = this.loadCharacter.bind(this);
    this.handleGoogleToken = this.handleGoogleToken.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
  }

  acceptNewGoogleToken(token) {
    this.setState({googleToken: token});
  }

  async loadCharacter(loadID) {
    console.log('Heyo')
    // var loadID = "eVbBMI8yjs"; //Manu
    console.log("Loading character " + loadID);
    var url = CHARACTER_SERVICE_URL + "/character/" + loadID;
    if (this.state.googleToken.tokenObj)
        url = url + "?token=" + this.state.googleToken.tokenObj.id_token;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({loadedCharacter: data});
  }

  async handleGoogleToken(token) {
    this.setState({googleToken: token, loggedIn: true});
    this.loadCharacter('Du0nzEj1wJ');
  }

  async handleGoogleLogout() {
    this.setState({googleToken: {}, loggedIn: false})
  }

  render() {
    if (!this.state.loggedIn) {
      return(
      <div className="App">
        <Pane display="flex" justifyContent="center" alignItems="center" padding={50} background="red" height="100vh">
          <Pane height={300} width={500} display="flex" alignItems="center" justifyContent="center" border={true} elevation={2} borderRadius={50} background="gray100">
            <GoogleLoginButton handleToken={this.handleGoogleToken} />
          </Pane>
        </Pane>
      </div>)
    }

    return (
      <div className="App" style={{
        backgroundImage: 'url("https://cdna.artstation.com/p/assets/covers/images/022/846/358/large/raphael-michael-1.jpg?1576901266")'
      }}>
        <Pane height="100vh">
          <CharacterSheetComponent character={this.state.loadedCharacter}/>
        </Pane>
        <GoogleLogoutButton handleLogout={this.handleGoogleLogout} name={this.state.googleToken.profileObj?.name} />
      </div>
    )
  }
}
