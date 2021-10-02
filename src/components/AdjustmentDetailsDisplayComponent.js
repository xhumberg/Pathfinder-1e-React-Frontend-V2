import React from 'react';
import { Button, Dialog, Heading, Pane, Strong, Table, Text, TextareaField, TextInputField } from "evergreen-ui";

export default class AdjustmentDetailsDisplayComponent extends React.Component {

    render() {
        let adjustments = this.props.adjustmentString?.split(";");
        console.log(adjustments)
        return <Pane><Text>{this.props.adjustmentString}</Text></Pane>
      };
}