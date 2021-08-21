import React from 'react';
import { Pane } from "evergreen-ui";
import ACComponent from './ACComponent';
import SavesComponent from './SavesComponent';
import { PageSize } from '../PageSize';

export default class DefensiveValuesComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
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