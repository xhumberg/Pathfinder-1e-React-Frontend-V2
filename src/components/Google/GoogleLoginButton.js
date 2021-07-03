import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '840466999232-ftkvdkmekuig8i89t793qggpmun6td9d.apps.googleusercontent.com';

export default class GoogleLoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess (res) {
        console.log('[Login Success] currentUser:', res.profileObj.name);
        this.props.handleToken(res);
    };
    
    onFailure(res) {
        console.log('[Login failed] res:', res);
    }

    render() {
    return <div>
            <GoogleLogin
                clientId={clientId}
                buttonText='Login with Google'
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    }

}