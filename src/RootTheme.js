import React, { useState, useEffect } from 'react';
import WidgetAll from './WidgetAll';
//import MobilePreview from './MobilePreview';
//import TabletPreview from './TabletPreview';
//import TabletPreviewLands from './TabletPreviewLands';
import DeviceView from './DeviceView';
import { useNavigate, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ForestIcon from '@mui/icons-material/Forest';


function RootTheme({activeFont: propActiveFont, activeTheme: propActiveTheme, clientid, invoiceid, invoiceTemplate}){
  const location = useLocation();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const demoIncludedLang = params.get('language');
  const demoIncludedFont = params.get('font');
  const {simpleClient, simpleTheme} = useParams();  
    const [selectedLayout, setSelectedLayout] = useState('layout-featured');
  const [isCarbonActive, setIsCarbonActive] = useState(false);
  const navigate = useNavigate();

  const pathArgument = location.pathname.split('/'); // Split the path into parts
  // Check if pathArgument[2] is not available or empty
  //const isPathArgumentEmpty = !pathArgument[2] || pathArgument[2].trim() === '';
  const isPathArgumentEmpty = 'show';

 
  const [activeTheme, setActiveTheme] = useState(propActiveTheme || 'yellow');


  
  document.body.classList.add(`theme-${activeTheme}`);

  const handleButtonClick = (theme) => {
      document.body.classList.remove(`theme-${activeTheme}`);
      setActiveTheme(theme);
      document.body.classList.add(`theme-${theme}`);
      //console.log(`Clicked on ${theme} button`);
  };
  const handleLayoutChange = (event) => {setSelectedLayout(event.target.value);};
  const [isSettingOpen, setIsSettingOpen] = useState(true);
  const toggleSetting = () => {setIsSettingOpen(!isSettingOpen);};

  const [selectedOption, setSelectedOption] = useState('desktop');
  const handleSelectChange = (event) => {setSelectedOption(event.target.value);};

 
  const renderSelectedComponent = () => {
    switch (selectedOption) {
      case 'mobile':
        return <DeviceView deviceName='mobile' deviceWidth='330' deviceHeight='540' activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} font={selectedFont} language={selectedLanguage} simpleClient={simpleClient} simpleTheme={simpleTheme} selectedLayout={selectedLayout}/>;
      case 'tablet':
        return <DeviceView deviceName='tablet' deviceWidth='600' deviceHeight='960' activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} font={selectedFont} language={selectedLanguage} simpleClient={simpleClient} simpleTheme={simpleTheme} selectedLayout={selectedLayout}/>;
      case 'tablet-landscape':
        return <DeviceView deviceName='tablet tablet-landscape' deviceWidth='960' deviceHeight='600' activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} font={selectedFont} language={selectedLanguage} simpleClient={simpleClient} simpleTheme={simpleTheme} selectedLayout={selectedLayout}/>;
      case 'desktop':
        return <WidgetAll activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} font={selectedFont} language={selectedLanguage} setActiveTheme={setActiveTheme} simpleClient={simpleClient} simpleTheme={simpleTheme} selectedLayout={selectedLayout}/>;
      default:
        return null;
    }
  };

const [selectedLanguage, setSelectedLanguage] = useState('english');
const [selectedFont, setSelectedFont] = useState('fira');


useEffect(() => {
  if (pathArgument.includes('sustainability')) {
    setSelectedLanguage('carbon');
    setIsCarbonActive(true);
  } else {
    setSelectedLanguage('english'); // Optional fallback    
  }
}, [location.pathname]);


const handleSelectLanguage = (event) => {
  setSelectedLanguage(event.target.value); 
};
const handleSelectFont = (event) => {  
  setSelectedFont(event.target.value);
}
 



