import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { Routes, Route } from 'react-router-dom';
import { MostPopular, Jordan, Nike, NewBalance, Adidas, Puma, Crocs, Converse } from "./components/pages/";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dropdown/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mostpopular" element={<MostPopular />} />
        <Route path="/jordan" element={<Jordan />} />
        <Route path="/nike" element={<Nike />} />
        <Route path="/newbalance" element={<NewBalance />} />
        <Route path="/adidas" element={<Adidas />} />
        <Route path="/puma" element={<Puma />} />
        <Route path="/crocs" element={<Crocs />} />
        <Route path="/converse" element={<Converse />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
