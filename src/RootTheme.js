import React, { useState } from 'react';
import WidgetAll from './WidgetAll';
import MobilePreview from './MobilePreview';
import TabletPreview from './TabletPreview';
import TabletPreviewLands from './TabletPreviewLands';
import { useLocation } from 'react-router-dom';


function RootTheme({activeTheme: propActiveTheme, clientid, invoiceid}){
  const location = useLocation();
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

  
  const [selectedOption, setSelectedOption] = useState('desktop');
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

const renderSelectedComponent = () => {
  switch (selectedOption) {
    case 'mobile':
      return <MobilePreview activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid}/>;
    case 'tablet':
      return <TabletPreview  activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} />;
    case 'tablet-landscape':
      return <TabletPreviewLands activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} />;
    case 'desktop':
      return <WidgetAll  activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid}/>;
    default:
      return null;
  }
};

// Define styles based on the condition
const customStyles = selectedOption === 'mobile' || selectedOption === 'tablet' || selectedOption === 'tablet-landscape'? `body {background-color: gray !important;background-image: unset !important;}`: '';

  return (
    <div>
        <div className='wrapper'>    
              
              {renderSelectedComponent()}
              <div className='invoice-wrap'>
              <div className='rounded t-c p-1 flex-center1'>
                <div className='d-block d-md-inline-block'>
                <select value={selectedOption} onChange={handleSelectChange} style={{ padding: '0.5em', borderRadius: '0' }}>                        
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet Portrait</option>
                        <option value="tablet-landscape">Tablet Landscape</option>
                        <option value="mobile">Mobile</option>
                        
                  </select> 
                </div>
                <div className='d-block d-md-none'><br/></div>
                  
                  {isPathArgumentEmpty &&(                 
                      <div className='d-block d-md-inline-block'>
                      <div class='flex-center ms-1 bg-white rounded ' style={{backgroundColor:'#ffffff91', padding:'0.5em 1.5em'}}>
                          <span>Theme:</span>
                          <span>
                            <span className={`theme-btn ${activeTheme === 'yellow' ? 'active' : ''}`} style={{backgroundColor:'#FFA100'}} onClick={() => handleButtonClick('yellow')}></span>
                            <span className={`theme-btn ${activeTheme === 'blue' ? 'active' : ''}`} style={{backgroundColor:'#005E80'}} onClick={() => handleButtonClick('blue')}></span>
                            <span className={`theme-btn ${activeTheme === 'green' ? 'active' : ''}`} style={{backgroundColor:'#437B00'}} onClick={() => handleButtonClick('green')}></span>
                            <span className={`theme-btn ${activeTheme === 'maroon' ? 'active' : ''}`} style={{backgroundColor:'#88004A'}} onClick={() => handleButtonClick('maroon')}></span>
                            <span className={`theme-btn ${activeTheme === 'red' ? 'active' : ''}`} style={{backgroundColor:'#bd0009'}} onClick={() => handleButtonClick('red')}></span>
                            <span className={`theme-btn ${activeTheme === 'black' ? 'active' : ''}`} style={{backgroundColor:'#000000'}} onClick={() => handleButtonClick('black')}></span>
                            
                            <img src='/img/icon-xmas.png'className={`theme-btn ${activeTheme === 'christmas' ? 'active' : ''}`} onClick={() => handleButtonClick('christmas')} />
                            <img src='/img/icon-diwali.png'className={`theme-btn ${activeTheme === 'diwali' ? 'active' : ''}`} onClick={() => handleButtonClick('diwali')} />
                            <img src='/img/icon-thanks.png'className={`theme-btn ${activeTheme === 'thanks' ? 'active' : ''}`} onClick={() => handleButtonClick('thanks')} />
                            <img src='/img/icon-ads.png'className={`theme-btn ${activeTheme === 'ads' ? 'active' : ''}`} onClick={() => handleButtonClick('ads')} />
                            
                          </span>                 
                      </div>
                      </div>
                  )}
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