import React from 'react';
import { SideSheet, Position, MenuIcon, IconButton, Pane, FormFieldValidationMessage, Dialog, Button } from "evergreen-ui";
import GoogleLogoutButton from './Google/GoogleLogoutButton';
import ItemListModifierComponent from './ItemListModifierComponent';

export default class MenuSidebarComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isVisible: false,
          itemsDialogVisible: false
        }
    
        this.setDisplaySidebar = this.setDisplaySidebar.bind(this);
      }

    setDisplaySidebar(display) {
        this.setState({isVisible: display});
    }

    render() {
        return <React.Fragment>
          <SideSheet isShown={this.state.isVisible} onCloseComplete={() => this.setDisplaySidebar(false)} position={Position.LEFT} width={400}>
            <Pane width={400} padding={20} display="flex" flexDirection="column" alignItems="center">
                <GoogleLogoutButton handleLogout={this.props.handleGoogleLogout} name={this.props.loggedInName} />
                <ItemListModifierComponent visible={this.state.itemsDialogVisible} character={this.props.character}/>
                <Button onClick={() => this.props.character.reloadFromDatabase()}>Reload Character From Database</Button>
            </Pane>
          </SideSheet>
          <IconButton icon={MenuIcon} size="large" onClick={() => this.setDisplaySidebar(true)}/>
        </React.Fragment>
      };
}


