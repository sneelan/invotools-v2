import React, { useState } from 'react';
import WidgetAll from './WidgetAll';
import MobilePreview from './MobilePreview';
import TabletPreview from './TabletPreview';
import TabletPreviewLands from './TabletPreviewLands';
import { useLocation } from 'react-router-dom';


function RootTheme({ clientid}){
  const location = useLocation();
  const pathArgument = location.pathname.split('/'); // Split the path into parts

  const [activeTheme, setActiveTheme] = useState('yellow');
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
      return <MobilePreview activeTheme={activeTheme} />;
    case 'tablet':
      return <TabletPreview  activeTheme={activeTheme} />;
    case 'tablet-landscape':
      return <TabletPreviewLands activeTheme={activeTheme} />;
    case 'desktop':
      return <WidgetAll  activeTheme={activeTheme} clientid={clientid} />;
    default:
      return null;
  }
};

  return (
    <div>
        <div className='wrapper'>    
              
              {renderSelectedComponent()}
              <div className='invoice-wrap'>
              <div className='rounded t-c p-1 flex-center'>
                  <select value={selectedOption} onChange={handleSelectChange} style={{ padding: '0.5em', borderRadius: '0' }}>                        
                        <option value="desktop">Desktop</option>
                        <option value="tablet">Tablet Portrait</option>
                        <option value="tablet-landscape">Tablet Landscape</option>
                        <option value="mobile">Mobile</option>
                        
                  </select> 
                  
                  {pathArgument[2] == '' && (                 
                      <div class='flex-center ms-1 bg-white rounded ' style={{backgroundColor:'#ffffff91', padding:'0.5em 1.5em'}}>
                          <span>Theme:</span>
                          <span>
                            <span className={`theme-btn ${activeTheme === 'yellow' ? 'active' : ''}`} style={{backgroundColor:'#FFA100'}} onClick={() => handleButtonClick('yellow')}></span>
                            <span className={`theme-btn ${activeTheme === 'blue' ? 'active' : ''}`} style={{backgroundColor:'#55d2ff'}} onClick={() => handleButtonClick('blue')}></span>
                            <span className={`theme-btn ${activeTheme === 'green' ? 'active' : ''}`} style={{backgroundColor:'#80CC20'}} onClick={() => handleButtonClick('green')}></span>
                            <span className={`theme-btn ${activeTheme === 'maroon' ? 'active' : ''}`} style={{backgroundColor:'#a61d3b'}} onClick={() => handleButtonClick('maroon')}></span>
                            <span className={`theme-btn ${activeTheme === 'red' ? 'active' : ''}`} style={{backgroundColor:'#bd0009'}} onClick={() => handleButtonClick('red')}></span>
                            <span className={`theme-btn ${activeTheme === 'black' ? 'active' : ''}`} style={{backgroundColor:'#000000'}} onClick={() => handleButtonClick('black')}></span>
                          </span>                 
                      </div>
                  )}
              </div>
              </div>
          
        </div>
      <footer className='t-c'>
            <p>&copy; {new Date().getFullYear()}, All rights reserved by <a href="https://www.invotools.io" target="_blank" rel="noopener noreferrer"><u>www.Invotools.io</u></a></p>
      </footer>
    </div>
  );
};

export default RootTheme;