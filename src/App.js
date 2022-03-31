import logo from './logo.svg';
import './App.css';
import LoginBtn from "./components/login";

const clientId = "909203397537-6li43mot3oecheeh4asel1gsh60lgmjk.apps.googleusercontent.com"

function App() {
  
  return (
      <div className="App">
          <div className="container">
              <div className="card">
                  <h1>Log in</h1>
                  <div className="log-in">
                  <input type="text" placeholder="County" list="counties"></input>
                  <datalist id="counties">
                      <option value="Stanislaus County"></option>
                      <option value="San Joaquin County"></option>
                      <option value="Merced County"></option>
                      <option value="Tuolumne County"></option>
                      <option value="Madera County"></option>
                  </datalist>
                  <input type="text" placeholder="Unit Number" list="units"></input>
                  <datalist id="units">
                      <option value="Unit 101"></option>
                      <option value="Unit 102"></option>
                      <option value="Unit 103"></option>
                      <option value="Unit 104"></option>
                  </datalist>


                      {/* <button>Sign In with Google</button> */}
                      <LoginBtn className="login-button"/>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
