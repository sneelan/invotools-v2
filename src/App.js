import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import DeviceView from './DeviceView';
 import DragFeature from './DragFeature';
import RootTheme from './RootTheme';
import DemoPage from './DemoPage';
import { useParams } from 'react-router-dom';
import ErrorNotFound from './ErrorNotFound';
import ARootInvoice from './ARootInvoice'; 
import ClientPage from './ClientPage';
import NeelanPage from './NeelanPage';

import ViewId from './View_id';
import NewDemo from './NewDemo';


const App = () => {
  // Use the useParams hook to get the values of id1 and id2
  const { activeTheme, clientid,invoiceid, colorForLanguagePage, urlMode, urlFont, urlColor, urlLanguage, simpleClient, simpleTheme, invoLayout,clientName } = useParams();
  

  return (
    <>   
    <Router>
     <Routes>
     <Route path="/" element={<RootTheme />} />
     {/* <Route path="/" element={<WidgetAll />} /> */}

        <Route path="/simpledemo/:simpleClient/:simpleTheme" element={<RootTheme/>} />     
        <Route path="/demo/:clientid/:activeTheme/:invoiceid" element={<DemoPage />} />

        <Route path="/invoice" element={<WidgetAll activeTheme={activeTheme}/>} />

        <Route path="/hindi/:colorForLanguagePage" element={<WidgetAll language='hindi' colorForLanguagePage={colorForLanguagePage} />} />
        <Route path="/spanish/:colorForLanguagePage" element={<WidgetAll language='spanish' colorForLanguagePage={colorForLanguagePage} />} />
        <Route path="/arabic/:colorForLanguagePage" element={<WidgetAll language='arabic' colorForLanguagePage={colorForLanguagePage} />} />
        <Route path="/french/:colorForLanguagePage" element={<WidgetAll language='french' colorForLanguagePage={colorForLanguagePage} />} />

        <Route path="/client/:clientid/:activeTheme/:invoiceid" element={<ClientPage/>} />
        
        <Route path="/blue" element={<WidgetAll activeTheme='blue' language='english'/>} />
        <Route path="/green" element={<WidgetAll activeTheme='green' language='english'/>} />
        <Route path="/yellow" element={<WidgetAll activeTheme='yellow' language='english'/>} />
        <Route path="/black" element={<WidgetAll activeTheme='black' language='english'/>} />
        <Route path="/red" element={<WidgetAll activeTheme='red' language='english'/>} />
        <Route path="/maroon" element={<WidgetAll activeTheme='maroon' language='english'/>} />   

        <Route path="/diwali" element={<WidgetAll activeTheme='diwali' language='english'/>} />        
        <Route path="/christmas" element={<WidgetAll activeTheme='christmas' language='english'/>} />        
        <Route path="/thanks" element={<WidgetAll activeTheme='thanks' language='english'/>} />        
        <Route path="/ads" element={<WidgetAll activeTheme='ads' language='english'/>} />        

        <Route path="/gray" element={<WidgetAll activeTheme='ads' language='english'/>} />        
        <Route path="/printer" element={<WidgetAll activeTheme='ads' language='english'/>} />        

        <Route path="/mobile" element={<DeviceView />} />
        <Route path="/tablet" element={<DeviceView />} />
        <Route path="/tablet-landscape" element={<DeviceView />} />   
        <Route path="/drag" element={<DragFeature />} />
        

        <Route path="/template/:urlLanguage/:urlColor/:urlMode/:simpleClient/:invoLayout/:urlFont/:clientName" element={<ARootInvoice urlLanguage={urlLanguage} urlFont={urlFont} urlColor={urlColor} urlMode={urlMode} selectedLayout={invoLayout} clientName={clientName}/>}  />
        <Route path="/neelan" element={<NeelanPage />} />


       <Route path="/view/508587d1-347c-46c3-9f45-183db8bc4fbb" element={<NewDemo />} />
       {/* <Route path="/view/508587d1-347c-46c3-9f45-183db8bc4fbb" element={<ViewId src="https://invotools-customer.vercel.app/demo/breitling/yellow/default?included=yellow,blue,green,maroon,red,black,gray,printer,diwali,christmas,thanks,ads&language=English" />} /> */}
       {/* <Route path="/sustainability" element={<WidgetAll language='carbon' activeTheme='yellow' />} / */}
       <Route path="/sustainability" element={<RootTheme language='carbon' activeTheme='yellow' />} />


        {/* Wildcard route to match any other paths */}
        <Route path="*" element={<ErrorNotFound />} />        
      </Routes>
    </Router>
    </>
  );
}; 

export default App;