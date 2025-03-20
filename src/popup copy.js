
import React, { useState, useEffect, useRef } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';

import { useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ARootInvoice from './Invoice/ARootInvoice';

function PopupPage({ activeTheme, font, clientid, invoiceid,language, setActiveTheme, simpleClient, simpleTheme, selectedLayout }) {
 
  const [data, setData] = useState(null);
  const [open, setOpen] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedPopup, setSelectedPopup] = useState({}); // Initialize with an empty object
  const [showInitialDrawer, setShowInitialDrawer] = useState(true); // New state
  const [darkMode, setDarkMode] = useState(false);
  const [invoiceTemplate, setInvoiceTemplate] = useState('');
  const [apiHtml, setApiHtml] = useState('');

  //show Notifications
  const [showNotifications, setShowNotifications] = useState(false);

  //searching extra parameter in the url ?included=printer....
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const demoIncludedThemes = params.get('included');

  //const [invoiceTemplate, setInvoiceTemplate] = useState('https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/template.html');  
 
  //const [activeTheme, setActiveTheme] = useState(propActiveTheme || 'yellow');

  //checking client id
  //if(clientid){const clientidHypen = clientid + '-';}
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
       if (clientid) {
              //response = await fetch(`https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-${clientidHypen}popup.json`);
              response = await fetch(`/json/client/customer-portal-popup-${clientid}-${language}.json`);
        } else {
              //response = await fetch(`https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-popup.json`);
              //response = await fetch('/customer-portal-popup.json');
              response = await fetch(`/json/customer-portal-popup-${language}.json`);
        }
        const data = await response.json(); 
        setData(data); // Corrected to use setData instead of setJsonData
      } catch (error) {
        console.error('Error fetching json data:', error);
      }
    };

    fetchData();
  }, [language]);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  const toggleNotification = () => {setShowNotifications(!showNotifications);};
  const openPopup = (popup) => {
    setSelectedPopup(popup);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);    
      document.body.classList.toggle('dark-mode', !darkMode); 
  };
  
  //checking client id
  //let clientidfolder=clientid ? 'demo/'+clientid : 'modern-v1';
  //https://customer.invotools.io/view/d78abae8-d265-4438-95be-6a267157612f
  //: `https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/${templateName}`;

  useEffect(() => {    
    const modeSuffix = darkMode ? 'dark' : 'light';
    const colorSuffix = activeTheme ? `-${activeTheme}` : '';
    const templateName =  clientid ? `template-${language}-${modeSuffix}.html`:`template${colorSuffix}-${modeSuffix}.html`;     
    
    //temporary-neelan-testing
    //if(language==='hindi'){activeTheme='yellow';}

    //const templateURL=`https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/${templateName}`;   

    let templateURL= invoiceid === 'default' ? `https://uxdemo.ayatacommerce.com/invotools/invoice-templates/demo/${clientid}/${templateName}`
    : invoiceid && invoiceid !== 'default'? 'https://dev-invodocz.invotools.io/api/v1/invoice/view/'+invoiceid 
    : `/template/${language}/${activeTheme}/${modeSuffix}/${simpleClient}/${selectedLayout}/${font}`;

/*     if(language!=='english'){
      templateURL = `https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/template-yellow-${modeSuffix}-${language}.html`;
      //setDarkMode(false);
      //document.body.classList.remove('dark-mode');
      //setActiveTheme('yellow');
    } */

    if (demoIncludedThemes && demoIncludedThemes.split(',').includes(activeTheme)) {
      templateURL = `/demo/${clientid}/template-${activeTheme}-${modeSuffix}.html`;
    }else{
      
    }

    
    
    setInvoiceTemplate(templateURL);

  }, [activeTheme, font, darkMode, clientid, invoiceid, demoIncludedThemes, language, selectedLayout]);

