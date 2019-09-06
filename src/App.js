import React from 'react';
import './App.css';
import Multiplier from './Multiplier';
import EvenClick from './EvenClick';
import CountBy from './CountBy';
import HideMe from './HideMe';
import MinimumLength from'./MinimumLength';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path="/multiplier/:x/:y" render={ ({match}) => (
          <Multiplier x={ +match.params.x } y={ +match.params.y } />
        )} />
        
        <Route exact path="/even-clicks" component={ EvenClick }/>
        
        <Route exact path="/minimum/:step" render={ ({ match }) => (
          <CountBy step={ +match.params.step }></CountBy>
        )} />

        <Route exact path="/hide-me" render={ () => (
          <HideMe>Blah blah blah</HideMe>
        )} />

        <Route exact path="/minimum/:length" render={ ({ match }) => (
          <MinimumLength length={ +match.params.length } />
        )} />

        
      </Switch>
      </>
    </Router>
  );
}

export default App;
