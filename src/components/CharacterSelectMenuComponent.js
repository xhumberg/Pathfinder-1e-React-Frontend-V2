import { Button, Pane } from 'evergreen-ui';
import React from 'react';

export default class CharacterSelectMenuComponent extends React.Component {
    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(id) {
        console.log("Selected character ", id);
        this.props.updateSelectedCharacter(id);
    }

    render() {
        return <Pane display="flex" flexDirection="column" alignItems="center">
        {this.props.availableCharacters
        .map(character => <Button appearance="minimal" onClick={() => this.onSelect(JSON.parse(character).characterID)}>{JSON.parse(character).characterName}</Button>)}
        </Pane>
    }

}