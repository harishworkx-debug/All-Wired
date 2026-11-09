import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyMobileCall from '@/components/StickyMobileCall';
import ScrollToTop from '@/components/ScrollToTop';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesOverviewPage from '@/pages/ServicesOverviewPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import LocationPage from '@/pages/LocationPage';
import ServiceLocationPage from '@/pages/ServiceLocationPage';
import ContactPage from '@/pages/ContactPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import DynamicRoutePage from '@/pages/DynamicRoutePage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesOverviewPage />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetailPage />} />
            <Route path="/service-areas" element={<ServiceAreasPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/electrician/:slug" element={<DynamicRoutePage />} />
            <Route path=":slug" element={<DynamicRoutePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <StickyMobileCall />
      </div>
    </BrowserRouter>
  );
}
