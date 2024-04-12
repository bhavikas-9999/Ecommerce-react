import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import ProductsList from './components/Products';
import ProductDetails from './components/ProductDetails';
import About from './components/AboutUs/About';

function App() {
  return (
    <div className='container'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductsList/>} />
          <Route path='/products/:productId' element={<ProductDetails/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
