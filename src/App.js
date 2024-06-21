import './App.css';
import NavBar from './routes/NavBar';
import Banner from './routes/Banner';
import Main from './routes/Main';
import Footer from './routes/Footer';
import Dropdown from './routes/Dropdown';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Dropdown/>
      <Banner/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
