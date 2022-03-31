import {useState} from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "909203397537-6li43mot3oecheeh4asel1gsh60lgmjk.apps.googleusercontent.com"

export default function Login() {

    const [showLoginBtn, setShowLoginBtn] = useState(true);
    const [showLogoutBtn, setShowLogoutBtn] = useState(false);

    //-- Login
    const onLoginSuccess = (res) => {
        setShowLoginBtn(false)
        setShowLogoutBtn(true);
        console.log("Login Successful!");
        console.log("Current user: ", res.profileObj);
    }

    const onLoginFailure = (res) => {
        console.log("Login failed! ", res);
    }

    //-- Logout
    const onLogoutSuccess = () => {
        console.clear();
        console.log("You are now logged out!");
        setShowLoginBtn(true)
        setShowLogoutBtn(false);
    };

    return (
        <div>
            { showLoginBtn && 
                <div id="signInBtn">
                    {/* //-- Google login library - login button */}
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign-in with Google"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        />
                </div>
            }

            { showLogoutBtn && 
                <div id="signOutBtn">
                    {/* //-- Google logout library - logout button */}
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                    />
                </div>
            }      
        </div>
    )
}