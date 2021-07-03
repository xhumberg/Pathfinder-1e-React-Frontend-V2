import React from 'react';
import { Pane } from "evergreen-ui";
import ACComponent from './ACComponent';
import SavesComponent from './SavesComponent';

export default class DefensiveValuesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return <div className="DefensiveValuesComponent">
    <Pane 
      display="flex" 
      padding={16}
      paddingTop={0}
      paddingBottom={0}
      borderRadius={3}
      justifyContent="space-around"
      width={800}
    >
      <ACComponent />
      <SavesComponent />
    </Pane>
  </div>
  };
}