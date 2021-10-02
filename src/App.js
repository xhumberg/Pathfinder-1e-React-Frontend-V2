
import firebase from "firebase/app";
import './App.css';
import React from 'react';
import { Component } from 'react';
import { Pane, Heading } from 'evergreen-ui'
import GoogleLoginButton from './components/Google/GoogleLoginButton';
import GoogleLogoutButton from './components/Google/GoogleLogoutButton';
import { PageSize } from "./components/PageSize";
import PathfinderCharacter from "./components/PathfinderCharacter";
import LoadPane from "./components/LoadPane";

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

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      googleToken: {},
      loggedIn: false,
      windowWidth: this.determineWindowWidth(),
      characterComponent: {}
    }

    this.setState = this.setState.bind(this);
    this.handleGoogleToken = this.handleGoogleToken.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
    this.forceUpdate = this.forceUpdate.bind(this);
  }

  handleResize = (e) => {
    this.setState({ 
      windowWidth: this.determineWindowWidth(),
    });
  }

  determineWindowWidth() {
    let pageSize = PageSize.DEFAULT;
    if (window.innerWidth < 1820) {
      pageSize = PageSize.VERTICAL;
    }
    if (window.innerWidth < 1100) {
      pageSize = PageSize.TABLET;
    }
    if (window.innerWidth < 750) {
      pageSize = PageSize.MOBILE
    }

    return pageSize;
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

  async handleGoogleToken(token) {
    this.setState({googleToken: token, loggedIn: true});
    console.log("XAH: google token!")
  }

  async handleGoogleLogout() {
    this.setState({googleToken: {}, loggedIn: false})
  }

  render() {
    // const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
    const CHARACTER_SERVICE_URL = "http://localhost:8080"; 

    if (!this.state.loggedIn) {
      return(
      <div className="App">
        <Pane display="flex" justifyContent="center" alignItems="center" padding={50} background="white" height="100vh">
          <Pane height={300} width={500} display="flex" alignItems="center" justifyContent="center" border={true} elevation={2} borderRadius={50} background="gray100">
            <GoogleLoginButton handleToken={this.handleGoogleToken} />
          </Pane>
        </Pane>
      </div>)
    }

    let urlParameter = 'load';
    if (window.location.href.includes('/') && window.location.href.split('/').length === 4) {
      urlParameter = window.location.href.split('/')[3];
      if (urlParameter === "") {
        urlParameter = 'load';
      }
    }

    console.log(urlParameter)

    if (urlParameter === "load") {
      return (
        <Pane>
          <GoogleLogoutButton handleLogout={this.handleGoogleLogout} name={this.state.googleToken.profileObj?.name} />
          <LoadPane forceReload={this.forceUpdate} token={this.state.googleToken.tokenObj?.id_token} characterUrl={CHARACTER_SERVICE_URL}/>
        </Pane>
      )
    }

    return (
      <Pane className="App">
        <Pane backgroundImage="url(https://wallpaperaccess.com/full/6157372.jpg)" backgroundAttachment="scroll">
          <PathfinderCharacter 
            windowWidth={this.state.windowWidth} 
            characterId={urlParameter}
            token={this.state.googleToken} 
            handleGoogleLogout={this.handleGoogleLogout} 
            loggedInName={this.state.googleToken.profileObj?.name}
            url={CHARACTER_SERVICE_URL}
          />
        </Pane>
      </Pane>
    )
  }
}
