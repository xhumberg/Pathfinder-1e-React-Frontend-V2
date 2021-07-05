import React from 'react';
import { Pane } from "evergreen-ui";

export default class CharacterImageComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="CharacterImageComponent">
      <Pane height={250} width={250} marginBottom={8} marginTop={8}>
        <img src={this.props.image} height="100%" width="undefined"/>
        </Pane>
      </div>
  };
}