import { Pane, Spinner } from "evergreen-ui";
import React from "react";
import CharacterSheetComponent from "./CharacterSheetComponent";

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
        this.updateItemForCharacter = this.updateItemForCharacter.bind(this);
        this.forceDatabaseReload = this.forceDatabaseReload.bind(this);
    }

    getJson() {
        return this.state.json;
    }

    async componentDidMount() {
        await this.loadCharacter();
    }

    async reloadFromDatabase() {
        var url = this.props.url + "/character/" + this.props.characterId + "/forceReload";
        if (this.props.token.tokenObj)
            url = url + "?token=" + this.props.token.tokenObj.id_token;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter();
    }

    async loadCharacter() {
        console.log("Loading character " + this.props.characterId);
        var url = this.props.url + "/character/" + this.props.characterId;
        if (this.props.token.tokenObj)
            url = url + "?token=" + this.props.token.tokenObj.id_token;
        const response = await fetch(url);
        const data = await response.json();
        this.setState({json: data});
        window.history.replaceState(null, null, "/" + this.props.characterId)
        document.title = data.name + " | Xavier's Pathfinder Sheet";
    }

    async toggleEffect(effectToToggle) {
        console.log("Updating sheet");
        var url = this.props.url + "/character/" + this.props.characterId + "/toggle";
        const response = await fetch(url, {method: 'POST', body: JSON.stringify({
            googleToken: this.props.token.tokenObj.id_token,
            adjustmentName: effectToToggle
        })});
        const data = await response.json();
        this.setState({json: data});
    }

    async castSpell(classId, spellName, spellLevel) {
        console.log("Casting spell: " + spellName);
        var url = this.props.url + "/character/" + this.props.characterId + "/castSpell";
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
        var url = this.props.url + "/character/" + this.props.characterId + "/uncastSpell";
        const response = await fetch(url, {method: 'POST', body: JSON.stringify({
            googleToken: this.props.token.tokenObj.id_token,
            classId: classId,
            spellName: spellName,
            spellLevel: spellLevel
        })});
        const data = await response.json();
        this.setState({json: data});
    }
    
    async heal(amount) {
        console.log("Healing " + amount);
        var url = this.props.url + "/character/" + this.props.characterId + "/heal"
        + "?token=" + this.props.token.tokenObj.id_token
        + "&amount=" + amount;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter()
      }
    
    async damage(amount) {
        console.log("Healing " + amount);
        var url = this.props.url + "/character/" + this.props.characterId + "/damage"
        + "?token=" + this.props.token.tokenObj.id_token
        + "&amount=" + amount;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter()
    }
    
    async reduce(resourceId, type) {
        console.log("Reducing " + type + " resource id: " + resourceId);
        var url = this.props.url + "/character/" + this.props.characterId + "/reduceResource/" + type + "/" + resourceId + "?token=" + this.props.token.tokenObj.id_token;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter()
    }
    
    async increase(resourceId, type) {
        console.log("Reducing " + type + " resource id: " + resourceId);
        var url = this.props.url + "/character/" + this.props.characterId + "/increaseResource/" + type + "/" + resourceId + "?token=" + this.props.token.tokenObj.id_token;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter()
    }
    
    async forceDatabaseReload() {
        var url = this.props.url + "/character/" + this.props.characterId + "/forceReload";
        if (this.props.token.tokenObj.id_token)
            url = url + "?token=" + this.props.token.tokenObj.id_token;
        await fetch(url, {method: 'PUT'});
        this.loadCharacter()
    }

    async updateItemForCharacter(itemId, name, description, paid, cost, adjustmentString) {
        var url = this.props.url + "/item/" + itemId + "/update";
        const response = await fetch(url, {method: 'PUT', body: JSON.stringify({
            token: this.props.token.tokenObj.id_token,
            cost: cost,
            paid: paid,
            name: name,
            description: description,
            characterId: this.props.characterId,
            adjustmentString: adjustmentString
        })});
        this.forceDatabaseReload();
    }

    async addDummyItem() {
        var url = this.props.url + "/item/createDummyItem";
        const response = await fetch(url, {method: 'PUT', body: JSON.stringify({
            token: this.props.token.tokenObj.id_token,
            characterId: this.props.characterId
        })})
        this.forceDatabaseReload();
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