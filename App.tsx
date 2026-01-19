import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import CustomCursor from './components/UI/CustomCursor';
import ScrollToTop from './components/Layout/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import Methodology from './pages/Methodology';
import CoreFramework from './pages/CoreFramework';
import ProgramsOverview from './pages/ProgramsOverview';
import ProgramDetail from './pages/ProgramDetail';
import ForOrganizations from './pages/ForOrganizations';
import Contact from './pages/Contact';
import PhysicalSafety from './pages/PhysicalSafety';

// Organization Sub-pages
import OrgErrorReduction from './pages/OrgErrorReduction';
import OrgReputation from './pages/OrgReputation';
import OrgLegal from './pages/OrgLegal';
import OrgBurnout from './pages/OrgBurnout';

// Legal Pages
import LegalDisclaimer from './pages/LegalDisclaimer';
import BrandProtection from './pages/BrandProtection';
import CookiesPolicy from './pages/CookiesPolicy';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-text font-sans selection:bg-accent selection:text-white">
        <CustomCursor />
        <Navbar />
        
        <main className="pt-24 lg:pt-32 min-h-screen">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/metodika" element={<Methodology />} />
            <Route path="/metodika/core" element={<CoreFramework />} />
            <Route path="/programy" element={<ProgramsOverview />} />
            <Route path="/programy/:id" element={<ProgramDetail />} />
            <Route path="/pro-organizace" element={<ForOrganizations />} />
            
            {/* Organization Sub-routes */}
            <Route path="/pro-organizace/chybovost" element={<OrgErrorReduction />} />
            <Route path="/pro-organizace/reputace" element={<OrgReputation />} />
            <Route path="/pro-organizace/pravo" element={<OrgLegal />} />
            <Route path="/pro-organizace/vyhoreni" element={<OrgBurnout />} />
            
            {/* Special Protocols */}
            <Route path="/fyzicka-bezpecnost" element={<PhysicalSafety />} />

            <Route path="/kontakt" element={<Contact />} />

            {/* Legal Routes */}
            <Route path="/pravni-dolozka" element={<LegalDisclaimer />} />
            <Route path="/ochrana-znacky" element={<BrandProtection />} />
            <Route path="/cookies" element={<CookiesPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;