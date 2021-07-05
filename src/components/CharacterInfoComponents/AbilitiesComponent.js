import React from 'react';
import { Pane, Table, Heading } from "evergreen-ui";

export default class AbilitiesComponent extends React.Component {

    constructor(props) {
      super(props);
    }
  
    render() {
        return(<div className="AbilitiesComponent">
            <Pane width={250}>
                <Table>
                    <Table.Body>
                        {this.props.character.ability?.map((ability) => (
                            <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                                <Table.TextCell><Heading size={500} color="white">{ability.name.slice(0, 3)}</Heading></Table.TextCell>
                                <Table.TextCell><Heading size={400} color="white">{ability.mod}</Heading></Table.TextCell>
                                <Table.TextCell><Heading size={300} color="white">{ability.value}</Heading></Table.TextCell>
                            </Table.Row>
                        ))}                
                    </Table.Body>
                </Table>
            </Pane>
        </div>)
    }
}