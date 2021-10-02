import React from 'react';
import { Button, Dialog, Heading, Pane, Strong, Table, Text, TextareaField, TextInputField } from "evergreen-ui";
import ItemModifierComponent from './ItemModifierComponent';

export default class ItemListModifierComponent extends React.Component {

    constructor(props) {
        super(props) 
        this.state = {
            visible: false,
            itemOnDisplay: null
        }

        this.displayDetailsFor = this.displayDetailsFor.bind(this);
    }

    displayDetailsFor(desiredItem) {
        console.log("Want to load details for " + desiredItem.name);
        this.props.character.getJson().trackedItems.map((item) => {
            if (item.name === desiredItem.name) {
                this.setState({itemOnDisplay: item})
            }
        })
        this.props.character.getJson().items.map((item) => {
            if (item.name === desiredItem.name) {
                this.setState({itemOnDisplay: item})
            }
        })
    }

    clearItemDetails() {
        this.setState({itemOnDisplay: null})
    }

    render() {
        let tableInternals = [];

        this.props.character.getJson().trackedItems.map((item) => tableInternals.push(<Table.Row key={item.name} isSelectable onSelect={() => this.displayDetailsFor(item)}>
            <Table.TextCell>{item.name}</Table.TextCell>
            <Table.TextCell>{item.actuallyPaid}</Table.TextCell>
            <Table.TextCell>{item.trueCost}</Table.TextCell>
        </Table.Row>))

        this.props.character.getJson().items.map((item) => tableInternals.push(<Table.Row key={item.name} isSelectable onSelect={() => this.displayDetailsFor(item)}>
            <Table.TextCell>{item.name}</Table.TextCell>
            <Table.TextCell>{item.actuallyPaid}</Table.TextCell>
            <Table.TextCell>{item.trueCost}</Table.TextCell>
        </Table.Row>))

        return <React.Fragment>
            <Button onClick={() => this.setState({visible: true})}>Edit Items</Button>
            <Dialog isShown={this.state.visible} title="Items" onCloseComplete={() => this.setState({visible: false})} hasCancel={false}>
                <Pane display="flex" flexDirection="column">
                    <Strong>Total Earned Gold: {this.props.character.getJson().gold.totalEarned}</Strong>
                    <Strong>Total Spent Gold: {this.props.character.getJson().gold.totalSpent}</Strong>
                    <Strong>Total Remaining Gold: {this.props.character.getJson().gold.totalRemaining}</Strong>
                    <Table>
                        <Table.Head>
                            <Table.TextHeaderCell>Item</Table.TextHeaderCell>
                            <Table.TextHeaderCell>Paid</Table.TextHeaderCell>
                            <Table.TextHeaderCell>Full Price Cost</Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body>
                            {tableInternals}
                        </Table.Body>
                    </Table>
                </Pane>
                <Button onClick={() => this.props.character.addDummyItem()}>Add new item!</Button>
            </Dialog>
            {this.state.itemOnDisplay && <ItemModifierComponent item={this.state.itemOnDisplay} character={this.props.character} clearSelectedItem={() => this.clearItemDetails()}/>}
        </React.Fragment>
      };
}


