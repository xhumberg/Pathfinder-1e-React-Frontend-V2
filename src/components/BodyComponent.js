import React from 'react';
import { Pane } from "evergreen-ui";
import CharacterInformationComponent from './CharacterInfoComponents/CharacterInformationComponent';
import DefenseComponent from './DefenseComponents/DefenseComponent';
import OffenseComponent from './OffenseComponents/OffenseComponent';
import InfoTabsComponent from './InfoTabsComponent';
import { PageSize } from './PageSize';

export default class BodyComponent extends React.Component {

  render() {

      if (this.props.windowWidth === PageSize.VERTICAL) {
        return <Pane display="flex" flexDirection="column" alignItems="center">
        <Pane display="flex" justifyContent="center">
          <CharacterInformationComponent character={this.props.character} windowWidth={this.props.windowWidth} />
          <Pane display="flex" flexDirection="column">
            <DefenseComponent character={this.props.character} windowWidth={this.props.windowWidth} />
            <OffenseComponent character={this.props.character} windowWidth={this.props.windowWidth} />
          </Pane>
        </Pane> 
        <InfoTabsComponent character={this.props.character} windowWidth={this.props.windowWidth} />
      </Pane>
      } else if (this.props.windowWidth === PageSize.TABLET || this.props.windowWidth === PageSize.MOBILE) {
        return <Pane display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <CharacterInformationComponent character={this.props.character} windowWidth={this.props.windowWidth} />
          <DefenseComponent character={this.props.character} windowWidth={this.props.windowWidth} />
          <OffenseComponent character={this.props.character} windowWidth={this.props.windowWidth} />
          <InfoTabsComponent character={this.props.character} windowWidth={this.props.windowWidth} />
        </Pane>
      } else {
        return <Pane width="100%"paddingTop={0} display="flex" className="BodyComponent">
            <CharacterInformationComponent character={this.props.character} windowWidth={this.props.windowWidth} />
            <Pane flex={1}>
                <Pane height={400} display="flex" width="100%" justifyContent="space-around" alignItems="center">
                    <DefenseComponent character={this.props.character} windowWidth={this.props.windowWidth} />
                    <OffenseComponent character={this.props.character} windowWidth={this.props.windowWidth} />
                </Pane>
                <InfoTabsComponent character={this.props.character} windowWidth={this.props.windowWidth} />
            </Pane>
        </Pane>
      }
  };
}