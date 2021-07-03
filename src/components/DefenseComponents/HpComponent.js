import React from 'react';
import { Pane, Heading, Strong, Button } from "evergreen-ui";
import HpBarComponent from './HpBarComponent';
import HpButtonsComponent from './HpButtonsComponent';

export default class HpComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="HpComponent">
        <Pane alignItems="center" background="rgba(0, 0, 0, 0.4)" padding={5} border={true} borderRadius={10} paddingLeft={20} paddingRight={20}>
            <HpBarComponent />
            <HpButtonsComponent />
        </Pane>
    </div>
  };
}


