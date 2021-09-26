import React from 'react';
import { Pane } from "evergreen-ui";
import { PageSize } from '../PageSize';
import StatDisplayComponent from '../StatDisplayComponent';
import TrackedResourceComponent from '../TrackedResourceComponent';

export default class ClassFeaturesComponent extends React.Component {

  organizeColumnsForSkills(regularClassFeatures, trackedClassFeatures) {

    let features = [];
    trackedClassFeatures.map((classFeature) => features.push({name: classFeature.name, id: classFeature.id, amount: classFeature.amount}));
    regularClassFeatures.map((classFeature) => features.push({name: classFeature.name}));

    if (this.props.windowWidth === PageSize.DEFAULT) {
      let numberOfClassFeatures = features?.length;
      let columns = Math.ceil(numberOfClassFeatures/6);
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
        for (let i = currentColumn*6; i < currentColumn*6 + 6 && i < numberOfClassFeatures; i++) {
          if (features[i]?.id) {
            columnInternals.push(<TrackedResourceComponent 
              name={features[i]?.name} 
              id={features[i]?.id} 
              amount={features[i]?.amount} 
              width={width} height={50} 
              marginLeft={20} 
              marginTop={8} 
              character={this.props.character}
              type="CLASS_FEATURE"
            />)
          } else {
            columnInternals.push(<StatDisplayComponent name={features[i]?.name} width={width} height={50} marginLeft={20} marginTop={8}/>)
          }
        }
      allColumns.push(<Pane display="flex" flexDirection="column">{columnInternals}</Pane>)
      }

      return allColumns;
    } else {
      return <React.Fragment>
        {features?.map((classFeature) => classFeature.id ? 
          <TrackedResourceComponent name={classFeature.name} id={classFeature.id} amount={classFeature.amount} width="100%" character={this.props.character} type="CLASS_FEATURE"/>
        : 
          <StatDisplayComponent name={classFeature.name} width="100%"/>)}
        </React.Fragment>
      }
    }

  render() {
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane background="rgba(256, 256, 256, 0.4)" marginTop={0} width="100%" height={380} display="flex" justifyContent="flex-start" alignItems="flex-start" paddingTop={10} borderBottomLeftRadius={10} borderBottomRightRadius={10}>
      {this.organizeColumnsForSkills(this.props.character.getJson().classFeatures, this.props.character.getJson().classTrackedFeatures)}
      </Pane>
    } else {
      return <Pane display="flex" flexDirection="column" width="450" margin="auto">
      {this.organizeColumnsForSkills(this.props.character.getJson().classFeatures, this.props.character.getJson().classTrackedFeatures)}
      </Pane>
    }
  };
}