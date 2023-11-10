
import React, { useState, useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { useLocation } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';

function PopupPage() {
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState({}); // Initialize with an empty object
  const [showInitialDrawer, setShowInitialDrawer] = useState(true); // New state



  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await fetch('https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-popup.json');
        const response = await fetch('/customer-portal-popup.json'); 
        const data = await response.json(); 
        setData(data); // Corrected to use setData instead of setJsonData
      } catch (error) {
        console.error('Error fetching json data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const openPopup = (popup) => {
    setSelectedPopup(popup);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  

  const [darkMode, setDarkMode] = useState(false); // New state for dark mode
  const [invoiceTemplate, setInvoiceTemplate] = useState('https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/template.html');  
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      setInvoiceTemplate(darkMode ? 'https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/template.html' : 'https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/template-dark.html');      
      document.body.classList.toggle('dark-mode', !darkMode);
  };      
  

  useEffect(() => {
    setOpen(true);

    if (data && data.popups) {
      const pageLoadPopup = data.popups.find((popup) => popup.loadingState === 'Page Load');
      if (pageLoadPopup) {
        setSelectedPopup(pageLoadPopup);
        setPopupOpen(true);
      }

    if (showInitialDrawer) {      
      setOpen(false); // Show the drawer initially - true / false
      
        // Check if you want to enable the timer
        const enableTimer = false;
        if (enableTimer) {
          // Start a timer to close the drawer after 5 seconds
          const timer = setTimeout(() => {
            setOpen(false);
          }, 5000);

          // Clear the timer if the user manually closes the drawer
          return () => clearTimeout(timer);
        }
      }
  }
  }, [data]);

  return (
    <div>        
              <div className=' mobile-menu bg-theme-secondary'>
                  <div style={{padding:'0.25em', justifyContent:'end'}} className='invoice-wrap flex-center'>
                    
                  <b style={{color:'gray'}} className='me-1'>Menu </b>
                    
                    <span onClick={toggleDrawer} className='box-button'> <MenuIcon /></span>
                    <span className='box-button ms-1 d-none' onClick={toggleDarkMode}>{darkMode ?  <LightModeIcon/>: <ModeNightIcon />}</span>
                    </div>
                    
              </div>
              {data && data.menuPanelCSS && (<style dangerouslySetInnerHTML={{ __html: data.menuPanelCSS }}></style>)}
              <div>   
                <span onClick={toggleDrawer} className='box-button' aria-label="menu" id='burger-menu'> <MenuIcon /></span>

                <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop>
                  <div className='drawer-wrap'>
                    <div>
                      <div id='burger-close' class="flex-center" style={{justifyContent:'space-between', padding:'7px', width:'100%', alignItems:'start'}}>                
                        <div className='box-button' onClick={toggleDarkMode}>{darkMode ?  <LightModeIcon/>: <ModeNightIcon />}</div>
                        <div onClick={toggleDrawer} className='box-button' aria-label="menu" id=''> <CloseIcon /></div>
                      </div>            
                      
                      </div>
                    <div style={{ minWidth: '150px' }} className='drawer-wrap'>
                    <div className='drawer-box'>
                        {data && data.popups && data.popups.map((popup, index) => {
                          // adding widgetClassName based on displayDevice
                          let widgetClassName = '';
                          if (!popup.displayDevice.includes('mobile')) widgetClassName += ' mob-hide';
                          if (!popup.displayDevice.includes('tablet')) widgetClassName += ' tab-hide';
                          if (!popup.displayDevice.includes('desktop')) widgetClassName += ' des-hide';

                          return popup.displayState === 'Show' && popup.showInMenu === 'Yes' && (
                            <span
                              key={index}
                              onClick={() => openPopup(popup)}
                              className={'button'+widgetClassName} // Add widgetClassName to the anchor
                            >
                              {popup.iconSVGCode && (
                                <span dangerouslySetInnerHTML={{ __html: popup.iconSVGCode }}></span>
                              )}
                              <span>{popup.menuLable}</span>
                            </span>
                          );
                        })}
                        
                  </div>
                    </div>
                  </div>
                </Drawer>

                <Dialog id="mypopup" open={popupOpen} onClose={closePopup} aria-labelledby="popup-title">
                  <style dangerouslySetInnerHTML={{ __html: selectedPopup.contentHTML  }} style={{overflow: 'hidden'}} />
                  <h2 id="popup-title" className='flex-center'>
                    <span style={{paddingRight:'1em'}}>{selectedPopup.title}</span>
                    <a onClick={closePopup} aria-label="close" className='d-inline-block line-height-normal cursor-pointer'>
                      <CloseIcon style={{color:'white'}}/>
                    </a>           
                  </h2>
                  <div className='popup-body'>              
                      {selectedPopup.contentHTML && ( <div className='t-c' dangerouslySetInnerHTML={{ __html: selectedPopup.contentHTML  }} style={{overflow: 'hidden'}} />  )}
                      {selectedPopup.contentCSS && ( <style dangerouslySetInnerHTML={{ __html: selectedPopup.contentCSS }} />  )}
                    
                  </div>   
                </Dialog>
                <style>
                    {`
                      #mypopup .MuiPaper-root{   
                            @media screen and (min-width: 968px){
                              min-width: ${selectedPopup.width ? selectedPopup.width + 'px!important;' : 'auto;'};
                            }         
                            height: ${selectedPopup.height ? (Number(selectedPopup.height)+55) + 'px!important;' : 'auto;'};
                      }
                      #mypopup {   

                      }
                    `}
            
                </style>
              </div>
              <iframe src={invoiceTemplate} style={{ width: '100%' }} height="1165" frameBorder="0"></iframe>

    </div>
  );
}

export default PopupPage;

/*         @media screen and (max-width: 568px){
          display: ${!selectedPopup.displayDevice.includes('mobile') ? 'none!important;' : 'block;'};
        } 
        @media only screen and (max-width: 967px) and (min-width: 569px){
            display: ${!selectedPopup.displayDevice.includes('tablet') ? 'none!important;' : 'block;'};
        } 
        @media screen and (min-width: 968px){
            display: ${!selectedPopup.displayDevice.includes('desktop') ? 'none!important;' : 'block;'};
        } */