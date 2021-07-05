import React from 'react';
import { Pane, Heading, IconButton, MenuIcon, Strong } from "evergreen-ui";

export default class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="HeaderComponent">
          <Pane border background="rgba(16, 24, 64, 0.4)">
            <Pane 
                display="flex" 
                padding={16}
                paddingBottom={0}
                borderRadius={3}
            >
                <Pane flex={1} alignItems="center" display="flex">
                    <IconButton icon={MenuIcon} size="large"/>
                    <Heading color="white" size={900} marginLeft={25}>{this.props.character.name}</Heading>
                </Pane>
                <Pane>
                    <Heading color="white" size={800} marginRight={40}>{this.props.character.alignment} {this.props.character.size} {this.props.character.race} {this.props.character.classes}</Heading>
                </Pane>
            </Pane>
            <Pane marginBottom={15} marginTop={0} display="flex" justifyContent="space-around">
                <Strong color="white" >Gender: {this.props.character.gender}</Strong>
                <Strong color="white" >Type: {this.props.character.typeAndSubtype}</Strong>
                <Strong color="white" >Age: {this.props.character.age}</Strong>
                <Strong color="white" >Height: {this.props.character.height}</Strong>
                <Strong color="white" >Weight: {this.props.character.weight}</Strong>
                <Strong color="white" >Deity: {this.props.character.deity}</Strong>
            </Pane>
        </Pane>
      </div>
  };
}