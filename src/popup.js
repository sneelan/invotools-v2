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
import jsonData from './CustomerPortal_Popup.json';

function MyComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData(jsonData);
  }, []);

  const [open, setOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState({}); // Initialize with an empty object

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

  useEffect(() => {
    setOpen(true);

    if (data && data.popups) {
      const pageLoadPopup = data.popups.find((popup) => popup.loadingState === 'Page Load');
      if (pageLoadPopup) {
        setSelectedPopup(pageLoadPopup);
        setPopupOpen(true);
      }

      // Start a timer to close the drawer after 5 seconds
      const timer = setTimeout(() => {
        setOpen(false);
      }, 5000);

      // Clear the timer if the user manually closes the drawer
      return () => clearTimeout(timer);
    }
  }, [data]);

  return (
    <div>
      <div className=' mobile-menu bg-theme-secondary' style={{ marginBottom:'0.25em'}}>
          <div style={{padding:'0.25em', justifyContent:'end'}} className='invoice-wrap flex-center'><b style={{color:'gray'}}>Menu </b> <a onClick={toggleDrawer} color="inherit" aria-label="menu" id='burger-static'></a></div>
      </div>
      {data && data.menuPanelCSS && (<style dangerouslySetInnerHTML={{ __html: data.menuPanelCSS }}></style>)}
      <div>
        <a onClick={toggleDrawer} color="inherit" aria-label="menu" id='burger-menu'></a>

        <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop>
          <div className='drawer-wrap'>
            <div style={{ height: '52px' }}>
              <a onClick={toggleDrawer} aria-label="close" id='burger-close'></a></div>
            <div style={{ minWidth: '150px' }} className='drawer-wrap'>
            <div className='right-button'>
                {data && data.popups && data.popups.map((popup, index) => {
                  // adding widgetClassName based on displayDevice
                  let widgetClassName = '';
                  if (!popup.displayDevice.includes('mobile')) widgetClassName += ' mob-hide';
                  if (!popup.displayDevice.includes('tablet')) widgetClassName += ' tab-hide';
                  if (!popup.displayDevice.includes('desktop')) widgetClassName += ' des-hide';

                  return popup.displayState === 'Show' && popup.showInMenu === 'Yes' && (
                    <a
                      key={index}
                      onClick={() => openPopup(popup)}
                      className={widgetClassName} // Add widgetClassName to the anchor
                    >
                      {popup.iconSVGCode && (
                        <span dangerouslySetInnerHTML={{ __html: popup.iconSVGCode }}></span>
                      )}
                      <span>{popup.menuLable}</span>
                    </a>
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
    </div>
  );
}

export default MyComponent;

/*         @media screen and (max-width: 568px){
          display: ${!selectedPopup.displayDevice.includes('mobile') ? 'none!important;' : 'block;'};
        } 
        @media only screen and (max-width: 967px) and (min-width: 569px){
            display: ${!selectedPopup.displayDevice.includes('tablet') ? 'none!important;' : 'block;'};
        } 
        @media screen and (min-width: 968px){
            display: ${!selectedPopup.displayDevice.includes('desktop') ? 'none!important;' : 'block;'};
        } */