import React from 'react';
import { SideSheet, Position, Pane, Heading, Button } from "evergreen-ui";
import ClickForDescriptionSpellComponent from './ClickForDescriptionSpellComponent';
import SpellsOfLevelComponent from './SpellsOfLevelComponent';

export default class SpellsSidebarComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isVisible: false
        }
    
        this.setDisplaySidebar = this.setDisplaySidebar.bind(this);
      }

    setDisplaySidebar(display) {
        this.setState({isVisible: display});
    }

    render() {
        if (this.props.character.getJson().spellcasting.length > 0) {
            var spellcasting = this.props.character.getJson().spellcasting[0];
            var castingName = spellcasting.name;
            var castingType = spellcasting.type;
            var casterLevel = spellcasting.casterLevel;
            var concentration = spellcasting.concentration;
      
            var spellcastingInformation = spellcasting.spellsPerLevel.map((level) => {
                var preppedSpellList = level.spellsPrepped.map((spell) => <ClickForDescriptionSpellComponent name={spell.name} description={spell.description} onButtonClick={() => this.props.character.castSpell(spellcasting.id, spell.name, level.level)}/>); 
                var castSpellList = level.spellsCast.map((spell) => <ClickForDescriptionSpellComponent name={spell.name} description={spell.description} cast={true} onButtonClick={() => this.props.character.uncastSpell(spellcasting.id, spell.name, level.level)}/>);
                return (<SpellsOfLevelComponent levelString={level.levelString} perDay={level.perDay} preppedSpellList={preppedSpellList} castSpellList={castSpellList}/>)
            })
      
            let spellSheet = <Pane width={400} borderRadius={3} margin="auto" display="flex" flexDirection="column" alignItems="center" padding={5} justifyContent="center">
                <Heading size={700}>{castingName} {castingType}</Heading>
                <Heading size={100} marginTop="0px">Caster Level: {casterLevel}; Concentration +{concentration}</Heading>
                <hr width="250px"/>
                {spellcastingInformation}
            </Pane>

            return <React.Fragment>
            <SideSheet isShown={this.state.isVisible} onCloseComplete={() => this.setDisplaySidebar(false)} position={Position.RIGHT} width={500}>
                {spellSheet}
            </SideSheet>
            <Button marginBottom={8} height={50} width={600} background="rgba(256, 256, 256, 0.4)" color="white" onClick={() => this.setDisplaySidebar(true)}>Click to View Spells</Button>
            </React.Fragment>
        } else {
            return <React.Fragment></React.Fragment>
        }
      };
}