
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Header.css';
import './footer.css';
import './Mainpage.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <MainPage></MainPage>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
