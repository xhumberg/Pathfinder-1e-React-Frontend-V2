import React from 'react';
import { Pane, Heading } from "evergreen-ui";
import CharacterImageComponent from './CharacterImageComponent';
import AbilitiesComponent from './AbilitiesComponent';
import StatDisplayComponent from '../StatDisplayComponent';

export default class CharacterInformationComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.windowWidth > 750 & this.props.windowWidth < 1100) {
      return <Pane margin={16} marginTop={0} className="CharacterInformationComponent" display="flex" flexDirection="column" alignItems="center">
      <CharacterImageComponent image={this.props.character.imageUrl} size={500}/>
      <AbilitiesComponent character={this.props.character} width={700} size={200}/>
      <StatDisplayComponent name="Initiative" value={this.props.character.initiative} width={700} marginTop={16}/>
      <StatDisplayComponent name="BAB" value={this.props.character.bab} width={700} marginTop={16}/>
      <StatDisplayComponent name="CMB" value={this.props.character.cmb} width={700} marginTop={16}/>
      <StatDisplayComponent name="CMD" value={this.props.character.cmd} width={700} marginTop={16}/>
    </Pane>
    } else if (this.props.windowWidth >= 1100) {
      return <Pane className="CharacterInformationComponent" width={350} minWidth={350} height={800} display="flex" flexDirection="column" alignItems="center">
          <CharacterImageComponent image={this.props.character.imageUrl} size={200}/>
          <AbilitiesComponent character={this.props.character} size={0}/>
          <StatDisplayComponent name="Initiative" value={this.props.character.initiative} width={250} marginTop={16}/>
          <StatDisplayComponent name="BAB" value={this.props.character.bab} width={250} marginTop={16}/>
          <StatDisplayComponent name="CMB" value={this.props.character.cmb} width={250} marginTop={16}/>
          <StatDisplayComponent name="CMD" value={this.props.character.cmd} width={250} marginTop={16}/>
        </Pane>
    } else {
      return  <Pane margin={16} marginTop={0} className="CharacterInformationComponent" alignItems="center" display="flex" flexDirection="column">
      <CharacterImageComponent image={this.props.character.imageUrl} size="70vw"/>
      <AbilitiesComponent character={this.props.character} width="100vw" size={300} rowHeight={60}/>
      <StatDisplayComponent name="Initiative" value={this.props.character.initiative} width="100vw"/>
      <StatDisplayComponent name="BAB" value={this.props.character.bab} width="100vw"/>
      <StatDisplayComponent name="CMB" value={this.props.character.cmb} width="100vw"/>
      <StatDisplayComponent name="CMD" value={this.props.character.cmd} width="100vw"/>
    </Pane>
    }
  };
}