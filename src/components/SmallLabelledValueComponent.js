import React from 'react';
import { Heading, Pane } from "evergreen-ui";

export default class SmallLabelledValueComponent extends React.Component {

render() {

    var backgroundColor = "white";
    if (this.props.used) {
        backgroundColor = "gray";
    }

    var textColor = "black";
    if (this.props.used) {
        textColor = "white";
    }

    return <Pane elevation={2} background={backgroundColor} width="350px" height={50} margin={6} display="flex" justifyContent="center" alignItems="center" onClick={this.props.onClick}>
        <Pane flex={1} alignItems="center" display="flex">
            <Heading color={textColor} size={100} marginLeft={30}>{this.props.label}</Heading>
        </Pane>
        <Pane>
            <Heading color={textColor} size={800} marginRight={30}>{this.props.value}</Heading>
        </Pane>
    </Pane>
  };
}