import React from 'react';
import { Pane } from "evergreen-ui";
import { PageSize } from '../PageSize';
import StatDisplayComponent from '../StatDisplayComponent';
import TrackedResourceComponent from '../TrackedResourceComponent';

export default class ItemsComponent extends React.Component {

    organizeColumnsForSkills(regularItems, trackedItems) {
  
      let items = []

      trackedItems.map((item) => items.push({name: item.name, id: item.resourceId, amount: item.amount}));
      regularItems.map((item) => items.push({name: item.name}));

      if (this.props.windowWidth === PageSize.DEFAULT) {
        let numberOfItems = items?.length;
        let columns = Math.ceil(numberOfItems/6);
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
          for (let i = currentColumn*6; i < currentColumn*6 + 6 && i < numberOfItems; i++) {
            let item = items[i];
            console.log(item)
            if (item?.id) {
              columnInternals.push(<TrackedResourceComponent 
                name={item.name} 
                id={item.id} 
                amount={item.amount} 
                width={width} height={50} 
                marginLeft={20} 
                marginTop={8} 
                character={this.props.character}
                type="ITEM"
              />)
            } else {
              columnInternals.push(<StatDisplayComponent name={item.name} width={width} height={50} marginLeft={20} marginTop={8}/>)
            }
          }
          allColumns.push(<Pane display="flex" flexDirection="column">{columnInternals}</Pane>)
        }
  
        return allColumns;
      } else {
        return items?.map((item) => item.id ? 
          <TrackedResourceComponent 
            name={item.name} 
            id={item.id} 
            amount={item.amount} 
            width="100%"
            character={this.props.character}
            type="ITEM"
          /> 
        : 
          <StatDisplayComponent name={item.name} width="100%"/>)
      }
    }

  render() {
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={380} display="flex" justifyContent="flex-start" alignItems="flex-start" paddingTop={10} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
        {this.organizeColumnsForSkills(this.props.character.getJson().items, this.props.character.getJson().trackedItems)}
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="450" margin="auto">
          {this.organizeColumnsForSkills(this.props.character.getJson().items, this.props.character.getJson().trackedItems)}
        </Pane>
    }
  };
}