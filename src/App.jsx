// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CheckSrilankanEligibility from './pages/CheckSrilankanEligibility';
import ExistCustomerDetailCheck from './pages/ExistCustomerDetailCheck';
import CreditLimitSection from './pages/CreditLimitSection';
import PersonalDetails from './pages/PersonalDetails';
import ContactDetails from './pages/ContactDetails';
import EmploymentDetails from './pages/EmploymentDetails';
import CashbackDetails from './pages/CashbackDetails';
import SupplementaryCard from './pages/SupplementaryCard';
import Almostthere from './pages/Almostthere';
import IdentityVerification from './pages/IdentityVerification';
import Eligibility from './pages/Eligibility';
import AddNIC from './pages/AddNIC';
import NewCashbackDetails from './pages/NewCustomer/NewCashbackDetails';

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
              <Route path="/add-nic" element={<AddNIC />} />
              <Route path="/exist-customer-detail" element={<ExistCustomerDetailCheck />} />
              <Route path="/credit-limit-select" element={<CreditLimitSection />} />
              <Route path="/personal-details" element={<PersonalDetails />} />
              <Route path="/contact-details" element={<ContactDetails />} />
              <Route path="/employment-details" element={<EmploymentDetails />} />
              <Route path="/cashback-details" element={<CashbackDetails />} />
              <Route path="/supplementary-card" element={<SupplementaryCard />} />
              <Route path="/almost-there" element={<Almostthere />} />
              <Route path="/identity-verification" element={<IdentityVerification />} />
              <Route path="/new-cashback-details" element={<NewCashbackDetails />} />
            </Routes>
          </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;