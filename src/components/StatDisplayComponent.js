import React from 'react';
import { Pane, Heading } from "evergreen-ui";

export default class StatDisplayComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div className="StatDisplayComponent">
    <Pane 
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
          <Heading size={700} marginLeft={25} color="white">{this.props.name}</Heading>
      </Pane>
      <Pane>
          <Heading size={800} marginRight={25} marginLeft={10} color="white">{this.props.value}</Heading>
      </Pane>
  </Pane>
  </div>
  };
}


