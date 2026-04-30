import React from 'react';
import "../styles/PAT.css"
import Header from '../components/header';
import Footer from '../components/footer';

function Terms() {

  return (
    <div className='body'>
      <Header />
    <main className='pat-main'>
    <div>
      <div className='pat-container-b'>
          <h1 className='pat-title'>Terms and Conditions</h1>

          <h1 className='pat-header'>Last updated: [03/30/2026]</h1>

            <p className='pat-text-w'>By accessing this website, you agree to be bound by these Terms.</p>

          <h1 className='pat-header'>Use of Service</h1>

            <p className='pat-text-w'>You agree not to misuse the service or attempt to access it in unauthorized ways.</p>

          <h1 className='pat-header'>Intellectual Property</h1>

            <p className='pat-text-w'>All content and code are the property of DUMinimum.</p>

          <h1 className='pat-header'>Limitation of Liability</h1>

            <p className='pat-text-w'>We are not liable for any damages arising from the use of this website.</p>

          <h1 className='pat-header'>Termination</h1>

            <p className='pat-text-w'>We reserve the right to terminate access at any time.</p>

          <h1 className='pat-header'>Changes</h1>

            <p className='pat-text-w'>We may update these terms at any time.</p>
      </div>
    </div>


    </main>
      <Footer />
    </div>
  );
}

export default Terms;