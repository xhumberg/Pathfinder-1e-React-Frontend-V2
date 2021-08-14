import React from 'react';
import { Pane, Heading, Strong, Button } from "evergreen-ui";
import HpBarComponent from './HpBarComponent';
import HpButtonsComponent from './HpButtonsComponent';

export default class HpComponent extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    if (this.props.windowWidth > 750) {
    return <Pane alignItems="center" background="rgba(0, 0, 0, 0.4)" padding={5} border={true} borderRadius={10} paddingLeft={20} paddingRight={20}>
            <HpBarComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
            <HpButtonsComponent windowWidth={this.props.windowWidth}/>
        </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="100%">
            <HpBarComponent character={this.props.character} windowWidth={this.props.windowWidth}/>
            <HpButtonsComponent windowWidth={this.props.windowWidth}/>
      </Pane>
    }
  };
}


