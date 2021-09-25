import { Pane, Spinner } from "evergreen-ui";
import React from "react";
import CharacterSheetComponent from "./CharacterSheetComponent";


// const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
const CHARACTER_SERVICE_URL = "http://localhost:8080"; 

export default class PathfinderCharacter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            json: null,
        }

        this.getJson = this.getJson.bind(this);
        this.toggleEffect = this.toggleEffect.bind(this);
        this.castSpell = this.castSpell.bind(this);
        this.uncastSpell = this.uncastSpell.bind(this);
    }

    getJson() {
        return this.state.json;
    }

    async componentDidMount() {
        await this.loadCharacter();
    }

    async loadCharacter() {
      console.log("Loading character " + this.props.characterId);
      var url = CHARACTER_SERVICE_URL + "/character/" + this.props.characterId;
      if (this.props.token.tokenObj)
          url = url + "?token=" + this.props.token.tokenObj.id_token;
      const response = await fetch(url);
      const data = await response.json();
      this.setState({json: data});
    }

    async toggleEffect(effectToToggle) {
        console.log("Updating sheet");
        var url = CHARACTER_SERVICE_URL + "/character/" + this.props.characterId + "/toggle";
        const response = await fetch(url, {method: 'POST', body: JSON.stringify({
            googleToken: this.props.token.tokenObj.id_token,
            adjustmentName: effectToToggle
        })});
        const data = await response.json();
        this.setState({json: data});
    }

    async castSpell(classId, spellName, spellLevel) {
        console.log("Casting spell: " + spellName);
        var url = CHARACTER_SERVICE_URL + "/character/" + this.props.characterId + "/castSpell";
        const response = await fetch(url, {method: 'POST', body: JSON.stringify({
            googleToken: this.props.token.tokenObj.id_token,
            classId: classId,
            spellName: spellName,
            spellLevel: spellLevel
        })});
        const data = await response.json();
        this.setState({json: data});
      }
    
      async uncastSpell(classId, spellName, spellLevel) {
        console.log("Uncasting spell: " + spellName);
        var url = CHARACTER_SERVICE_URL + "/character/" + this.props.characterId + "/uncastSpell";
        const response = await fetch(url, {method: 'POST', body: JSON.stringify({
            googleToken: this.props.token.tokenObj.id_token,
            classId: classId,
            spellName: spellName,
            spellLevel: spellLevel
        })});
        const data = await response.json();
        this.setState({json: data});
      }

    render() {
        if (this.state.json)
            return <CharacterSheetComponent 
                character={this} 
                windowWidth={this.props.windowWidth} 
                handleGoogleLogout={this.props.handleGoogleLogout} 
                loggedInName={this.props.loggedInName}
            />
        else 
            return <Pane height="100vh"><Spinner /></Pane>
    }
    
  }