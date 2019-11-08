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

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/:id" component={SingleProfile} />
          <Route path="/reports" component={Reports} />
          <Route path="/records" component={Records} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

