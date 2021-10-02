import React from 'react';
import { Pane, Heading, IconButton, MenuIcon, Strong } from "evergreen-ui";
import { PageSize } from './PageSize';
import MenuSidebarComponent from './MenuSidebarComponent';

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
                    <MenuSidebarComponent 
                        character={this.props.character}
                        handleGoogleLogout={this.props.handleGoogleLogout} 
                        loggedInName={this.props.loggedInName}
                    />
                    <Heading color="white" size={900} marginLeft={25}>{this.props.character.getJson().name}</Heading>
                </Pane>
                <Pane>
                    <Heading color="white" size={800} marginRight={40}>{this.props.character.getJson().alignment} {this.props.character.getJson().size} {this.props.character.getJson().race} {this.props.character.getJson().classes}</Heading>
                </Pane>
            </Pane>
            <Pane marginBottom={15} marginTop={0} display="flex" justifyContent="space-around" wrapDisplay={wrapDisplay}>
                <Strong color="white" >Gender: {this.props.character.getJson().gender}</Strong>
                <Strong color="white" >Type: {this.props.character.getJson().typeAndSubtype}</Strong>
                <Strong color="white" >Age: {this.props.character.getJson().age}</Strong>
                <Strong color="white" >Height: {this.props.character.getJson().height}</Strong>
                <Strong color="white" >Weight: {this.props.character.getJson().weight}</Strong>
                <Strong color="white" >Deity: {this.props.character.getJson().deity}</Strong>
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
                <MenuSidebarComponent 
                    character={this.props.character}
                    handleGoogleLogout={this.props.handleGoogleLogout} 
                    loggedInName={this.props.loggedInName}
                />
                <Heading color="white" size={900}>{this.props.character.getJson().name}</Heading>
            </Pane>
            <Heading color="white" size={800}>{this.props.character.getJson().alignment} {this.props.character.getJson().size} {this.props.character.getJson().race} {this.props.character.getJson().classes}</Heading>
            <Pane width="100%" display="flex" justifyContent="space-around" paddingBottom={8} flexWrap="wrap">
                <Strong color="white" marginLeft={20} marginRight={20}>Gender: {this.props.character.getJson().gender}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Type: {this.props.character.getJson().typeAndSubtype}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Age: {this.props.character.getJson().age}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Height: {this.props.character.getJson().height}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Weight: {this.props.character.getJson().weight}</Strong>
                <Strong color="white" marginLeft={20} marginRight={20}>Deity: {this.props.character.getJson().deity}</Strong>
            </Pane>
        </Pane>
    }
  };
}