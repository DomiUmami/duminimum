import React from 'react';
import "../styles/PAT.css"
import Header from '../components/header';
import Footer from '../components/footer';

function Privacy() {

  return (
    <div className='body'>
      <Header />
    <main className='pat-main'>
    <div className='pat-container-b'>
      <div>
        <h3 className='pat-title'>
          Privacy Policy </h3>
    <h3 className='about-text'>
          Last updated: [03/30/2026]</h3>          
    <p className='pat-text-w'>

          We collect personal information such as your name, email address, and usage data when you interact with our website.</p>

    <h3 className='pat-header'>
        How We Use Your Information</h3>
    <p className='pat-text-w'>
          We use your information to:</p>
    <ul className='pat-text-w'>
    <li>
          Provide and improve our services
      </li>
    <li>
          Process transactions
      </li>
    <li>
          Communicate with you
      </li>
      </ul>
    <h3 className='pat-header'>
      Third-Party Services</h3>

    <p className='pat-text-w'>
          We may use third-party services such as Stripe and analytics providers that collect, monitor, and analyze usage.</p>
    <h3 className='pat-header'>
           Your Rights</h3>
    <p className='pat-text-w'>
          You have the right to request access to or deletion of your personal data.</p>
    <h3 className='pat-header'>
           Contact Us</h3>
    <p className='pat-text-w'>
          If you have any questions, contact us at:   <a
  className="footerlink"
  href="https://mail.google.com/mail/?view=cm&fs=1&to=duminimum@gmail.com&su=Question%20Regarding%20Privacy%20Policy&body="
  target="_blank"
  rel="noopener noreferrer"
>
  duminimum@gmail.com
</a></p>

      </div>
    </div>
        
    </main>
      <Footer />
    </div>
  );
}

export default Privacy;