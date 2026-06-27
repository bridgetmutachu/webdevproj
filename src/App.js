import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Why from './components/Why';
import Steps from './components/Steps';
import SignIn from './components/Signin';
import Footer from './components/Footer';
import './App.css';


const App=()=> {
  return (
    <div id='app' className='App'>
      <Header/>
      <Hero/>
      <div className='card-container'>
        <Services/>
        <Why/>
        <Steps/>
        <SignIn/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
