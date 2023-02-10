
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Header.css';
import './footer.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Footer></Footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
