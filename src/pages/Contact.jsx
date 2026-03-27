import "../styles/NewApp.css"


import Header from '../components/header';
import Footer from '../components/footer';


import ProjectCardGenerator from "../components/CardGenerator";
import GithubProfile from '../components/GitHubCall';

function Contact() {

  
  return (
    <div className="grid-container">
      <Header></Header>

      <main className="main">
        <GithubProfile username="DomiUmami" />
        <ProjectCardGenerator username="DomiUmami"/>
      </main>

      <aside className="rightside">
      </aside>

      <Footer></Footer>
    </div>
  );
}

export default Contact;