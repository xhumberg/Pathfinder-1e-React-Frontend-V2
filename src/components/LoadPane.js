import React from 'react';
import { Button, Heading, Pane, Spinner } from "evergreen-ui";
import PathfinderCharacter from './PathfinderCharacter';
import CharacterSelectMenuComponent from './CharacterSelectMenuComponent';

export default class LoadPane extends React.Component {

    constructor(props) {
        super(props)

        this.state={availableCharacters: []}

        window.history.replaceState(null, null, "/load")
        document.title = "Xavier's Pathfinder Sheet";

        this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this);
    }

    updateSelectedCharacter(characterId) {
        window.history.replaceState(null, null, "/" + characterId)
        this.props.forceReload();
    }

    async componentDidMount() {
        const loadCharactersUrl = this.props.characterUrl + "/character/load?token=" + this.props.token;
        const response = await fetch(loadCharactersUrl);
        const data = await response.json();
        this.setState({availableCharacters: data})
    }

    render() {

        let internalDisplay = <Spinner />

        if (this.state.availableCharacters.length !== 0) {
            internalDisplay = <CharacterSelectMenuComponent availableCharacters={this.state.availableCharacters} updateSelectedCharacter={this.updateSelectedCharacter}/>
        }

        return <Pane border width={500} margin="auto" marginTop={100} display="flex" flexDirection="column" alignItems="center"><Heading margin="auto">Load Character</Heading>{internalDisplay}</Pane>
    };
}