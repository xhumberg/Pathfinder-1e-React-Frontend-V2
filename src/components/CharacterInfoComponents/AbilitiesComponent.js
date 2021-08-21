import React from 'react';
import { Pane, Table, Heading } from "evergreen-ui";

export default class AbilitiesComponent extends React.Component {
  
    render() {
        return(
            <Pane width={this.props.width || 250} className="AbilitiesComponent" marginTop={8}>
                <Table>
                    <Table.Body>
                        {this.props.character.ability?.map((ability) => (
                            <Table.Row height={this.props.rowHeight || 40}>
                                <Table.TextCell background="rgba(0, 0, 0, 0.4)"><Heading size={this.props.size+500} color="white">{ability.name.slice(0, 3)}</Heading></Table.TextCell>
                                <Table.TextCell background="rgba(0, 0, 0, 0.4)"><Heading size={this.props.size+400} color="white">{ability.mod}</Heading></Table.TextCell>
                                <Table.TextCell background="rgba(0, 0, 0, 0.4)"><Heading size={this.props.size+300} color="white">{ability.value}</Heading></Table.TextCell>
                            </Table.Row>
                        ))}                
                    </Table.Body>
                </Table>
            </Pane>
        )
    }
}