import React from 'react';
import { Pane, Heading, IconButton, MenuIcon, Strong } from "evergreen-ui";
import { PageSize } from './PageSize';

export default class HeaderComponent extends React.Component {

  render() {
    let wrapDisplay = this.props.windowWidth < 1800 ? "wrap" : "no-wrap";
    let headerHeight = this.props.windowWidth < 1800 ? "auto" : 100;

    if (this.props.windowWidth !== PageSize.MOBILE) {
        return <Pane border background="rgba(0, 0, 0, 0.4)" className="HeaderComponent" height={headerHeight} minHeight={100}>
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
            <Pane marginBottom={15} marginTop={0} display="flex" justifyContent="space-around" wrapDisplay={wrapDisplay}>
                <Strong color="white" >Gender: {this.props.character.gender}</Strong>
                <Strong color="white" >Type: {this.props.character.typeAndSubtype}</Strong>
                <Strong color="white" >Age: {this.props.character.age}</Strong>
                <Strong color="white" >Height: {this.props.character.height}</Strong>
                <Strong color="white" >Weight: {this.props.character.weight}</Strong>
                <Strong color="white" >Deity: {this.props.character.deity}</Strong>
            </Pane>
        </Pane>
    } else {
        return <Pane 
            border 
            background="rgba(0, 0, 0, 0.4)" 
            className="HeaderComponent"
            width="100%" 
            padding={8} 
            paddingLeft={16} 
            paddingRight={16}
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Pane display="flex" alignItems="center">
                <IconButton icon={MenuIcon} size="medium" marginRight={12}/>
                <Heading color="white" size={900}>{this.props.character.name}</Heading>
            </Pane>
            <Heading color="white" size={800}>{this.props.character.alignment} {this.props.character.size} {this.props.character.race} {this.props.character.classes}</Heading>
            <Pane width="100%" display="flex" justifyContent="space-around" paddingBottom={8} flexWrap="wrap">
                <Strong color="white" marginLeft={20} marginRight={20}>Gender: {this.props.character.gender}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Type: {this.props.character.typeAndSubtype}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Age: {this.props.character.age}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Height: {this.props.character.height}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Weight: {this.props.character.weight}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Deity: {this.props.character.deity}</Strong>
            </Pane>
        </Pane>
    }
  };
}