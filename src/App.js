import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GetAppointment from './components/GetAppointment/GetAppointment';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/getAppointment">
            <GetAppointment></GetAppointment>
          </Route>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
