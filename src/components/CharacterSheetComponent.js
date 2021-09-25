import React from 'react';
import HeaderComponent from './HeaderComponent';
import BodyComponent from './BodyComponent';
import { Pane } from 'evergreen-ui'

export default class CharacterSheetComponent extends React.Component {

  render() {
      return <Pane className="CharacterSheetComponent">
        <HeaderComponent character={this.props.character} 
          windowWidth={this.props.windowWidth} 
          handleGoogleLogout={this.props.handleGoogleLogout} 
          loggedInName={this.props.loggedInName}
        />
        <BodyComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
      </Pane>
  };
}