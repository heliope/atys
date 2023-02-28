import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./Header.css";
import "./footer.css";
import "./Mainpage.css";
import "./AboutUs.css";
import "./Services.css";
import "./Contact.css";
import "./table.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import News from "./components/News";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/News" element={<News/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
