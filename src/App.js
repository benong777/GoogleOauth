import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import logo from './logo.svg';
import './App.css';
import LoginBtn from "./components/login";

const clientId = "909203397537-6li43mot3oecheeh4asel1gsh60lgmjk.apps.googleusercontent.com"

function App() {
  //-- Initialize client
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    //-- Load client
    gapi.load('client:auth2', start); 
  });

  return (
      <div className="App">
        <LoginBtn />
      </div>
  );
}

export default App;
