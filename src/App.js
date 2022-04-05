import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Lips from './components/Lips';
import Eyes from './components/Eyes';
import Face from './components/Face';
import Nails from './components/Nails';
import Contact from './components/Contact';
import Services from './components/Services';
import Footer from './components/Footer';
import Card from './components/Card';
import OtherItem from './components/OtherItem';
import Api from './components/Api';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <main>
        <section>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/lips' element={<Lips/>}/>
            <Route path='/eyes' element={<Eyes/>}/>
            <Route path='/face' element={<Face/>}/>
            <Route path='/nails' element={<Nails/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/otherItem' element={<OtherItem/>}/>
            <Route path='/api' element={<Api/>}/>
            <Route path='/cart' element={<Card/>}/>
            <Route path='/faq' element={<FAQ/>}/>
          </Routes>
        </section>
      </main>
      </Router>
      <Footer/>
      
      
      
    </div>
  );
}

export default App;
