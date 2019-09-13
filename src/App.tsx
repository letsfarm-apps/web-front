import React from 'react';
import './assets/fonts/feather/feather.min.css';
import './assets/css/theme.min.css';
import './styles/main.scss';
import LandingPage from "./containers/landingPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Auth from "./containers/Auth";
import Diseases from "./containers/Diseases";
import DiseaseDetails from "./containers/DiseaseDetails";

function App() {
  return (
      <Router>
          <Switch>
            <Route exact path={'/'} component={LandingPage}/>
            <Route exact path={'/platform/:page'} component={Diseases}/>
            <Route exact path={'/platform/disease/:id'} component={DiseaseDetails}/>
            <Route exact path={'/account'} component={Auth}/>
          </Switch>
      </Router>

  );
}

export default App;
