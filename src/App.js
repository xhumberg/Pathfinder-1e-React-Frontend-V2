import './App.css';
import React from 'react';
import { Component } from 'react';
import CharacterSheetComponent from './components/CharacterSheetComponent';
import { Pane } from 'evergreen-ui'
import GoogleLoginButton from './components/Google/GoogleLoginButton';
import GoogleLogoutButton from './components/Google/GoogleLogoutButton';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      googleToken: {},
      loggedIn: false
    }

    this.handleGoogleToken = this.handleGoogleToken.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
  }

  async handleGoogleToken(token) {
    this.setState({googleToken: token, loggedIn: true})
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
        backgroundImage: 'url("https://scontent-lax3-1.xx.fbcdn.net/v/t1.15752-9/202095020_322692522840185_2140707559428348378_n.png?_nc_cat=109&ccb=1-3&_nc_sid=ae9488&_nc_ohc=JULP3aQAHQIAX8Wjkuk&tn=GbwpLf3bl2cMi2rg&_nc_ht=scontent-lax3-1.xx&oh=b25e7775cbdd7b53e2dd804f2b6236b8&oe=60E44696")'
      }}>
        <Pane height="100vh">
          <CharacterSheetComponent />
        </Pane>
        <GoogleLogoutButton handleLogout={this.handleGoogleLogout} name={this.state.googleToken.profileObj?.name} />
      </div>
    )
  }
}
