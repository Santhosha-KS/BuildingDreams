/**
 * App — root component.
 * Sets up:
 *   1. ThemeProvider — makes useTheme() available everywhere
 *   2. BrowserRouter — enables React Router navigation
 *   3. PageLayout — Navbar + main + Footer
 *   4. Routes — maps URL paths to page components
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/context/ThemeContext';
import { PageLayout } from '@/components/layout/PageLayout';
import { ScrollToHash } from '@/components/layout/ScrollToHash';
import { ROUTES } from '@/constants/routes';

import { HomePage } from '@/pages/HomePage/HomePage';
import { OurHomesPage } from '@/pages/OurHomesPage/OurHomesPage';
import { PackagesPage } from '@/pages/PackagesPage/PackagesPage';
import { HowItWorksPage } from '@/pages/HowItWorksPage/HowItWorksPage';
import { ConsultationPage } from '@/pages/ConsultationPage/ConsultationPage';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    // ThemeProvider must be outermost — ThemeContext must be available to Navbar
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        {/* Handles /#hash smooth-scroll on every route change */}
        <ScrollToHash />
        <PageLayout>
          <Routes>
            <Route path={ROUTES.HOME}             element={<HomePage />} />
            <Route path={ROUTES.OUR_HOMES}        element={<OurHomesPage />} />
            <Route path={ROUTES.PACKAGES}         element={<PackagesPage />} />
            <Route path={ROUTES.HOW_IT_WORKS}     element={<HowItWorksPage />} />
            <Route path={ROUTES.GET_CONSULTATION} element={<ConsultationPage />} />
            {/* Catch-all 404 route — must be last */}
            <Route path="*"                       element={<NotFoundPage />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;