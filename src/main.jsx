import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import "./styles/NewApp.css"
import ScrollToTop from './components/ScrollToTop';

import { Analytics } from '@vercel/analytics/react';

import Payment from './pages/Payment';


import About from './pages/About';
import LandingPage from './pages/LandingPage';
import Portfolio from './pages/Portfolio';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Booking from './pages/Booking';
import Contact from './pages/Contact';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <ScrollToTop/>
      <Switch>

       
       {/* Landing Page */}
        <Route exact path="/" component={LandingPage} />
       {/* Projects */}
        <Route path="/portfolio" component={Portfolio} />
       {/* About */}
        <Route path="/about" component={About} />
       {/* Privacy Policy Placeholder */}
        <Route path="/privacy-policy" component={Privacy} />
       {/* Terms Placeholder */}
        <Route path="/terms-and-conditions" component={Terms} />
       {/* Calendly Booking */}
        <Route path="/booking" component={Booking} />
       {/* Contact Form */}
        <Route path="/contact" component={Contact} />
     
      </Switch>
    </Router>
    <Analytics/>
  </React.StrictMode>
);

