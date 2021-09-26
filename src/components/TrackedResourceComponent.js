import React from 'react';
import { Pane, Heading, IconButton, MinusIcon, PlusIcon } from "evergreen-ui";

export default class TrackedResourceComponent extends React.Component {

  render() {
    return <Pane 
      display="flex" 
      paddingBottom={0}
      borderRadius={3}
      background="rgba(0, 0, 0, 0.4)"
      height={this.props.height || 64}
      width={this.props.width}
      alignItems="center"
      margin="auto"
      marginTop={this.props.marginTop}
      marginBottom={this.props.marginBottom}
      marginLeft={this.props.marginLeft}
      marginRight={this.props.marginRight}
      border={true}
    >
      <Pane flex={1} alignItems="center" display="flex">
          <Heading size={700} color="white" marginLeft={25}>{this.props.name}</Heading>
      </Pane>
      <Pane display="flex">
          <IconButton icon={MinusIcon} size="large" appearance="minimal" color="white" onClick={() => this.props.character.reduce(this.props.id, this.props.type)} marginLeft={10} marginRight={10}/>
          <Heading size={800} color="white">{this.props.amount}</Heading>
          <IconButton icon={PlusIcon} size="large" appearance="minimal" color="white" onClick={() => this.props.character.increase(this.props.id, this.props.type)} marginLeft={10} marginRight={10}/>
      </Pane>
  </Pane>
  };
}


