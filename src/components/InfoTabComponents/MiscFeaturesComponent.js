import React from 'react';
import { Pane } from "evergreen-ui";
import { PageSize } from '../PageSize';
import StatDisplayComponent from '../StatDisplayComponent';
import TrackedResourceComponent from '../TrackedResourceComponent';

export default class MiscComponent extends React.Component {

    organizeColumnsForSkills(specialDefense, miscTrackedResources) {
  
      //TODO: Other specials (like attack) go here
      let misc = []
      miscTrackedResources.map((resource) => misc.push({name: resource.name, id: resource.id, amount: resource.amount}))
      specialDefense?.map((defense) => misc.push({name: defense}));

      if (this.props.windowWidth === PageSize.DEFAULT) {
        let numberOfMisc = misc?.length;
        let columns = Math.ceil(numberOfMisc/6);
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
          for (let i = currentColumn*6; i < currentColumn*6 + 6 && i < numberOfMisc; i++) 
          {
            console.log(misc[i])
            if (misc[i]?.id) {
            columnInternals.push(<TrackedResourceComponent 
              name={misc[i].name} 
              id={misc[i].id} 
              amount={misc[i].amount} 
              width={width} height={50} 
              marginLeft={20} 
              marginTop={8} 
              character={this.props.character}
              type="MISC"
            />)
          } else {
            columnInternals.push(<StatDisplayComponent name={misc[i].name} width={width} height={50} marginLeft={20} marginTop={8}/>)
          }
          }
          allColumns.push(<Pane display="flex" flexDirection="column">{columnInternals}</Pane>)
        }
  
        return allColumns;
      } else {
        return  misc?.map((misc) => misc.id ? 
        <TrackedResourceComponent 
          name={misc.name} 
          id={misc.id} 
          amount={misc.amount} 
          width="100%"
          character={this.props.character}
          type="MISC"
        /> 
      : 
        <StatDisplayComponent name={misc.name} width="100%"/>)
      }
    }

  render() {
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={380} display="flex" justifyContent="flex-start" alignMisc="flex-start" paddingTop={10} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
        {this.organizeColumnsForSkills(this.props.character.getJson().specialDefenses, this.props.character.getJson().miscTrackedResources)}
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="450" margin="auto">
          {this.organizeColumnsForSkills(this.props.character.getJson().specialDefenses, this.props.character.getJson().miscTrackedResources)}
        </Pane>
    }
  };
}