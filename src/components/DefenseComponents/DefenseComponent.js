import React from 'react';
import { Pane, Heading } from "evergreen-ui";
import HpComponent from './HpComponent';
import DefensiveValuesComponent from './DefensiveValuesComponent';
import SpecialDefensesComponent from './SpecialDefensesComponent';

export default class DefenseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.windowWidth > 1820) {
      return<Pane display="flex" flexDirection="column" alignItems="center" width="50%" height={400}>
            <HpComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
            <DefensiveValuesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
            <SpecialDefensesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
        </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" alignItems="center" width="100%" paddingBottom={8}>
      <HpComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
      <DefensiveValuesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
      <SpecialDefensesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
  </Pane>
    }
  };
}