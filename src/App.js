import './App.css';
import axios from 'axios'
import Download from './Components/pages/Download/Download';
import Home from './Components/pages/home/home';
import Navbar from './Components/pages/Navbar/Navbar';
import Podcast from './Components/pages/Podcast/Podcast';
import SignUp from './Components/pages/SignUp/SignUp';
import { Routes, Route } from "react-router-dom";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/download" element={<Download />} />
          <Route path="/sign" element={<SignUp />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
