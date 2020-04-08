import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import GetAppointment from './components/GetAppointment/GetAppointment';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Admin/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/getAppointment">
            <Navbar></Navbar>
            <GetAppointment></GetAppointment>
          </Route>
          <Route path="/doctorsDashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route exact path="/">
            <Navbar></Navbar>
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
