import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import DeviceView from './DeviceView';
 import DragFeature from './DragFeature';
import RootTheme from './RootTheme';
import DemoPage from './DemoPage';
import { useParams } from 'react-router-dom';
import ErrorNotFound from './ErrorNotFound';
import ARootInvoice from './Invoice/ARootInvoice'; 
import ClientPage from './ClientPage';
import NeelanPage from './NeelanPage';
import A_Index_Layout from './website/A_Index_Layout';
import Aroot_Content from './website/Aroot_Content';
import Page_Faq from './website/Page_Faq';
import Inner_Page_Root from './website/Inner_Page_Root';
import Other_Postlogout from './website/Other_Postlogout';
import Other_500 from './website/Other_500';
import Other_503 from './website/Other_503';
import Other_403 from './website/Other_403';
import Other_404 from './website/Other_404';
import Page_Documentation from './website/Page_Documentation';
import ViewId from './View_id';


const App = () => {
  // Use the useParams hook to get the values of id1 and id2
  const { activeTheme, clientid,invoiceid, colorForLanguagePage, urlMode, urlColor, urlLanguage, simpleClient, simpleTheme, invoLayout } = useParams();
  

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
        

        <Route path="/template/:urlLanguage/:urlColor/:urlMode/:simpleClient/:invoLayout" element={<ARootInvoice urlLanguage={urlLanguage} urlColor={urlColor} urlMode={urlMode} selectedLayout={invoLayout}/>}  />
        <Route path="/neelan" element={<NeelanPage />} />

        <Route path="/website/" element={<A_Index_Layout><Aroot_Content /></A_Index_Layout>} />    
        <Route path="/website/home" element={<A_Index_Layout><Aroot_Content /></A_Index_Layout>} />    
        
        <Route path="/website/faq" element={<A_Index_Layout myclass={'bg-light'}><Inner_Page_Root title={'FAQ'}><Page_Faq /></Inner_Page_Root></A_Index_Layout>} />    
        <Route path="/website/tutorials" element={<A_Index_Layout myclass={'bg-light'}><Inner_Page_Root title={'Tutorials'}> </Inner_Page_Root> </A_Index_Layout>} />    
        <Route path="/website/documentation" element={<A_Index_Layout myclass={'bg-light'}><Inner_Page_Root title={'Documentation'} ><Page_Documentation/></Inner_Page_Root></A_Index_Layout>} />    
        <Route path="/website/support" element={<A_Index_Layout myclass={'bg-light'}><Inner_Page_Root title={'Support'} /></A_Index_Layout>} />    
        <Route path="/website/help" element={<A_Index_Layout myclass={'bg-light'}><Inner_Page_Root title={'Help'} /></A_Index_Layout>} />    
        
        <Route path="/website/other/postlogout" element={<A_Index_Layout myclass={'flex-center'}><Other_Postlogout/></A_Index_Layout>} />    
        <Route path="/website/other/404" element={<A_Index_Layout myclass={'flex-center'}><Other_404/></A_Index_Layout>} />    
        <Route path="/website/other/403" element={<A_Index_Layout myclass={'flex-center'}><Other_403/></A_Index_Layout>} />    
        <Route path="/website/other/500" element={<A_Index_Layout myclass={'flex-center'}><Other_500/></A_Index_Layout>} />    
        <Route path="/website/other/503" element={<A_Index_Layout myclass={'flex-center'}><Other_503/></A_Index_Layout>} />    



       <Route path="/view/508587d1-347c-46c3-9f45-083db8bc4fbb" element={<ViewId src="https://invotools-customer.vercel.app/demo/breitling/yellow/default?included=yellow,blue,green,maroon,red,black,gray,printer,diwali,christmas,thanks,ads&language=English" />} />
       <Route path="/sustainability" element={<WidgetAll activeTheme='yellow' language='english'/>} />


        {/* Wildcard route to match any other paths */}
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </Router>
    </>
  );
}; 

export default App;