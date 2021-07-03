import React from 'react';
import { Pane, Heading, Strong, Button } from "evergreen-ui";
import StatDisplayComponent from './StatDisplayComponent';

export default class DefenseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      return <div className="CharacterImageComponent">
            <Pane alignItems="center" background="rgba(0, 0, 0, 0.4)" padding={5} border={true} borderRadius={10} marginTop={4}>
                <Pane display="flex" justifyContent="space-evenly" margin="auto">
                    <Pane margin="auto" width="33%">
                        <Heading size={600} marginBottom={4} color="white">Nonlethal Damage</Heading>
                        <Strong color="white">10</Strong>
                    </Pane>
                    <Pane margin="auto" width="34%">
                        <Heading size={700} marginBottom={4} color="white">Hit Points</Heading>
                        <Heading size={600} color="white">30/35</Heading>
                    </Pane>
                    <Pane margin="auto" width="33%">
                        <Heading size={600} marginBottom={4} color="white">Temp HP</Heading>
                        <Strong color="white">10</Strong>
                    </Pane>
                </Pane>
                <Pane width={700} height={35} background="black" margin="auto" borderRadius={17} padding={5}>
                    <Pane width={30/35*700} height={25} background="green800" borderRadius={12}>
                    </Pane>
                </Pane>
                <Pane 
                    display="flex"
                    padding={10}
                    paddingBottom={0}
                    borderRadius={3}
                    margin="auto"
                    marginBottom={0}
                    width="90%"
                >
                    <Pane flex={1} marginLeft={0} alignItems="flex-start" display="flex">
                        <Button marginRight={5} background="rgba(256, 256, 256, 0.4)" color="black">Lethal Damage</Button>
                        <Button background="rgba(256, 256, 256, 0.4)" color="black">Nonlethal Damage</Button>
                    </Pane>
                    <Pane>
                        <Button marginRight={5} background="rgba(256, 256, 256, 0.4)" color="black">Heal</Button>
                        <Button background="rgba(256, 256, 256, 0.4)" color="black">Temp HP</Button>
                    </Pane>
                </Pane>
            </Pane>
            <Pane 
                display="flex" 
                padding={16}
                paddingTop={0}
                paddingBottom={0}
                borderRadius={3}
            >
                <Pane flex={1} alignItems="center" justifyContent="flex-start" width="50%" display="flex" flexDirection="column">
                    <StatDisplayComponent name="AC" value="25" height={50} width={300} marginTop={8}/>
                    <StatDisplayComponent name="Flat-Footed" value="25" height={50} width={300} marginTop={16}/>
                    <StatDisplayComponent name="Touch" value="10" height={50} width={300} marginTop={16}/>
                </Pane>
                <Pane alignItems="center" justifyContent="flex-start" width="50%" display="flex" flexDirection="column">
                    <StatDisplayComponent name="Fort" value="+9" height={50} width={300} marginTop={8}/>
                    <StatDisplayComponent name="Ref" value="+4" height={50} width={300} marginTop={16}/>
                    <StatDisplayComponent name="Will" value="+9" height={50} width={300} marginTop={16}/>
                </Pane>
            </Pane>
            <Pane background="rgba(0, 0, 0, 0.4)" width="95%" margin="auto" marginTop={8} borderRadius={3} height={50} border={true}>
                <Heading size={500} color="white">Special Defenses</Heading>
                <Pane display="flex" justifyContent="space-evenly" marginTop={8}>
                    <Heading size={400} color="white">DR 1/-</Heading>
                    <Heading size={400} color="white">Fire Resistance 5</Heading>
                    <Heading size={400} color="white">+1 Vs Divine Spells</Heading>
                </Pane>
            </Pane>
      </div>
  };
}