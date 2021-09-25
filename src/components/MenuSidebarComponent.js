import React from 'react';
import { SideSheet, Position, MenuIcon, IconButton, Pane } from "evergreen-ui";
import GoogleLogoutButton from './Google/GoogleLogoutButton';

export default class MenuSidebarComponent extends React.Component {

    constructor(props) {
        super(props)
    
        this.state = {
          isVisible: false
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
                {console.log("Does this display?")}
                <GoogleLogoutButton handleLogout={this.props.handleGoogleLogout} name={this.props.loggedInName} />
            </Pane>
          </SideSheet>
          <IconButton icon={MenuIcon} size="large" onClick={() => this.setDisplaySidebar(true)}/>
        </React.Fragment>
      };
}


