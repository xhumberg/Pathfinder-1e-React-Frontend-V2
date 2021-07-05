import React from 'react';
import { Pane, Text, Heading, Tab, Button, Pagination } from "evergreen-ui";
import CharacterInformationComponent from './CharacterInfoComponents/CharacterInformationComponent';
import DefenseComponent from './DefenseComponents/DefenseComponent';
import OffenseComponent from './OffenseComponents/OffenseComponent';
import InfoTabsComponent from './InfoTabsComponent';

export default class BodyComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="BodyComponent">
        <Pane width="100%" padding={16} paddingTop={0} display="flex">
            <CharacterInformationComponent character={this.props.character}/>
            <Pane flex={1}>
                <Pane height={400} display="flex" width="100%" justifyContent="space-around" alignItems="center">
                    <DefenseComponent character={this.props.character}/>
                    <OffenseComponent character={this.props.character}/>
                </Pane>
                <InfoTabsComponent character={this.props.character}/>
            </Pane>
        </Pane>
      </div>
  };
}