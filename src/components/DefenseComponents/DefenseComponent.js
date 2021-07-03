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
      return <div className="DefenseComponent">
        <Pane display="flex" flexDirection="column" alignItems="center">
            <HpComponent />
            <DefensiveValuesComponent />
            <SpecialDefensesComponent />
        </Pane>
      </div>
  };
}