import React from 'react';
import { Pane, Heading } from "evergreen-ui";

export default class SpecialDefensesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
  return <div className="SpecialDefensesComponent">
    <Pane background="rgba(0, 0, 0, 0.4)" width={750} margin="auto" marginTop={8} borderRadius={3} height={50} border={true}>
      <Heading size={500} color="white">Special Defenses</Heading>
      <Pane display="flex" justifyContent="space-evenly" marginTop={8}>
        <Heading size={400} color="white">DR 1/-</Heading>
        <Heading size={400} color="white">Fire Resistance 5</Heading>
        <Heading size={400} color="white">+1 Vs Divine Spells</Heading>
      </Pane>
  </Pane>
  </div>
  };
}