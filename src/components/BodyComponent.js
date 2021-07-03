import React from 'react';
import { Pane, Text, Heading, Tab, Button, Pagination } from "evergreen-ui";
import CharacterInformationComponent from './CharacterInformationComponent';
import DefenseComponent from './DefenseComponent';
import StatDisplayComponent from './StatDisplayComponent';
import OffenseComponent from './OffenseComponent';

export default class BodyComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="BodyComponent">
        <Pane width="100%" height={900} padding={16} paddingTop={0} display="flex">
            <CharacterInformationComponent />
            <Pane width="100%">
                <Pane height={400} display="flex" width="100%">
                    <Pane width="50%">
                        <DefenseComponent />
                    </Pane>
                    <Pane width="50%" padding={20}>
                        <Pane width="100%">
                            <OffenseComponent />
                        </Pane>
                    </Pane>
                </Pane>
                <Pane width={1508} height={450} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" background="rgba(0, 0, 0, 0.4)" padding={10} borderRadius={20} border={true}>
                    <Pane display="flex">
                        <Tab key="Skills" id="Skills" size={600} paddingBottom={12} color="black" background="rgba(256, 256, 256, 0.4)" borderBottomLeftRadius={0} borderBottomRightRadius={0} >Skills</Tab>
                        <Tab key="Items" id="Items" size={600} paddingBottom={12} color="white">Items</Tab>
                        <Tab key="Feats" id="Feats" size={600} paddingBottom={12} color="white">Feats</Tab>
                        <Tab key="Class Abilities" id="Class Abilities" size={600} paddingBottom={12} color="white">Class Abilities</Tab>
                        <Tab key="Racial Abilities" id="Racial Abilities" size={600} paddingBottom={12} color="white">Racial Abilities</Tab>
                        <Tab key="Misc." id="Misc." size={600} paddingBottom={12} color="white">Misc.</Tab>
                    </Pane>
                    <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={400} display="flex" justifyContent="flex-start" alignItems="flex-start" paddingTop={20} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
                        <Pane display="flex" flexDirection="column" >
                            <StatDisplayComponent name="Diplomacy" value="+1" width={500} height={50} marginLeft={20} marginRight={10}/>
                            <StatDisplayComponent name="Knowledge (Local)" value="+9" width={500} height={50} marginLeft={20} marginTop={12} marginRight={10}/>
                            <StatDisplayComponent name="Profession" value="+9" width={500} height={50} marginLeft={20} marginTop={12} marginRight={10}/>
                            <StatDisplayComponent name="Sense Motive" value="+9" width={500} height={50} marginLeft={20} marginTop={12} marginRight={10}/>
                            <StatDisplayComponent name="Survival" value="+7" width={500} height={50} marginLeft={20} marginTop={12} marginRight={10}/>
                            <StatDisplayComponent name="Swim" value="+9" width={500} height={50} marginLeft={20} marginTop={12} marginRight={10}/>
                        </Pane>
                    </Pane>
                </Pane>
            </Pane>
        </Pane>
      </div>
  };
}