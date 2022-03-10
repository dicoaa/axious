import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Body } from "./components/Pages/Body/Body";
import { Contact } from "./components/Pages/Contact/Contact";
import { AboutUs } from "./components/Pages/AboutUs/AboutUs";
import { Git } from './components/Pages/Git/Git';
import { Twitter } from './components/Pages/Twitter/Twitter';
import { Info } from './components/Pages/Info/Info';

function App() {
  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/AboutUs" element={<AboutUs/>}/>
            <Route path="/Git" element={<Git/>}/>
            <Route path="/Twitter" element={<Twitter/>}/>
            <Route path="/Info" element={<Info/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

// AboutUs
// LinkedIn
// Twitter
// Information