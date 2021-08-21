import React from 'react';
import { Pane, Tab, SelectMenu, Button, CaretDownIcon} from "evergreen-ui";
import StatDisplayComponent from './StatDisplayComponent';
import { PageSize } from './PageSize';

export default class InfoTabsComponent extends React.Component {

  organizeColumnsForSkills(skills) {
    let filteredSkills = [];

    for (let currentSkill = 0; currentSkill < skills?.length; currentSkill++) {
      let skill = skills[currentSkill]
      console.log(skill)
      if (skill.hasModifiers) {
        filteredSkills.push(skill)
      }
    }

    if (this.props.windowWidth !== PageSize.MOBILE) {
      let numberOfSkills = filteredSkills?.length;
      let columns = Math.ceil(numberOfSkills/6);
      let width = 484;
      if (columns < 4) {
        width = 432;
      } else if (columns === 4) {
        width = 360;
      } else if (columns === 5) {
        width = 284;
      } else if (columns === 6) {
        width = 232;
      }
      let allColumns = [];
      for (let currentColumn = 0; currentColumn < columns; currentColumn++) {
        let columnInternals = [];
        for (let i = currentColumn*6; i < currentColumn*6 + 6 && i < numberOfSkills; i++) {
          columnInternals.push(<StatDisplayComponent name={filteredSkills[i]?.name} value={filteredSkills[i]?.value} width={width} height={50} marginLeft={20} marginTop={12}/>)
        }
        allColumns.push(<Pane display="flex" flexDirection="column">{columnInternals}</Pane>)
      }

      return allColumns;
    } else {
      return filteredSkills?.map((skill) => <StatDisplayComponent name={skill.name} value={skill.value} width="100%"/>)
    }
  }

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
      return <Pane width="95%" minWidth={1400} height={450} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" background="orange" padding={10} borderRadius={20} border={true} marginLeft={20}>
        <Pane display="flex">
          <Tab key="Skills" id="Skills" size={600} paddingBottom={12} color="black" background="rgba(256, 256, 256, 0.4)" borderBottomLeftRadius={0} borderBottomRightRadius={0} >Skills</Tab>
          <Tab key="Items" id="Items" size={600} paddingBottom={12} color="white">Items</Tab>
          <Tab key="Feats" id="Feats" size={600} paddingBottom={12} color="white">Feats</Tab>
          <Tab key="Class Abilities" id="Class Abilities" size={600} paddingBottom={12} color="white">Class Abilities</Tab>
          <Tab key="Racial Abilities" id="Racial Abilities" size={600} paddingBottom={12} color="white">Racial Abilities</Tab>
          <Tab key="Misc." id="Misc." size={600} paddingBottom={12} color="white">Misc.</Tab>
        </Pane>
        <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={400} display="flex" justifyContent="flex-start" alignItems="flex-start" paddingTop={10} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
          {this.organizeColumnsForSkills(this.props.character.skills)}
        </Pane>
      </Pane>    
    } else {
      return <Pane width="100%" display="flex" flexDirection="column" background="rgba(0, 0, 0, 0.4)">
        <SelectMenu title="Tabs Option" options={['Skills', 'Items', 'Feats', 'Class Abilities', 'Racial Abilities', 'Misc.'].map((label) => ({label, value: label }))} selected="Skills">
          <Button background="rgba(0, 0, 0, 0)" color="white" height={50} iconAfter={CaretDownIcon}>Skills</Button>
        </SelectMenu>
        {this.organizeColumnsForSkills(this.props.character.skills)}
      </Pane>
    }
  };
}