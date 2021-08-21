import React from 'react';
import { Pane } from "evergreen-ui";

export default class CharacterImageComponent extends React.Component {

  render() {
    return <Pane height={this.props.size} width={this.props.size} marginBottom={8} marginTop={8}>
        <img src={this.props.image} height="100%" width="undefined" alt="Character"/>
        </Pane>
  };
}