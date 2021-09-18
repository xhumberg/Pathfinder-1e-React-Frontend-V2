import { Pane, Spinner } from "evergreen-ui";
import React from "react";
import CharacterSheetComponent from "./CharacterSheetComponent";


const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
// const CHARACTER_SERVICE_URL = "http://localhost:8080";

export default class PathfinderCharacter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            json: null,
        }

        this.getJson = this.getJson.bind(this);
        this.toggleEffect = this.toggleEffect.bind(this);
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
        var url = CHARACTER_SERVICE_URL + "/character/" + this.props.characterId + "/toggle/" + effectToToggle;
        if (this.props.token.tokenObj)
            url = url + "?token=" + this.props.token.tokenObj.id_token;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter();
    }

    render() {
        if (this.state.json)
            return <CharacterSheetComponent character={this} windowWidth={this.props.windowWidth} />
        else 
            return <Pane height="100vh"><Spinner /></Pane>
    }
    
  }