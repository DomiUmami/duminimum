import React from 'react';
import "../styles/NewApp.css"
import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCardGenerator from "../components/CardGenerator";

function Home() {

  return (
    <div className='body'>
      <Header />
    <main className='main'>
      <ProjectCardGenerator username="DomiUmami"/>
    </main>
      <Footer />
    </div>
  );
}

export default Home;