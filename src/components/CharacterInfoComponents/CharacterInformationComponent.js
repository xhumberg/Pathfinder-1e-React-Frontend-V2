import React from 'react';
import { Pane } from "evergreen-ui";
import CharacterImageComponent from './CharacterImageComponent';
import AbilitiesComponent from './AbilitiesComponent';
import StatDisplayComponent from '../StatDisplayComponent';

export default class CharacterInformationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="CharacterInformationComponent">
        <Pane margin={16} marginTop={0}>
          <CharacterImageComponent image={this.props.character.imageUrl}/>
          <AbilitiesComponent character={this.props.character}/>
          <StatDisplayComponent name="Initiative" value={this.props.character.initiative} width={250} marginTop={16} marginBottom={16}/>
          <StatDisplayComponent name="BAB" value={this.props.character.bab} width={250} marginTop={16} marginBottom={16}/>
          <StatDisplayComponent name="CMB" value={this.props.character.cmb} width={250} marginTop={16} marginBottom={16}/>
          <StatDisplayComponent name="CMD" value={this.props.character.cmd} width={250} marginTop={16} marginBottom={16}/>
        </Pane>
      </div>
  };
}