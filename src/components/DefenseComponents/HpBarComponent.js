import React from 'react';
import { Pane, Heading, Strong } from "evergreen-ui";

export default class HpBarComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="HpBarComponent">
      <Pane display="flex" justifyContent="space-evenly" margin="auto">
        <Pane margin="auto" width="33%">
            <Heading size={600} marginBottom={4} color="white">Nonlethal Damage</Heading>
            <Strong color="white">10</Strong>
        </Pane>
        <Pane margin="auto" width="34%">
            <Heading size={700} marginBottom={4} color="white">Hit Points</Heading>
            <Heading size={600} color="white">30/35</Heading>
        </Pane>
        <Pane margin="auto" width="33%">
            <Heading size={600} marginBottom={4} color="white">Temp HP</Heading>
            <Strong color="white">10</Strong>
        </Pane>
    </Pane>
    <Pane width={700} height={35} background="black" margin="auto" borderRadius={17} padding={5}>
        <Pane width={30/35*700} height={25} background="green800" borderRadius={12}>
        </Pane>
    </Pane>
      </div>
  };
}