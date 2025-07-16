// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ResidentChecker from './pages/ResidentChecker';
import NoSrilankan from './pages/NoSrilankan';
import YesSrilankan from './pages/YesSrilankan';
import CheckSrilankanEligibility from './pages/CheckSrilankanEligibility';
import ExistCustomerDetailCheck from './pages/ExistCustomerDetailCheck';
import CreditLimitSection from './pages/CreditLimitSection';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resident-checker" element={<ResidentChecker />} />
              <Route path="/no-srilankan" element={<NoSrilankan />} />
              <Route path="/yes-srilankan" element={<YesSrilankan />} />
              <Route path="/check-srilankan-eligibility" element={<CheckSrilankanEligibility />} />
              <Route path="/exist-customer-detail" element={<ExistCustomerDetailCheck />} />
              <Route path="/credit-limit-select" element={<CreditLimitSection />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;