import React from 'react';
import './assets/css/theme.min.css';
import './styles/main.scss';
import LandingPage from "./containers/landingPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./containers/Auth";

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path={'/'} component={LandingPage}/>
            <Route exact path={'/platform'} component={LandingPage}/>
            <Route exact path={'/account'} component={Auth}/>
          </Switch>
      </Router>

  );
}

export default App;
