import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './styles/tailwind.css';

// COMPONENTS
import Header from './components/Header'

// PAGES
import Login from './pages/Login'
import Home from './pages/Home'
import Records from './pages/Records'
import Reports from './pages/Reports'
import Profile from './pages/Profile'
import SingleProfile from './pages/SingleProfile'
import SingleReport from './pages/SingleReport'
import SingleCivilian from './pages/SingleCivilian'
import Calculator from './pages/Calculator'
import Create from './pages/Create'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/create" component={Create} />
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/civilian/:id" component={SingleCivilian} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:id" component={SingleProfile} />
          <Route exact path="/reports" component={Reports} />
          <Route exact path="/reports/:id" component={SingleReport} />
          <Route path="/records" component={Records} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

