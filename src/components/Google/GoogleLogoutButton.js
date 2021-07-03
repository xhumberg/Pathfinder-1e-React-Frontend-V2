import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '840466999232-ftkvdkmekuig8i89t793qggpmun6td9d.apps.googleusercontent.com';

export default class GoogleLogoutButton extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        console.log('[Logout Success]');
        this.props.handleLogout();
    };

    render() {
        const buttonText = "Logout " + this.props.name;
    return <GoogleLogout
                clientId={clientId}
                buttonText={buttonText}
                onLogoutSuccess={this.logout}
            />
    }

}