/*   const updateInvoiceTemplate = () => {
    const modeSuffix = darkMode ? 'dark' : 'light';
    const colorSuffix = activeTheme ? `-${activeTheme}` : '';
    const templateName = `template${colorSuffix}-${modeSuffix}.html`;
    setInvoiceTemplate(`https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/${templateName}`);
    document.body.classList.toggle('dark-mode', !darkMode);
  }; */
  const fetchApiHtml = async () => {
    try {
      const response = await fetch(invoiceTemplate);
      const data = await response.text();
      // Sanitize the HTML content using DOMPurify
      //const sanitizedHtml = DOMPurify.sanitize(data);
      setApiHtml(data);
    } catch (error) {
      console.error('Error fetching API data:', error);
    }
  };



  useEffect(() => {
    if (data && data.popups) {
      const pageLoadPopup = data.popups.find((popup) => popup.displayOnPageLoad === 'yes');
      if (pageLoadPopup) {
        setSelectedPopup(pageLoadPopup);
        setPopupOpen(true);
      }
  
      if (showInitialDrawer) {
        // Check if you want to enable the timer
        const enableTimer = true;
        if (enableTimer) {
          // Start a timer to close the drawer after 5 seconds
          const timer = setTimeout(() => {
            setOpen(false);
          }, 1000);
  
          // Clear the timer if the user manually closes the drawer
          return () => clearTimeout(timer);
        } else {
          // If no timer is enabled, close the drawer
          setOpen(true);
        }
      }
    }

  fetchApiHtml();


  }, [data, showInitialDrawer]);






