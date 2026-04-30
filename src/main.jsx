import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import "./styles/NewApp.css"
import ScrollToTop from './components/ScrollToTop';

import { Analytics } from '@vercel/analytics/react';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Projects from './pages/Portfolio';
import Info from './pages/Info';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Booking from './pages/Booking';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <ScrollToTop/>
      <Switch>

       {/* Homepage */}
       {/* Contact and Booking */}
        <Route exact path="/" component={Contact} />
       {/* Payment Portal */}
        <Route path="/payment" component={Payment} />
       {/* Projects */}
        <Route path="/projects" component={Projects} />
       {/* Info/ICS App Currently */}
        <Route path="/info" component={Info} />
       {/* Info/ICS App Currently */}
        <Route path="/privacy-policy" component={Privacy} />
       {/* Info/ICS App Currently */}
        <Route path="/terms-and-conditions" component={Terms} />
       {/* Calendly Booking */}
        <Route path="/booking" component={Booking} />
     
       

      </Switch>
    </Router>
    <Analytics/>
  </React.StrictMode>
);

