import React from 'react';
import { Pane, Tab, SelectMenu, Button, CaretDownIcon} from "evergreen-ui";
import { PageSize } from '../PageSize';

export default class TabsComponent extends React.Component {

  render() {
    if (this.props.windowWidth !== PageSize.MOBILE) {
      return <Pane display="flex">
          <Tab key="Skills" id="Skills" size={600} paddingBottom={12} color={this.props.selectedTab === "Skills" ? "black" : "white"} background={this.props.selectedTab === "Skills" && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Skills")}>Skills</Tab>
          <Tab key="Items" id="Items" size={600} paddingBottom={12} color={this.props.selectedTab === "Items" ? "black" : "white"} background={this.props.selectedTab === "Items" && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Items")}>Items</Tab>
          <Tab key="Feats" id="Feats" size={600} paddingBottom={12} color={this.props.selectedTab === "Feats" ? "black" : "white"} background={this.props.selectedTab === "Feats" && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Feats")}>Feats</Tab>
          <Tab key="Class Abilities" id="Class Abilities" size={600} paddingBottom={12} color={this.props.selectedTab === "Class Abilities" ? "black" : "white"} background={this.props.selectedTab === "Class Abilities" && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Class Abilities")}>Class Abilities</Tab>
          <Tab key="Racial Abilities" id="Racial Abilities" size={600} paddingBottom={12} color={this.props.selectedTab === "Racial Abilities" ? "black" : "white"} background={this.props.selectedTab === "Racial Abilities" && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Racial Abilities")}>Racial Abilities</Tab>
          <Tab key="Adjustments" id="Adjustments" size={600} paddingBottom={12} color={this.props.selectedTab === "Adjustments" ? "black" : "white"} background={this.props.selectedTab === "Adjustments" && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Adjustments")}>Adjustments</Tab>
          <Tab key="Misc." id="Misc." size={600} paddingBottom={12} color={this.props.selectedTab === "Misc." ? "black" : "white"} background={this.props.selectedTab === "Misc." && "rgba(256, 256, 256, 0.4)"} onClick={() => this.props.changeTab("Misc.")}>Misc.</Tab>
        </Pane>
    } else {
      return <Pane>
        <SelectMenu title="Tabs Option" options={['Skills', 'Items', 'Feats', 'Class Abilities', 'Racial Abilities', 'Adjustments', 'Misc.'].map((label) => ({label, value: label }))} selected={this.props.selectedTab} onSelect={(tab) => this.props.changeTab(tab.value)}>
          <Button background="rgba(0, 0, 0, 0)" color="white" height={50} iconAfter={CaretDownIcon}>{this.props.selectedTab}</Button>
        </SelectMenu>
      </Pane>
    }
  };
}