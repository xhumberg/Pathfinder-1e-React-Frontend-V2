import React from 'react';
import { Pane, Text, Button, Heading, ChevronLeftIcon, ChevronRightIcon } from "evergreen-ui";
import WeaponComponent from './WeaponComponent';
import { PageSize } from '../PageSize';

export default class OffenseComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
      let width="50%";
      if (this.props.windowWidth === PageSize.TABLET || this.props.windowWidth === PageSize.VERTICAL) 
        width=725;
      return <Pane width={width} height={370} margin={0} background="rgba(0, 0, 0, 0.4)" borderRadius={15} display="flex" alignItems="center" justifyContent="center" flexDirection="column" border={true} padding={10}>
        <Text color="white" margin={12} marginTop={16}>WEAPONS AND SPELLS</Text>
        <Button marginBottom={8} height={50} width={600} background="rgba(256, 256, 256, 0.4)" color="white">Click to View Spells</Button>
        {this.props.character.getJson().weapons?.map((weapon) => <WeaponComponent name={weapon.name} attack={weapon.attackMods} traits={weapon.specialTags} damage={weapon.damage} windowWidth={this.props.windowWidth}/>)}
        <Pane marginBottom={8} background="rgba(256, 256, 256, 0.4)" borderRadius={5}>
          <Button padding={0} appearance="minimal"><ChevronLeftIcon color="black"/></Button>
          <Button background="rgba(0, 0, 0, 0)" color="black">1</Button>
          <Button appearance="minimal" color="black">2</Button>
          <Button padding={0} appearance="minimal"><ChevronRightIcon color="black"/></Button>
        </Pane>
      </Pane>
    } else {
      return <Pane width="100%" display="flex" flexDirection="column" marginBottom={12} background="rgba(0, 0, 0, 0.4)" >
        <Heading color="white">WEAPONS</Heading>
        {this.props.character.getJson().weapons?.map((weapon) => <WeaponComponent name={weapon.name} attack={weapon.attackMods} traits={weapon.specialTags} damage={weapon.damage} windowWidth={this.props.windowWidth}/>)}
        <Heading marginTop={12} color="white">SPELLS (TODO)</Heading>
      </Pane>
    }
  };
}