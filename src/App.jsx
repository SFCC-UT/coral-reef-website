import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { FaTwitter, FaInstagram, FaFacebookF, FaEnvelope} from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import News from "./pages/News.jsx";
import Gallery from "./pages/Gallery.jsx";
import Join from "./pages/Join.jsx";

function Navbar() {
  const location = useLocation();

  // If we are on the home page, give navbar a black background; otherwise, transparent
  const navClass = location.pathname === "/" 
    ? "navbar bg-[#020206] px-6 z-50" 
    : "navbar bg-transparent px-6 z-50";

  return (
    <div className={navClass}>
      <div className="navbar-start">
        <Link to="/">
          <img src="/sfcc.avif" alt="SFCC Logo" className="h-32 w-auto" />
        </Link>
        <span className="text-2xl font-bold ml-2">
          Students Fighting Climate Change
        </span>
      </div>
      <div className="navbar-end flex items-center gap-4">
        <Link to="/" className="btn btn-ghost">Home</Link>
        <Link to="/about" className="btn btn-ghost">About</Link>
        <Link to="/join" className="btn btn-ghost">Join</Link>
        <div className="flex gap-2 ml-4">
          <a href="https://x.com/sfccut" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://www.instagram.com/sfccut" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.facebook.com/studentsfightingclimatechange/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="mailto:saveourfuture.sfcc@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>    
          <a href="https://saveourfuturesfcc.wixsite.com/sfcc" target="_blank" rel="noopener noreferrer" ><CgWebsite /></a>              
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/join" element={<Join />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
