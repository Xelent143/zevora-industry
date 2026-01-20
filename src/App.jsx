import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Manufacturing from './pages/Manufacturing';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';

import AboutHeritage from './pages/AboutHeritage';
import QualityControl from './pages/QualityControl';
import Sustainability from './pages/Sustainability';
import TechnicalSupport from './pages/TechnicalSupport';
import WholesaleInquiry from './pages/WholesaleInquiry';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import MasterDashboard from './pages/MasterDashboard';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/about-heritage" element={<AboutHeritage />} />
            <Route path="/quality-control" element={<QualityControl />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/technical-support" element={<TechnicalSupport />} />
            <Route path="/wholesale-inquiry" element={<WholesaleInquiry />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/master" element={<MasterDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
