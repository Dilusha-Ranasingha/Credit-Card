// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CheckSrilankanEligibility from './pages/CheckSrilankanEligibility';
import ExistCustomerDetailCheck from './pages/ExistCustomerDetailCheck';
import CreditLimitSection from './pages/CreditLimitSection';
import ApplicationForm01 from './pages/ApplicationForm01';
import ApplicationForm02 from './pages/ApplicationForm02';
import ApplicationForm03 from './pages/ApplicationForm03';
import ApplicationForm04 from './pages/ApplicationForm04';
import ApplicationForm05 from './pages/ApplicationForm05';
import ApplicationForm06 from './pages/ApplicationForm06';
import ApplicationForm07 from './pages/ApplicationForm07';
import Eligibility from './pages/Eligibility';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/check-eligibility" element={<CheckSrilankanEligibility />} />
              <Route path="/exist-customer-detail" element={<ExistCustomerDetailCheck />} />
              <Route path="/credit-limit-select" element={<CreditLimitSection />} />
              <Route path="/application-form-01" element={<ApplicationForm01 />} />
              <Route path="/application-form-02" element={<ApplicationForm02 />} />
              <Route path="/application-form-03" element={<ApplicationForm03 />} />
              <Route path="/application-form-04" element={<ApplicationForm04 />} />
              <Route path="/application-form-05" element={<ApplicationForm05 />} />
              <Route path="/application-form-06" element={<ApplicationForm06 />} />
              <Route path="/application-form-07" element={<ApplicationForm07 />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;