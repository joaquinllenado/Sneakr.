import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import Dropdown from './components/Dropdown';
import { Routes, Route } from 'react-router-dom';
import MostPopular from "./pages/MostPopular";
import Jordan from "./pages/Jordan";
import Nike from "./pages/Nike";
import NewBalance from './pages/NewBalance';
import Adidas from './pages/Adidas';
import Puma from './pages/Puma';
import Crocs from './pages/Crocs';
import Converse from './pages/Converse';
import Hoka from './pages/Hoka';
import "./css/Main.css";
import { useState, useEffect } from 'react';
import Search from './pages/Search';
import OnRunningCloud from './pages/OnRunningCloud';

function App() {
  const [popular, setPopular] = useState([]);
  const [jordan, setJordan] = useState([]);
  const [nike, setNike] = useState([]);
  const [newBalance, setNewBalance] = useState([]);
  const [adidas, setAdidas] = useState([]);
  const [puma, setPuma] = useState([]);
  const [crocs, setCrocs] = useState([]);
  const [converse, setConverse] = useState([]);
  const [hoka, setHoka] = useState([]);
  const [on, setOn] = useState([]);
  const [loading, setLoading] = useState(true);

  const popularRequest = fetch("http://localhost:8000/mostpopular");
  const jordanRequest = fetch("http://localhost:8000/jordan");
  const nikeRequest = fetch("http://localhost:8000/nike");
  const newBalanceRequest = fetch("http://localhost:8000/newbalance");
  const adidasRequest = fetch("http://localhost:8000/adidas");
  const pumaRequest = fetch("http://localhost:8000/puma");
  const crocsRequest = fetch("http://localhost:8000/crocs");
  const converseRequest = fetch("http://localhost:8000/converse");
  const hokaRequest = fetch("http://localhost:8000/hoka");
  const onRequest = fetch("http://localhost:8000/on");

  async function fetchData(){
      Promise.all([
          popularRequest,
          jordanRequest,
          nikeRequest,
          newBalanceRequest,
          adidasRequest,
          pumaRequest,
          crocsRequest,
          converseRequest,
          hokaRequest,
          onRequest
      ])
        .then(([resPopular, resJordan, resNike, resNewBalance, resAdidas, resPuma, resCrocs, resConverse, resHoka, resOn]) =>
          Promise.all([
              resPopular.json(), 
              resJordan.json(), 
              resNike.json(), 
              resNewBalance.json(), 
              resAdidas.json(),
              resPuma.json(),
              resCrocs.json(),
              resConverse.json(),
              resHoka.json(),
              resOn.json()
          ])
      )
        .then(([dataPopular, dataJordan, dataNike, dataNewBalance, dataAdidas, dataPuma, dataCrocs, dataConverse, dataHoka, dataOn]) => {
          setPopular(dataPopular);
          setJordan(dataJordan);
          setNike(dataNike);
          setNewBalance(dataNewBalance);
          setAdidas(dataAdidas);
          setPuma(dataPuma);
          setCrocs(dataCrocs);
          setConverse(dataConverse);
          setHoka(dataHoka);
          setOn(dataOn);
        })
        .finally(() => {
          setLoading(false);
        });
  }

  useEffect(() => {
      fetchData();
  });

  return (
    <div className="App">
      <NavBar/>
      <Dropdown/>
      <Banner/>
      <Routes>
        <Route path="/" element={<Main popular={popular} jordan={jordan} nike={nike} newBalance={newBalance} adidas={adidas} puma={puma} crocs={crocs} converse={converse} HOKA={hoka} cloudOn={on} loading={loading}/>} />
        <Route path="/mostpopular" element={<MostPopular shoes={popular} loading={loading}/>} />
        <Route path="/jordan" element={<Jordan shoes={jordan} loading={loading}/>} />
        <Route path="/nike" element={<Nike shoes={nike} loading={loading}/>} />
        <Route path="/newbalance" element={<NewBalance shoes={newBalance} loading={loading}/>} />
        <Route path="/adidas" element={<Adidas shoes={adidas} loading={loading}/>} />
        <Route path="/puma" element={<Puma shoes={puma} loading={loading}/>} />
        <Route path="/crocs" element={<Crocs shoes={crocs} loading={loading}/>} />
        <Route path="/converse" element={<Converse shoes={converse} loading={loading}/>} />
        <Route path="/hoka" element={<Hoka shoes={hoka} loading={loading}/>} />
        <Route path="/on" element={<OnRunningCloud shoes={on} loading={loading}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
