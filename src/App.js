import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Search from './Components/Search';
import Filters from './Components/Filters';
import MainCards from './Components/MainCards';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Search/>
      <Filters/>
      <MainCards/>
      <Footer/>
    </div>
  );
}

export default App;
