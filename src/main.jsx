import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/NewApp.css"

import { Analytics } from '@vercel/analytics/react';

import Cred from './pages/Cred';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Verity from './pages/Verity';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {/* Homepage */}
        <Route exact path="/" component={Home} />

        {/* Your form/application */}
        <Route path="/cred" component={Cred} />

       {/* Contact */}
        <Route path="/contact" component={Contact} />
       
       {/* Verity */}
        <Route path="/verity" component={Verity} />

      </Switch>
    </Router>
    <Analytics/>
  </React.StrictMode>
);

