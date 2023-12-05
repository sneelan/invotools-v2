import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import MobilePreview from './MobilePreview';
import TabletPreview from './TabletPreview';
import TabletPreviewLands from './TabletPreviewLands';
import DragFeature from './DragFeature';
import RootTheme from './RootTheme';
import DemoPage from './DemoPage';
import { useParams } from 'react-router-dom';
import ErrorNotFound from './ErrorNotFound';
import HomePageDouble from './doublediamond/home';
import Splash from './doublediamond/splash';


const App = () => {
  // Use the useParams hook to get the values of id1 and id2
  const { activeTheme, clientid,invoiceid } = useParams();
 

  return (
    <>   
    <Router>
     <Routes>
     <Route path="/" element={<RootTheme />} />
     {/* <Route path="/" element={<WidgetAll />} /> */}
        <Route path="/demo/:clientid/:activeTheme/:invoiceid" element={<DemoPage />} />    

        <Route path="/invoice" element={<WidgetAll activeTheme={activeTheme}/>} />

        <Route path="/blue" element={<WidgetAll activeTheme='blue' />} />
        <Route path="/green" element={<WidgetAll activeTheme='green' />} />
        <Route path="/yellow" element={<WidgetAll activeTheme='yellow' />} />
        <Route path="/black" element={<WidgetAll activeTheme='black' />} />
        <Route path="/red" element={<WidgetAll activeTheme='red' />} />
        <Route path="/maroon" element={<WidgetAll activeTheme='maroon' />} />   

        <Route path="/diwali" element={<WidgetAll activeTheme='diwali' />} />        
        <Route path="/christmas" element={<WidgetAll activeTheme='christmas' />} />        
        <Route path="/thanks" element={<WidgetAll activeTheme='thanks' />} />        
        <Route path="/ads" element={<WidgetAll activeTheme='ads' />} />        

        <Route path="/mobile" element={<MobilePreview />} />
        <Route path="/tablet" element={<TabletPreview />} />
        <Route path="/tablet-landscape" element={<TabletPreviewLands />} />   
        <Route path="/drag" element={<DragFeature />} />
        
        <Route path="/dd" element={<Splash />} />
        <Route path="/dd/home" element={<HomePageDouble />} />

        {/* Wildcard route to match any other paths */}
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </Router>
    </>
  );
}; 

export default App;