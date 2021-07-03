import React from 'react';
import { Pane, Table, Heading } from "evergreen-ui";

export default class AbilitiesComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="AbilitiesComponent">
        <Pane width={250}>
            <Table>
                <Table.Body>
                    <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                        <Table.TextCell><Heading size={500} color="white">Str</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={400} color="white">+4</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={300} color="white">19</Heading></Table.TextCell>
                    </Table.Row>
                    <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                        <Table.TextCell><Heading size={500} color="white">Dex</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={400} color="white">+0</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={300} color="white">10</Heading></Table.TextCell>
                    </Table.Row>
                    <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                        <Table.TextCell><Heading size={500} color="white">Con</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={400} color="white">+2</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={300} color="white">14</Heading></Table.TextCell>
                    </Table.Row>
                    <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                        <Table.TextCell><Heading size={500} color="white">Int</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={400} color="white">+1</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={300} color="white">12</Heading></Table.TextCell>
                    </Table.Row>
                    <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                        <Table.TextCell><Heading size={500} color="white">Wis</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={400} color="white">+2</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={300} color="white">14</Heading></Table.TextCell>
                    </Table.Row>
                    <Table.Row height={40} background="rgba(0, 0, 0, 0.4)">
                        <Table.TextCell><Heading size={500} color="white">Cha</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={400} color="white">+0</Heading></Table.TextCell>
                        <Table.TextCell><Heading size={300} color="white">11</Heading></Table.TextCell>
                    </Table.Row>
                    
                </Table.Body>
            </Table>
        </Pane>
      </div>
  };
}

