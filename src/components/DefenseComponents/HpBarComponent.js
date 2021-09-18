import React from 'react';
import { Pane, Heading, Strong } from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';
import { PageSize } from '../PageSize';

export default class HpBarComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
    return <Pane className="HpBarComponent" width="100%">
      <Pane display="flex" justifyContent="space-evenly" margin="auto">
        <Pane margin="auto" width="33%">
            <Heading size={600} marginBottom={4} color="white">Nonlethal Damage</Heading>
            <Strong color="white">{this.props.character.getJson().nonLethal || '0'} </Strong>
        </Pane>
        <Pane margin="auto" width="34%">
            <Heading size={700} marginBottom={4} color="white">Hit Points</Heading>
            <Heading size={600} color="white">{this.props.character.getJson().currentHp}/{this.props.character.getJson().maxHp}</Heading>
        </Pane>
        <Pane margin="auto" width="33%">
            <Heading size={600} marginBottom={4} color="white">Temp HP</Heading>
            <Strong color="white">{this.props.character.getJson().tempHp || '0'}</Strong>
        </Pane>
      </Pane>
      <Pane width={610} height={35} background="black" margin="auto" borderRadius={17} padding={4} border={true}>
          <Pane width={this.props.character.getJson().currentHp/this.props.character.getJson().maxHp*600} height={25} background="green800" borderRadius={12}>
          </Pane>
      </Pane>
    </Pane>
    } else {
      return <Pane className="HpBarComponent" width="100%">
        <StatDisplayComponent name="Nonlethal Damage" value={this.props.character.getJson().nonLethal || '0'} width="100%"/>
        <StatDisplayComponent name="Temp HP" value={this.props.character.getJson().tempHp || '0'} width="100%" />
        <StatDisplayComponent name="HP" value={this.props.character.getJson().currentHp + "/" + this.props.character.getJson().maxHp} width="100%" />
        <Pane width="100%" background="black" border>
          <Pane width={this.props.character.getJson().currentHp/this.props.character.getJson().maxHp*100 + "%"} background="green" height={40} border/>
        </Pane>
      </Pane>
    }
  };
}