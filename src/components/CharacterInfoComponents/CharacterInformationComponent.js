import React from 'react';
import { Pane } from "evergreen-ui";
import CharacterImageComponent from './CharacterImageComponent';
import AbilitiesComponent from './AbilitiesComponent';
import StatDisplayComponent from '../StatDisplayComponent';
import { PageSize } from '../PageSize';

export default class CharacterInformationComponent extends React.Component {

  render() {
    if (this.props.windowWidth === PageSize.TABLET) {
      return <Pane margin={16} marginTop={0} className="CharacterInformationComponent" display="flex" flexDirection="column" alignItems="center">
      <CharacterImageComponent image={this.props.character.getJson().imageUrl} size={500}/>
      <AbilitiesComponent character={this.props.character} width={700} size={200}/>
      <StatDisplayComponent name="Initiative" value={this.props.character.getJson().initiative} width={700} marginTop={16}/>
      <StatDisplayComponent name="BAB" value={this.props.character.getJson().bab} width={700} marginTop={16}/>
      <StatDisplayComponent name="CMB" value={this.props.character.getJson().cmb} width={700} marginTop={16}/>
      <StatDisplayComponent name="CMD" value={this.props.character.getJson().cmd} width={700} marginTop={16}/>
    </Pane>
    } else if (this.props.windowWidth === PageSize.VERTICAL || this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane className="CharacterInformationComponent" width={350} minWidth={350} height={800} display="flex" flexDirection="column" alignItems="center">
          <CharacterImageComponent image={this.props.character.getJson().imageUrl} size={200}/>
          <AbilitiesComponent character={this.props.character} size={0}/>
          <StatDisplayComponent name="Initiative" value={this.props.character.getJson().initiative} width={250} marginTop={16}/>
          <StatDisplayComponent name="BAB" value={this.props.character.getJson().bab} width={250} marginTop={16}/>
          <StatDisplayComponent name="CMB" value={this.props.character.getJson().cmb} width={250} marginTop={16}/>
          <StatDisplayComponent name="CMD" value={this.props.character.getJson().cmd} width={250} marginTop={16}/>
        </Pane>
    } else {
      return  <Pane margin={16} marginTop={0} className="CharacterInformationComponent" alignItems="center" display="flex" flexDirection="column" width="100%">
        <CharacterImageComponent image={this.props.character.getJson().imageUrl} size="70vw"/>
        <AbilitiesComponent character={this.props.character} width="100%" size={300} rowHeight={60}/>
        <StatDisplayComponent name="Initiative" value={this.props.character.getJson().initiative} width="100%"/>
        <StatDisplayComponent name="BAB" value={this.props.character.getJson().bab} width="100%"/>
        <StatDisplayComponent name="CMB" value={this.props.character.getJson().cmb} width="100%"/>
        <StatDisplayComponent name="CMD" value={this.props.character.getJson().cmd} width="100%"/>
      </Pane>
    }
  };
}