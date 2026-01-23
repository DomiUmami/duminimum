import React from 'react';
/*import { useHistory } from 'react-router-dom';*/
import '../styles/App.css';
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCardGenerator from "../components/CardGenerator";

function Home() {

  return (
    <div className='App'>
      <Header />
    <main className='main' style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome!</h1>
      <ProjectCardGenerator username="DomiUmami"/>
    </main>

      <Footer />
    </div>
  );
}

export default Home;

