
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Header.css';
import './footer.css';
import './Mainpage.css';
import './AboutUs.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './components/MainPage';
import { useState } from 'react';
import AboutUs from './components/AboutUs';


function App() {
  const [showAboutUs, setShowAboutUs] = useState(false);



  return (
    <BrowserRouter>
      <div className="App">
        <Header toggleAboutUs = {setShowAboutUs}></Header>
        {!showAboutUs ? (
          <MainPage/>
        ) : (
         <AboutUs/>
        )}
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
