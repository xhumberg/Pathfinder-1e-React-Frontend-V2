import React from 'react';
import { Button, Dialog, Heading, Pane, Strong, Table, Text, TextareaField, TextInputField } from "evergreen-ui";

export default class AdjustmentEditComponent extends React.Component {

    render() {
        return <TextInputField label="Adjustments" value={this.props.adjustmentString} onChange={e => this.props.updateAdjustmentString(e.target.value)} />    
    };
}