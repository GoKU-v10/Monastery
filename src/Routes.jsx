import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import AudioWisdomLibrary from './pages/audio-wisdom-library';
import AIManuscriptPortal from './pages/ai-manuscript-portal';
import HeritageCommunity from './pages/heritage-community';
import VirtualPilgrimageCenter from './pages/virtual-pilgrimage-center';
import Homepage from './pages/homepage';
import EnvironmentalStewardship from './pages/environmental-stewardship';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/audio-wisdom-library" element={<AudioWisdomLibrary />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/ai-manuscript-portal" element={<AIManuscriptPortal />} />
        <Route path="/heritage-community" element={<HeritageCommunity />} />
        <Route path="/virtual-pilgrimage-center" element={<VirtualPilgrimageCenter />} />
        <Route path="/environmental-stewardship" element={<EnvironmentalStewardship />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
