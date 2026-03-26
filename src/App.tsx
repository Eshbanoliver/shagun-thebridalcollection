import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingButtons from './components/FloatingButtons/FloatingButtons';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import ScrollRestoration from './components/ScrollRestoration';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import './App.css';

function App(): React.JSX.Element {
  return (
    <Router>
      <ScrollRestoration />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
