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
          <CharacterImageComponent />
          <AbilitiesComponent />
          <StatDisplayComponent name="Initiative" value="0" width={250} marginTop={16} marginBottom={16}/>
          <StatDisplayComponent name="BAB" value="3" width={250} marginTop={16} marginBottom={16}/>
          <StatDisplayComponent name="CMB" value="+7" width={250} marginTop={16} marginBottom={16}/>
          <StatDisplayComponent name="CMD" value="17" width={250} marginTop={16} marginBottom={16}/>
        </Pane>
      </div>
  };
}