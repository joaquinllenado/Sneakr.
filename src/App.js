import './App.css';
import './css/Main.css';
import { NavBar, Banner, Main, Footer, Dropdown, BackToTopButton } from './components';
import { MostPopular, Jordan, Nike, NewBalance, Adidas, Puma, Crocs, Converse, Hoka, Search, OnRunningCloud } from './pages';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const categories = ['mostpopular', 'jordan', 'nike', 'newbalance', 'adidas', 'puma', 'crocs', 'converse', 'hoka', 'on'];
const categoryFetchUrls = categories.reduce((acc, category) => {
  acc[category] = `https://sneakr-server.vercel.app/${category}`;
  return acc;
}, {});

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const responses = await Promise.all(
        Object.values(categoryFetchUrls).map(url => fetch(url))
      );
      const jsonData = await Promise.all(responses.map(res => res.json()));
      const dataObject = categories.reduce((acc, category, index) => {
        acc[category] = jsonData[index];
        return acc;
      }, {});
      setData(dataObject);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar/>
      <Dropdown/>
      <Routes>
        <Route path="/" element={<Main {...data} loading={loading}/>} />
        <Route path="/mostpopular" element={<MostPopular shoes={data.mostpopular} loading={loading}/>} />
        <Route path="/jordan" element={<Jordan shoes={data.jordan} loading={loading}/>} />
        <Route path="/nike" element={<Nike shoes={data.nike} loading={loading}/>} />
        <Route path="/newbalance" element={<NewBalance shoes={data.newbalance} loading={loading}/>} />
        <Route path="/adidas" element={<Adidas shoes={data.adidas} loading={loading}/>} />
        <Route path="/puma" element={<Puma shoes={data.puma} loading={loading}/>} />
        <Route path="/crocs" element={<Crocs shoes={data.crocs} loading={loading}/>} />
        <Route path="/converse" element={<Converse shoes={data.converse} loading={loading}/>} />
        <Route path="/hoka" element={<Hoka shoes={data.hoka} loading={loading}/>} />
        <Route path="/on" element={<OnRunningCloud shoes={data.on} loading={loading}/>} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <BackToTopButton />
      <Footer/>
    </div>
  );
}

export default App;