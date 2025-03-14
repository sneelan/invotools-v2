import React from 'react';
import { useEffect,useState,useRef   } from 'react';
import { useParams } from 'react-router-dom';
import InvoiceEnglish from './Invoice/english.js';
import InvoiceHindi from './Invoice/InvoiceHindi.js';
import InvoiceSpanish from './Invoice/InvoiceSpanish.js';
import InvoiceArabic from './Invoice/arabic.js';
import InvoiceFrench from './Invoice/InvoiceFrench.js';

const ARootInvoice = () => {
  const { urlLanguage, urlColor, urlMode, urlFont, activeFont, activeTheme, simpleClient, invoLayout, clientName } = useParams();  

 // Create Bootstrap and fadein.css links only once when the component mounts
 useEffect(() => {
  const oldStyle = document.getElementById('theme-stylesheet');
  if (oldStyle) {oldStyle.remove();}  

  if (!document.getElementById('theme-bootstrap')) {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.id = 'theme-bootstrap';
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = '/root-css/bootstrap53.min.css';
    document.head.appendChild(bootstrapLink);
  }
 
  let colorLink = document.getElementById('theme-change');    
    if (!colorLink) {
      colorLink = document.createElement('link');
      colorLink.id = 'theme-change';
      colorLink.rel = 'stylesheet';
      document.head.appendChild(colorLink);
    }
    colorLink.href = `/invoice-css/${urlColor}.min.css`;

    let fontLink = document.getElementById('font-change');    
    if (!fontLink) {
      fontLink = document.createElement('link');
      fontLink.id = 'font-change';
      fontLink.rel = 'stylesheet';
      document.head.appendChild(fontLink);
    }
    fontLink.href = `/invoice-css/font/font-${urlFont}.css`;

if(invoLayout!='layout-featured'){
  let LayoutCSS = document.getElementById('layout-change');    
    if (!LayoutCSS) {
      LayoutCSS = document.createElement('link');
      LayoutCSS.id = 'layout-change';
      LayoutCSS.rel = 'stylesheet';
      document.head.appendChild(LayoutCSS);
    }
    // Update the href attribute
    LayoutCSS.href = `/root-css/${invoLayout}.css`;
  }
  if(invoLayout=='layout-bill'){
    if(urlColor=='diwali' || urlColor=='christmas' || urlColor=='thanks'){
    let LayoutCSS = document.getElementById('layout-change1');    
      if (!LayoutCSS) {
        LayoutCSS = document.createElement('link');
        LayoutCSS.id = 'layout-change1';
        LayoutCSS.rel = 'stylesheet';
        document.head.appendChild(LayoutCSS);
        LayoutCSS.href = `/root-css/layout-festival-bill-fix.css`;
      }     
    }
    }
  if(invoLayout=='layout-small'){
    if(urlColor=='diwali' || urlColor=='christmas' || urlColor=='thanks'){
    let LayoutCSS = document.getElementById('layout-change1');    
      if (!LayoutCSS) {
        LayoutCSS = document.createElement('link');
        LayoutCSS.id = 'layout-change1';
        LayoutCSS.rel = 'stylesheet';
        document.head.appendChild(LayoutCSS);
        LayoutCSS.href = `/root-css/layout-festival-small-fix.css`;
      }     
    }
    }
    if(invoLayout=='layout-simple'){
      if(urlColor=='diwali' || urlColor=='christmas' || urlColor=='thanks'){
      let LayoutCSS = document.getElementById('layout-change1');    
        if (!LayoutCSS) {
          LayoutCSS = document.createElement('link');
          LayoutCSS.id = 'layout-change1';
          LayoutCSS.rel = 'stylesheet';
          document.head.appendChild(LayoutCSS);
          LayoutCSS.href = `/root-css/layout-festival-simple-fix.css`;
        }     
      }
      }


    if (!document.getElementById('theme-fadein')) {
      const fadeinLink = document.createElement('link');
      fadeinLink.id = 'theme-fadein';
      fadeinLink.rel = 'stylesheet';
      fadeinLink.href = '/root-css/a_fadein.css';
      document.head.appendChild(fadeinLink);
    }

}, [urlColor]); 





  
  useEffect(() => { 
        document.body.classList.add('py-xl-2');
       if (urlMode === 'dark' && urlColor!=='printer') {
          document.body.classList.add('dark-mode');
        } else {
          document.body.classList.remove('dark-mode');
        }
    document.documentElement.dir = urlLanguage === 'arabic' ? 'rtl' : '';
    if (urlFont) {      
      const fontClasses = ['font-fira', 'font-nunito', 'font-open', 'font-lato', 'font-poppins', 'font-montserrat', 'font-raleway', 'font-ubuntu', 'font-playfair', 'font-merriweather', 'font-source'];
      fontClasses.forEach(fontClass => document.body.classList.remove(fontClass));
      document.body.classList.add(urlFont);
  }   
    return () => {
    };
  }, [urlColor, urlLanguage, urlMode, urlFont]); 

  const [htmlContent, setHtmlContent] = useState('');
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
    const basePath = '/invoice';
    const sanitizedClientName = clientName === "undefined" ? "" : clientName;
    const newFilePath = sanitizedClientName 
      ? `${basePath}/client/${sanitizedClientName}/${urlLanguage}.html` 
      : `${basePath}/${urlLanguage}.html`;

      setFilePath(newFilePath);

      fetch(newFilePath) // Use newFilePath directly
      .then((res) => (res.ok ? res.text() : Promise.reject("File not found")))
      .then(setHtmlContent)
      .catch(() => setHtmlContent("<p>Invoice not available</p>"));
  }, [urlLanguage, clientName]);   
  
  return (
      <>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </>
    );
    

};

export default ARootInvoice;