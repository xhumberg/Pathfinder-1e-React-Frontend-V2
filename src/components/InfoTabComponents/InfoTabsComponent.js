import React from 'react';
import { Pane, Tab, SelectMenu, Button, CaretDownIcon} from "evergreen-ui";
import StatDisplayComponent from '../StatDisplayComponent';
import { PageSize } from '../PageSize';
import TabsComponent from './TabsComponent';
import SkillsComponent from './SkillsComponent';
import ItemsComponent from './ItemsComponent';
import FeatsComponent from './FeatsComponent';
import ClassFeaturesComponent from './ClassFeaturesComponent';
import RacialTraitsComponent from './RacialFeaturesComponent';
import MiscFeaturesComponent from './MiscFeaturesComponent';
import AdjustmentsComponent from './AdjustmentsComponent';

export default class InfoTabsComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "Skills"
    }

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(tab) {
    this.setState({selectedTab: tab});
  }

  render() {
    var displayComponent = <SkillsComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    if (this.state.selectedTab === "Items") {
      displayComponent = <ItemsComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    } else if (this.state.selectedTab === "Feats") {
      displayComponent = <FeatsComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    } else if (this.state.selectedTab === "Class Abilities") {
      displayComponent = <ClassFeaturesComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    } else if (this.state.selectedTab === "Racial Abilities") {
      displayComponent = <RacialTraitsComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    } else if (this.state.selectedTab === "Adjustments") {
      displayComponent = <AdjustmentsComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    } else if (this.state.selectedTab === "Misc.") {
      displayComponent = <MiscFeaturesComponent character={this.props.character} windowWidth={this.props.windowWidth} />;
    }
    
    if (this.props.windowWidth === PageSize.DEFAULT) {
      return <Pane width="95%" minWidth={1400} height={420} display="flex" flexDirection="column" alignItems="flex-start" justifyContent="flex-start" background="rgba(0, 0, 0, 0.4)" padding={10} borderRadius={20} border={true} marginLeft={20}>
        <TabsComponent windowWidth={this.props.windowWidth} changeTab={this.changeTab} selectedTab={this.state.selectedTab}/>
        {displayComponent}
      </Pane>    
    } else if (this.props.windowWidth === PageSize.TABLET) {
      return <Pane width={725} display="flex" flexDirection="column" alignItems="flex-start" background="rgba(0, 0, 0, 0.4)" padding={10} borderRadius={20} border={true}>
        <TabsComponent windowWidth={this.props.windowWidth} changeTab={this.changeTab} selectedTab={this.state.selectedTab}/>
        {displayComponent}      
      </Pane>
    } else if (this.props.windowWidth === PageSize.VERTICAL) {
      return <Pane width="90%" display="flex" flexDirection="column" alignItems="flex-start" background="rgba(0, 0, 0, 0.4)" padding={10} borderRadius={20} border={true}>
        <TabsComponent windowWidth={this.props.windowWidth} changeTab={this.changeTab} selectedTab={this.state.selectedTab}/>
        {displayComponent}
      </Pane>
    } else {
      return <Pane width="100%" display="flex" flexDirection="column" background="rgba(0, 0, 0, 0.4)">
        <TabsComponent windowWidth={this.props.windowWidth} changeTab={this.changeTab} selectedTab={this.state.selectedTab}/>
        {displayComponent}
      </Pane>
    }
  };
}