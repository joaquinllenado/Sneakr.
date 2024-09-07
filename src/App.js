import './App.css';
import './css/Main.css';
import { NavBar, Banner, Main, Footer, Dropdown, BackToTopButton } from './components';
import { MostPopular, Jordan, Nike, NewBalance, Adidas, Puma, Crocs, Converse, Hoka, Search, OnRunningCloud, News, About, Help, Sell } from './pages';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  const location = useLocation();
  const bannerHiddenPaths = ['/news', '/about', '/help', '/sell'];

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
      {!bannerHiddenPaths.includes(location.pathname) &&
        <Banner/>
      }
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
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
      <BackToTopButton />
      <Footer/>
    </div>
  );
}

export default App;
