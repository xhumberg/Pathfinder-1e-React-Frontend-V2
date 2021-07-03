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
                    <Heading color="white" size={900} marginLeft={25}>Manu Tuskmaw</Heading>
                </Pane>
                <Pane>
                    <Heading color="white" size={800} marginRight={40}>NG Medium Half-Orc Warpriest 4</Heading>
                </Pane>
            </Pane>
            <Pane marginBottom={15} marginTop={0} display="flex" justifyContent="space-around">
                <Strong color="white" >Gender: Male</Strong>
                <Strong color="white" >Type: Humanoid (human, orc)</Strong>
                <Strong color="white" >Age: 32</Strong>
                <Strong color="white" >Height: 5' 4"</Strong>
                <Strong color="white" >Weight 200 lbs</Strong>
                <Strong color="white" >Deity: Ragathiel</Strong>
            </Pane>
        </Pane>
      </div>
  };
}