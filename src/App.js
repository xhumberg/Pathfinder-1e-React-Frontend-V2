
import firebase from "firebase/app";
import './App.css';
import React from 'react';
import { Component } from 'react';
import CharacterSheetComponent from './components/CharacterSheetComponent';
import { Pane, Heading } from 'evergreen-ui'
import GoogleLoginButton from './components/Google/GoogleLoginButton';
import GoogleLogoutButton from './components/Google/GoogleLogoutButton';
import CharacterComponent from './components/CharacterComponent';

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDWl1kKGUhz7BwU1pjbRrlAG-pHQ6Y2AR4",
      authDomain: "xaviersplayground-6d2b8.firebaseapp.com",
      projectId: "xaviersplayground-6d2b8",
      storageBucket: "xaviersplayground-6d2b8.appspot.com",
      messagingSenderId: "182657713381",
      appId: "1:182657713381:web:72eafff2d865f28c53c00c",
      measurementId: "G-Q8CCQPBR9G"
    };

const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
// const CHARACTER_SERVICE_URL = "http://localhost:8080";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      googleToken: {},
      loggedIn: false,
      loadedCharacter: {},
      windowWidth: window.innerWidth
    }

    this.setState = this.setState.bind(this);
    this.loadCharacter = this.loadCharacter.bind(this);
    this.handleGoogleToken = this.handleGoogleToken.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
  }

  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  }
  
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    
    // Initialize Firebase
    if (!firebase.apps.length) {
       firebase.initializeApp({});
    }else {
       firebase.app(); // if already initialized, use that one
    }
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.handleResize);
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

    let appHeight = this.state.windowWidth < 1800 ? "auto" : "100vh";

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
      <Pane className="App">
        <Pane height={appHeight} backgroundImage="url(https://live.staticflickr.com/4145/5094919520_8220798ab9_b.jpg)">
          <CharacterSheetComponent character={this.state.loadedCharacter} windowWidth={this.state.windowWidth}/>
        </Pane>
        <GoogleLogoutButton handleLogout={this.handleGoogleLogout} name={this.state.googleToken.profileObj?.name} />
        <Heading>{this.state.windowWidth}</Heading>
      </Pane>
    )
  }
}
