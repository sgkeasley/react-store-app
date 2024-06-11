import './App.css';
import './css/custom.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Landing from './pages/Landing';
import Products from './pages/Products';
import About from './pages/About';
import Footer from './components/Footer';

// Create an app function to set the navigation route
function App() {
  return (
    <div className="App">
      <Header />
      <Menu />

      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
