import React from 'react';
import "../styles/NewApp.css"
import Header from '../components/header';
import Footer from '../components/footer';

function Terms() {

  return (
    <div className='body'>
      <Header />
    <main className='main'>
    <div>
      <div className='about-container' style={{ fontFamily}}>
          <h1 className='about-text'>Terms and Conditions</h1>

          <h1 className='about-text'>Last updated: [03/30/2026]</h1>

            <p className='about-text'>By accessing this website, you agree to be bound by these Terms.</p>

          <h1 className='about-text'>Use of Service</h1>

            <p className='about-text'>You agree not to misuse the service or attempt to access it in unauthorized ways.</p>

          <h1 className='about-text'>Intellectual Property</h1>

            <p className='about-text'>All content and code are the property of DUMinimum.</p>

          <h1 className='about-text'>Limitation of Liability</h1>

            <p className='about-text'>We are not liable for any damages arising from the use of this website.</p>

          <h1 className='about-text'>Termination</h1>

            <p className='about-text'>We reserve the right to terminate access at any time.</p>

          <h1 className='about-text'>Changes</h1>

            <p className='about-text'>We may update these terms at any time.</p>
      </div>
    </div>


    </main>
      <Footer />
    </div>
  );
}

export default Terms;