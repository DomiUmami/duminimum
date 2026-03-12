import "../styles/NewApp.css"
import MyForm from '../components/form';
import Header from '../components/header';
import Footer from '../components/footer';


function Cred() {

  return (
    <div className="App">
      <Header></Header>
        <p className='App-body'>
         <MyForm />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <Footer></Footer>
    </div>
  );
}

export default Cred;
