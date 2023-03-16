import './App.css';
import About from './components/about/About';
import Join from './components/authorization/Join';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Techno from './components/technologies/Techno';
import Virtual from './components/virtual/Virtual';



function App() {
  return (
    <div className="App">
      <Header/>
      <Virtual/>
      <Contact/>
      <About/>
      <Techno/>
      <Join/>
      <Footer/>
    </div>
  );
}

export default App;
