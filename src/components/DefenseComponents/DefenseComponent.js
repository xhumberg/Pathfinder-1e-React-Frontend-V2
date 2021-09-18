import React from 'react';
import { Pane } from "evergreen-ui";
import HpComponent from './HpComponent';
import DefensiveValuesComponent from './DefensiveValuesComponent';
import SpecialDefensesComponent from './SpecialDefensesComponent';
import { PageSize } from '../PageSize';

export default class DefenseComponent extends React.Component {

  render() {
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return<Pane display="flex" flexDirection="column" alignItems="center" width="50%" height={400} paddingTop={32}>
            <HpComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
            <DefensiveValuesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
        </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" alignItems="center" width="100%" paddingBottom={8}>
      <HpComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
      <DefensiveValuesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
  </Pane>
    }
  };
}