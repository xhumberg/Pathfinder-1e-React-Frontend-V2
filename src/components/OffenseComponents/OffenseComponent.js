import React from 'react';
import { Pane, Text, Button, Heading, Pagination, IconButton, ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import WeaponComponent from './WeaponComponent';

export default class OffenseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

render() {
  return <div className="OffenseComponent">
    <Pane height={370} background="rgba(0, 0, 0, 0.4)" borderRadius={15} display="flex" alignItems="center" justifyContent="center" flexDirection="column" border={true} padding={10}>
      <Text color="white" margin={12} marginTop={16}>WEAPONS AND SPELLS</Text>
      <Button marginBottom={8} height={50} width={600} background="rgba(256, 256, 256, 0.4)" color="white" color>Click to View Spells</Button>
      <WeaponComponent name="Masterwork Bastard Sword" attack="+6" traits="Holy Weapon" damage="( 1d10 + 4 | 19-20x2 )"/>
      <WeaponComponent name="Masterwork Composite Longbow (+4)" attack="+4" traits="Range 110 ft." damage="( 1d8 + 4 | 20x3 )" />
      <Pane marginBottom={8} background="rgba(256, 256, 256, 0.4)" borderRadius={5}>
        <Button padding={0} appearance="minimal"><ChevronLeftIcon color="black"/></Button>
        <Button background="rgba(0, 0, 0, 0)" color="black">1</Button>
        <Button appearance="minimal" color="black">2</Button>
        <Button padding={0} appearance="minimal"><ChevronRightIcon color="black"/></Button>
      </Pane>
    </Pane>
  </div>
  };
}