import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./styles/NewApp.css"

import { Analytics } from '@vercel/analytics/react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Projects from './pages/Portfolio';
import Info from './pages/Info';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Switch>

       {/* Homepage */}
        <Route exact path="/" component={Home} />
       {/* Contact and Booking */}
        <Route path="/contact" component={Contact} />
       {/* Payment Portal */}
        <Route path="/payment" component={Payment} />
       {/* Projects */}
        <Route path="/projects" component={Projects} />
       {/* Info/ICS App Currently */}
        <Route path="/info" component={Info} />
       {/* Info/ICS App Currently */}
        <Route path="/privacy" component={Privacy} />
       {/* Info/ICS App Currently */}
        <Route path="/terms" component={Terms} />
     
       

      </Switch>
    </Router>
    <Analytics/>
  </React.StrictMode>
);

