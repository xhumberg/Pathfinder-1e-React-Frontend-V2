import React from 'react';
import { Pane } from "evergreen-ui";
import ACComponent from './ACComponent';
import SavesComponent from './SavesComponent';
import StatDisplayComponent from '../StatDisplayComponent';

export default class DefensiveValuesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.windowWidth > 750) {
      return <Pane 
          display="flex" 
          padding={16}
          paddingTop={0}
          paddingBottom={0}
          borderRadius={3}
          justifyContent="space-around"
          width="50%"
          minWidth={700}
        >
          <ACComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
          <SavesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
        </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="100%">
        <ACComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
        <SavesComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
      </Pane>
    }
  } 
}