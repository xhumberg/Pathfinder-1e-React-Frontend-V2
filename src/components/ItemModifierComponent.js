import React from 'react';
import { Button, Dialog, Heading, Pane, Strong, Table, Text, TextareaField, TextInputField } from "evergreen-ui";
import AdjustmentDetailsDisplayComponent from './AdjustmentDetailsDisplayComponent';
import AdjustmentEditComponent from './AdjustmentEditComponent';

export default class ItemModifierComponent extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            actuallyPaid: this.props.item?.actuallyPaid,
            description: this.props.item?.description,
            name: this.props.item?.name,
            trueCost: this.props.item?.trueCost,
            adjustmentString: this.props.item?.adjustmentString,
            editing: false
        }
    }

    async saveItem() {
        await this.props.character.updateItemForCharacter(this.props.item.itemId, this.state.name, this.state.description, this.state.actuallyPaid, this.state.trueCost, this.state.adjustmentString);
        this.props.clearSelectedItem();
    }

    render() {
        return <Dialog isShown={this.props.item} title={this.state.name} onCloseComplete={() => this.props.clearSelectedItem()} hasFooter={false}>
            {this.state.editing ? 
                <Pane display="flex" flexDirection="column">
                    <TextInputField label="Item Name" required value={this.state.name} onChange={e => this.setState({name: e.target.value})} />
                    <TextareaField label="Description" required value={this.state.description} onChange={e => this.setState({description: e.target.value})} />
                    <TextInputField label="Bought For" required value={this.state.actuallyPaid} onChange={e => this.setState({actuallyPaid: e.target.value})} />
                    <TextInputField label="Overall Worth" required value={this.state.trueCost} onChange={e => this.setState({trueCost: e.target.value})} />
                    <AdjustmentEditComponent adjustmentString={this.state.adjustmentString} updateAdjustmentString={(string) => this.setState({adjustmentString: string})} />
                    <Button onClick={() => this.saveItem()} marginTop={20} marginBottom={20}>Save</Button>
                </Pane>
            : 
                <Pane display="flex" flexDirection="column">
                    <Strong>Bought for {this.props.item.actuallyPaid}gp. (worth {this.props.item.trueCost}gp)</Strong>
                    <Text>{this.state.description}</Text>
                    <AdjustmentDetailsDisplayComponent adjustmentString={this.props.item.adjustmentString}/>
                    <Button onClick={() => this.setState({editing: true})} marginTop={20} marginBottom={20}>Edit Item</Button>
                </Pane>
            }
        </Dialog>
      };
}