/* 
   useEffect(() => {
    const modeSuffix = darkMode ? 'dark' : 'light';
    const colorSuffix = activeTheme ? `-${activeTheme}` : '';
    const templateName = `template${colorSuffix}-${modeSuffix}.html`;
    setInvoiceTemplate(`https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/${templateName}`);
    document.body.classList.toggle('dark-mode', !darkMode);
  }, [activeTheme, darkMode]);  */


  return (
    <div>
              <div className='mobile-menu bg-theme-secondary'>
                  <div style={{padding:'0.25em', justifyContent:'end'}} className='invoice-wrap flex-center' >                    
                  <b style={{color:'gray'}} className='me-1 mobile-menu-label'>Menu </b>                    
                    <span onClick={toggleDrawer} className='box-button'> <MenuIcon /></span>                    
                    <span className='box-button ms-1 d-none' onClick={toggleDarkMode}>{darkMode ?  <LightModeIcon/>: <ModeNightIcon />}</span>
                    </div>                    
              </div>
              {data && data.menuPanelCSS && (<style dangerouslySetInnerHTML={{ __html: data.menuPanelCSS }}></style>)}
              <div className=''>   
                    <span onClick={toggleDrawer} className='box-button' aria-label="menu" id='burger-menu'> <MenuIcon /></span>
                    <span onClick={toggleNotification} className='box-button notification' aria-label="menu" id='burger-menu'> <NotificationsActiveIcon />
                    <span>3</span>
                    </span>

                    {showNotifications && (
                    <div className="notification-container">
                    <div className="notif-messages bg-white shadow p-2 rounded ">
                      <div className="notif-header flex-center p-1 bg-theme-secondary text-white w-100" style={{justifyContent:'space-between', padding:'1em 2em'}}>
                          <h4 className='fw-bold me-1 pe-1'>Recent Notifications</h4>
                          <div onClick={toggleNotification} className='p-0 h4 fw-bold text-white ' style={{cursor:'pointer'}}>X</div>
                      </div>

                      <ul className=''>
                        <li className='p-1 h4 fw-normal hover-bg-primary-verylight'>1. Please upload your Id Proof and Address documents. <a href="#" className='fw-bold' style={{color:'blue'}}>Click</a></li>
                        <hr className='opacity-25 m-0'></hr>
                        <li className='p-1  h4 fw-normal hover-bg-primary-verylight'><b style={{color:'maroon'}}>2. You missed it!</b> Enjoy a Special breakfast on us during your stay! <a href="#" className='fw-bold' style={{color:'blue'}}>Register here</a></li>
                        <hr className='opacity-25 m-0'></hr>
                        <li className='p-1  h4 fw-normal hover-bg-primary-verylight '><b style={{color:'maroon'}}>3. Unlock relaxation!</b> Pay just ₹500 and indulge in a ₹2500 Spa Massage for two!! <a href="#" className='fw-bold' style={{color:'blue'}}>Pay Now!</a></li>
                      </ul>
                    </div>
                    </div>
                    )}
                    
                    <Drawer anchor="right" open={open} onClose={toggleDrawer} hideBackdrop>
                      <div className={`drawer-wrap ${language === 'arabic'?'arabic':''}`}  dir={language === 'arabic'?'rtl':''}>
                        <div>
                          <div id='burger-close' class="flex-center" style={{justifyContent:'space-between', padding:'7px', width:'100%', alignItems:'start'}}>                
                            <div className='box-button' onClick={toggleDarkMode}>{darkMode ?  <LightModeIcon/>: <ModeNightIcon />}</div>
                            <div onClick={toggleDrawer} className='box-button' aria-label="menu" id=''> <CloseIcon /></div>
                          </div>           
                          </div>
                        <div style={{ minWidth: '150px' }} className='drawer-wrap'>
                        <div className='drawer-box'>
                        {/* <span class='bg-white d-block p-2'>bb{invoiceTemplate}aaa{activeTheme}</span> */}
                            {data && data.popups && data.popups.map((popup, index) => {                       

                              // adding widgetClassName based on displayDevice
                              let widgetClassName = '';
                              if (!popup.displayDevice.includes('mobile')) widgetClassName += ' mob-hide';
                              if (!popup.displayDevice.includes('tablet')) widgetClassName += ' tab-hide';
                              if (!popup.displayDevice.includes('desktop')) widgetClassName += ' des-hide';

                              // Check if the popup has an externalLink
                              const isExternalLink = popup.externalLink && popup.externalLink.trim() !== '';                          
                              
                              // Check if it's a PDF file
                              const isPDFFile = isExternalLink && popup.externalLink.toLowerCase().endsWith('.pdf');

                              return popup.displayStatus === 'active' && popup.showInMenu === 'yes' && (
                                <a
                                key={index}
                                className={`button ${widgetClassName}`}
                                // Check if it's an external link, add href, otherwise add onClick
                                {...(isExternalLink ? (
                                  isPDFFile ? { href: popup.externalLink, target: '_blank'} : { href: popup.externalLink, target: '_blank', rel: 'noopener noreferrer' }
                                ) : { onClick: () => openPopup(popup) })}
                              >
                                {popup.iconSVGCode && (
                                  <span dangerouslySetInnerHTML={{ __html: popup.iconSVGCode }}></span>
                                )}
                                <span>{popup.menuLabel}</span>
                              </a>
                              );
                            })}
                            
                      {language==='arabic'?<link rel="stylesheet" type="text/css" href="/root-css/arabic-font.css" />:''}
                      </div>
                        </div>
                      </div>
                    </Drawer>

                    <Dialog id="mypopup" open={popupOpen} onClose={closePopup} aria-labelledby="popup-title" dir={language === 'arabic'?'rtl':''}>
                      <style dangerouslySetInnerHTML={{ __html: selectedPopup.iframeHTML  }} style={{overflow: 'hidden'}} />
                      <h2 id="popup-title" className='flex-center'>
                        <span style={{paddingRight:'1em'}}>{selectedPopup.title}</span>
                        <a onClick={closePopup} aria-label="close" className='d-inline-block line-height-normal cursor-pointer' href="#">
                          <CloseIcon style={{color:'white'}}/>
                        </a>           
                      </h2>
                      <div className='popup-body'>              
                          {selectedPopup.iframeHTML && ( <div className='t-c' dangerouslySetInnerHTML={{ __html: selectedPopup.iframeHTML  }} style={{overflow: 'hidden'}} />  )}
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




              {/* <div className='bg-white text-black t-c p-1'>---{darkMode ? 'dark' : 'light'}---{activeTheme}<br/>{invoiceTemplate}</div> */}
             {/*  <div className='bg-white text-black t-c p-1'>{clientid}-----{invoiceTemplate}---{invoiceid} {language} {setDarkMode} {activeTheme}</div> */}             
            {/* <ARootInvoice language={language} activeTheme={activeTheme} lightMode={darkMode ? 'dark' : 'light'}/> */} 
            {/* <div className='bg-white text-black t-c p-1'>{invoiceTemplate} --{invoiceid}</div> */}    
           {/* {<div className='bg-white text-black t-c p-1'>{simpleTheme}---{invoiceTemplate} --{invoiceid}--{activeTheme}---{selectedLayout}</div>  } */}
           {/* {<div className='bg-white text-black t-c p-1'> -{invoiceTemplate} </div>  } */}
            
           <iframe src={invoiceTemplate} style={{ width: '100%', height: selectedLayout === 'layout-simple' ? '850px' : selectedLayout === 'layout-small' ? '650px' : selectedLayout === 'layout-bill' ? '704px' : '1220px' }}  frameBorder="0" title="invoice" ></iframe>
              
{/*               {(invoiceid?             
                <iframe                    
                    srcDoc={apiHtml}
                    style={{ width: '100%'}}  height="1000"  frameBorder="0" title="invoice"
                  />              
              : <iframe src={invoiceTemplate} style={{ width: '100%'}} height="1220" frameBorder="0" title="invoice" ></iframe>
              )} */}
              
              

    </div>
  );
}

export default PopupPage;
