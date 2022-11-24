import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import TopHeader from './Components/TopHeader';
import OfferSlider from './Components/OfferSlider';
import ProductCategory from './Components/ProductCategory';
import PosterSection from './Components/PosterSection';
import OurProducts from './Components/OurProducts';
import NewArrivals from './Components/NewArrivals';
import ServiceSection from './Components/ServiceSection';
import Footer from './Components/Footer';


function App() {
  return <>
  <BrowserRouter>
  <TopHeader/>
  <OfferSlider/>
  <ProductCategory/>
  <PosterSection/>
  <OurProducts/>
  <NewArrivals/>
  <ServiceSection/>
  <Footer/>
  
  <Routes>

  </Routes>
  </BrowserRouter>
  </>
}

export default App;
