import React from 'react';

import "../styles/Verity.css"


import Header from '../components/header';
import Footer from '../components/footer';




function Verity() {
  
  return (
    <div className="grid-container">
      <Header></Header>

      <main className="main">
        <div className='verity-card'>
            
            Content
            <div className='verity-button-container'>
                 <button class="verity-button">1</button>
                 <button class="verity-button">2</button>
                 <button class="verity-button">3</button>
            </div>
        </div>
      </main>

      <aside className="rightside">
        
      </aside>

      <Footer></Footer>
    </div>
  );
}

export default Verity;