// Define styles based on the condition
const customStyles = selectedOption === 'mobile' || selectedOption === 'tablet' || selectedOption === 'tablet-landscape'? `body {background-color: gray !important;background-image: unset !important;}`: '';

  return (
    <div>
        <div className='wrapper'>          
          {/* {simpleClient}+++{simpleTheme}+++ */}
              {renderSelectedComponent()}
              <div id="setting" className={`setting-sticky invoice-wrap1 t-c p-1 ${isSettingOpen ? 'open' : ''}`}>
              <div>                  
                  <span id='setting-btn' onClick={toggleSetting}>
                        <span className={`${isSettingOpen ? 'd-none' : ''}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" /></svg>
                        </span>
                        <span className={`${isSettingOpen ? '' : 'd-none'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M15.4,16.6L10.8,12L15.4,7.4L14,6L8,12L14,18L15.4,16.6Z" /></svg>
                        </span>
                  </span>
                  <div className='d-block d-md-inline-block me-1'>
                <select value={selectedFont} onChange={handleSelectFont} style={{ padding: '0.5em', borderRadius: '0' , opacity: isCarbonActive ? '0' : ''}}>   
                    {demoIncludedLang ? (
                        demoIncludedLang.split(',').map((lang) => (
                          <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
                            {lang}
                          </option>
                        ))
                      ) : (
                          <>
                          <option value="fira">Fira Sans</option>
                          <option value="nunito">Nunito Sans</option>
                          <option value="open">Open Sans</option>
                          <option value="lato">Lato</option>
                          <option value="poppins">Poppins</option>
                          <option value="montserrat">Montserrat</option>
                          <option value="raleway">Raleway</option>
                          <option value="ubuntu">Ubuntu</option>
                          <option value="playfair">Playfair Display</option>
                          <option value="merriweather">Merriweather</option>
                          <option value="source">Source Sans Pro</option>
                          </>
                      )}                    
                  </select> 
                </div>

              <div className='d-block d-md-inline-block me-1'>
                <select value={selectedLanguage} onChange={handleSelectLanguage} style={{ padding: '0.5em', borderRadius: '0' , opacity: isCarbonActive ? '0' : ''}}>   
                    {demoIncludedLang ? (
                        demoIncludedLang.split(',').map((lang) => (
                          <option key={lang.toLowerCase()} value={lang.toLowerCase()}>
                            {lang}
                          </option>
                        ))
                      ) : (
                          <>
                          <option value="english">English</option> 
                          <option value="arabic">Arabic</option>                       
                          {/* <option value="hindi">Hindi</option>                      
                          <option value="spanish">Spanish</option>                                                  
                          <option value="french">French</option>
                           */}
                          </>
                      )}                    
                  </select> 
                </div>


                <div className={`d-block d-md-inline-block`}>
                <select value={selectedOption} onChange={handleSelectChange} style={{ padding: '0.5em', borderRadius: '0' }} disabledx={selectedLanguage !== 'english'}>                        
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet Portrait</option>
                        <option value="tablet-landscape">Tablet Landscape</option>
                        <option value="mobile">Mobile</option>
                        
                  </select> 
                </div>

                <div className={`d-block d-md-inline-block ms-1`}  style={{ display: selectedOption !== 'desktop' ? 'none' : '', display: pathArgument[1] == 'demo' ? 'none' : '' }}>
                    <select value={selectedLayout} onChange={handleLayoutChange} style={{ padding: '0.5em', borderRadius: '0' }} >                        
                        <option value="layout-featured">Featured (A4)</option>
                        <option value="layout-simple">Simple (A4)</option>
                        <option value="layout-small">Small (A5)</option>                      
                        <option value="layout-bill">Bill (A6)</option>                      
                    </select>                   
                </div>

                <div className='d-block d-md-none'><br/></div>                  
                  {isPathArgumentEmpty &&(                 
                      //temporary-neelan-testing
                      <div className='d-block d-md-inline-block' style={{ display: selectedLanguage !== 'english' ? 'nonex' : '' }}>
                      <div class='flex-center ms-1 bg-white rounded' style={{backgroundColor:'#ffffff', padding:'0.5em 1.5em'}}>
                          <span>Theme:</span>
                          <span>
                            <span className={`theme-btn ${activeTheme === 'yellow' ? 'active' : ''}`} style={{backgroundColor:'#FFA100'}} onClick={() => handleButtonClick('yellow')}></span>                            
                            {/* <span className={`theme-btn ${activeTheme === 'green' ? 'active' : ''}`} style={{backgroundColor:'#437B00'}} onClick={() => handleButtonClick('green')}></span>
                            <span className={`theme-btn ${activeTheme === 'maroon' ? 'active' : ''}`} style={{backgroundColor:'#88004A'}} onClick={() => handleButtonClick('maroon')}></span>
                            <span className={`theme-btn ${activeTheme === 'red' ? 'active' : ''}`} style={{backgroundColor:'#bd0009'}} onClick={() => handleButtonClick('red')}></span>
                            <span className={`theme-btn ${activeTheme === 'black' ? 'active' : ''}`} style={{backgroundColor:'#000000'}} onClick={() => handleButtonClick('black')}></span>
                            <span className={`theme-btn ${activeTheme === 'gray' ? 'active' : ''}`} style={{backgroundColor:'#bbbbbb'}} onClick={() => handleButtonClick('gray')}></span>                             */}                            
                            {/* <span className={`theme-btn ${activeTheme === 'diwali' ? 'active' : ''}`} style={{ display: selectedLanguage === 'arabic' ? 'none' : '' }}><img src='/img/icon-diwali.png' onClick={() => handleButtonClick('diwali')}   /></span>
                            <span className={`theme-btn ${activeTheme === 'thanks' ? 'active' : ''}`} style={{ display: selectedLanguage === 'arabic' ? 'none' : '' }}><img src='/img/icon-thanks.png' onClick={() => handleButtonClick('thanks')}   /></span>                             */}
                            
                           <span className={`theme-btn ${activeTheme === 'blue' ? 'active' : ''}`} style={{backgroundColor:'#005E80'}} onClick={() => handleButtonClick('blue')}></span>
                             {/* <span className={`theme-btn ${activeTheme === 'christmas' ? 'active' : ''}`} style={{ display: selectedLanguage === 'arabic' ? 'none' : '' }}><img src='/img/icon-xmas.png' onClick={() => handleButtonClick('christmas')}   /></span>
                            <span className={`theme-btn ${activeTheme === 'ads' ? 'active' : ''}`} ><img src='/img/icon-ads.png' onClick={() => handleButtonClick('ads')} /></span>
                            <span className={`theme-btn ${activeTheme === 'printer' ? 'active' : ''}`} ><img src='/img/icon-printer.png' onClick={() => handleButtonClick('printer')}  /></span> */}
                          </span>   
                          <span className='d-inline-block ms-1' style={{minWidth:'100px',textTransform:'capitalize', fontWeight:'bold'}}>{
                            activeTheme==='maroon'?'Magenta' : activeTheme==='ads'?'Advertising' :activeTheme==='thanks'?'Thanks Giving' : activeTheme==='printer'?'Printer Friendly':activeTheme}
                            -{selectedFont}</span>
                      </div>
                      </div>                     
                  )}
{/*                  <div className='d-block d-md-inline-block' style={{ display: selectedOption !== 'desktop' ? 'none' : '', paddingTop:'', display: pathArgument[1] == 'demo' ? 'none' : '' }} onClick={handleCarbonClick}>
                          <div class='flex-center ms-1 bg-white rounded' style={{padding: '0.5em', background: isCarbonActive ? '#9bfc3f' : ''}}>
                          <span style={{marginRight:'4px'}}>Co2: </span>
                          <span style={{width:'25px', height:'25px'}}>
                            <ForestIcon sx={{ fill: 'green !important' }}/>                           
                            </span>
                      </div>
                      </div> */}
              </div>
              </div>
          
        </div>
      <footer className='t-c'>
            <p>&copy; {new Date().getFullYear()}, All rights reserved by <a href="https://www.invotools.io" target="_blank" rel="noopener noreferrer"><u>www.Invotools.io</u></a></p>
      </footer>
      {/* Custom styles */}
      {customStyles && (
        <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      )}
    </div>
    
  );
};

export default RootTheme;