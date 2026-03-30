import React from 'react';
import "../styles/NewApp.css"
import Header from '../components/header';
import Footer from '../components/footer';
import handleCheckout from '../components/handleCheckout';

function Payment() {




  return (
    <div className='body'>
      <Header />
    <main className='main'>

    <button className='bookingbtn' onClick={handleCheckout}>
      <a className='bookingtext'>
      Click me HERE
      </a>
      </button>
        
    </main>
      <Footer />
    </div>
  );
}

export default Payment;
