import React from 'react';
import { Pane } from "evergreen-ui";
import { PageSize } from '../PageSize';
import StatDisplayComponent from '../StatDisplayComponent';
import AdjustmentDisplayComponent from '../AdjustmentDisplayComponent';

export default class AdjustmentsComponent extends React.Component {

    organizeColumnsForSkills(allowedAdjustments, enabledAdjustments) {

      allowedAdjustments = allowedAdjustments.map((adjustment) => ({name: adjustment, enabled: false}));
      enabledAdjustments = enabledAdjustments.map((adjustment) => ({name: adjustment, enabled: true}));
      var adjustments = [...allowedAdjustments, ...enabledAdjustments];

      adjustments = adjustments.sort(function(a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      })
  
      if (this.props.windowWidth === PageSize.DEFAULT) {
        let numberOfAdjustments = adjustments?.length;
        let columns = Math.ceil(numberOfAdjustments/6);
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
          for (let i = currentColumn*6; i < currentColumn*6 + 6 && i < numberOfAdjustments; i++) {
            columnInternals.push(<AdjustmentDisplayComponent name={adjustments[i]?.name} width={width} height={50} marginLeft={20} marginTop={8} enabled={adjustments[i]?.enabled} character={this.props.character}/>)
          }
          allColumns.push(<Pane display="flex" flexDirection="column">{columnInternals}</Pane>)
        }
  
        return allColumns;
      } else {
        return adjustments?.map((adjustment) => <AdjustmentDisplayComponent name={adjustment?.name} width="100%" enabled={adjustment.enabled} character={this.props.character}/>)
      }
    }

  render() {
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={380} display="flex" justifyContent="flex-start" alignAdjustments="flex-start" paddingTop={10} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
        {this.organizeColumnsForSkills(this.props.character.getJson().allowedAdjustments, this.props.character.getJson().enabledAdjustments)}
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="450" margin="auto">
          {this.organizeColumnsForSkills(this.props.character.getJson().allowedAdjustments, this.props.character.getJson().enabledAdjustments)}
        </Pane>
    }
  };
}