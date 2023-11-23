import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import MobilePreview from './MobilePreview';
import TabletPreview from './TabletPreview';
import TabletPreviewLands from './TabletPreviewLands';
import DragFeature from './DragFeature';
import RootTheme from './RootTheme';

const App = () => {
  return (
    <Router>
     <Routes>
     <Route path="/" element={<RootTheme />} />
     {/* <Route path="/" element={<WidgetAll />} /> */}
        <Route path="/invoice" element={<WidgetAll/>} />
        <Route path="/blue" element={<WidgetAll activeTheme='blue' />} />
        <Route path="/green" element={<WidgetAll activeTheme='green' />} />
        <Route path="/yellow" element={<WidgetAll activeTheme='yellow' />} />
        <Route path="/demo" element={<WidgetAll/>} />
        <Route path="/mobile" element={<MobilePreview />} />
        <Route path="/tablet" element={<TabletPreview />} />
        <Route path="/tablet-landscape" element={<TabletPreviewLands />} />
        <Route path="/drag" element={<DragFeature />} />
      </Routes>
    </Router>
  );
};

export default App;