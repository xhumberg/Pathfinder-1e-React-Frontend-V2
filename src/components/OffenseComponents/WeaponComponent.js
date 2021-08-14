import React from 'react';
import { Pane, Heading } from "evergreen-ui";

export default class WeaponComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.windowWidth > 750) {
      return <Pane width={700} background="rgba(0, 0, 0, 0)" border={true} height={100} borderRadius={10} display="flex" padding={10} margin={10}>
        <Pane flex={1} display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-start">
          <Heading size={800} color="white">{this.props.name}</Heading>
          <Heading size={900} color="white">{this.props.attack}</Heading>
        </Pane>
        <Pane display="flex" flexDirection="column" justifyContent="space-between" alignItems="flex-end">
          <Heading color="white">{this.props.traits}</Heading>
          <Heading size={800} color="white">{this.props.damage}</Heading>
        </Pane>
      </Pane>
    } else {
      return <Pane width="100%" display="flex" flexDirection="column">
        <Heading size={800} color="white">{this.props.name}</Heading>
        <Heading size={300} color="white">{this.props.traits}</Heading>
        <hr width="70%"/>
        <Heading size={700} color="white">{this.props.attack}</Heading>
        <Heading size={500} color="white" marginBottom={8}>{this.props.damage}</Heading>
      </Pane>
    }
  };
}



