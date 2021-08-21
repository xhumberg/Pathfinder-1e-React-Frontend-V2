import React from 'react';
import { Pane } from "evergreen-ui";
import HpBarComponent from './HpBarComponent';
import HpButtonsComponent from './HpButtonsComponent';
import { PageSize } from '../PageSize';

export default class HpComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
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