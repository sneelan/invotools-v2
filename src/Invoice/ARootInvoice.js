import React from 'react';
import { useEffect,useState,useRef   } from 'react';
import { useParams } from 'react-router-dom';
import InvoiceEnglish from './InvoiceEnglish.js';
import InvoiceHindi from './InvoiceHindi.js';
import InvoiceSpanish from './InvoiceSpanish.js';
import InvoiceArabic from './InvoiceArabic.js';
import InvoiceFrench from './InvoiceFrench.js';

const ARootInvoice = () => {
  const { urlLanguage, urlColor, urlMode, activeTheme, simpleClient } = useParams();  

 // Create Bootstrap and fadein.css links only once when the component mounts
 useEffect(() => {
  const oldStyle = document.getElementById('theme-stylesheet');
  if (oldStyle) {oldStyle.remove();}  

  if (!document.getElementById('theme-bootstrap')) {
    const bootstrapLink = document.createElement('link');
    bootstrapLink.id = 'theme-bootstrap';
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = '/invoice-css/bootstrap52.css';
    document.head.appendChild(bootstrapLink);
  }
 
  let colorLink = document.getElementById('theme-change');    
    if (!colorLink) {
      colorLink = document.createElement('link');
      colorLink.id = 'theme-change';
      colorLink.rel = 'stylesheet';
      document.head.appendChild(colorLink);
    }
    // Update the href attribute
    colorLink.href = `/invoice-css/${urlColor}.css`;


    if (!document.getElementById('theme-fadein')) {
      const fadeinLink = document.createElement('link');
      fadeinLink.id = 'theme-fadein';
      fadeinLink.rel = 'stylesheet';
      fadeinLink.href = '/invoice-css/a_fadein.css';
      document.head.appendChild(fadeinLink);
    }

}, [urlColor]); 





  
//  const [initialCssAdded, setInitialCssAdded] = useState(false);
  useEffect(() => { 
    /*      
    if (!initialCssAdded) {
      const bootstrapLink = document.createElement('link');
      bootstrapLink.id = 'theme-bootstrap';
      bootstrapLink.rel = 'stylesheet';
      bootstrapLink.href = '/invoice-css/bootstrap52.css';
      document.head.appendChild(bootstrapLink);
    }
    
    const existingThemeLink = document.getElementById('theme-stylesheet');
    if (existingThemeLink) {existingThemeLink.remove(); }

    // Add new theme CSS file
    const themeLink = document.createElement('link');
    themeLink.id = 'theme-stylesheet';
    themeLink.rel = 'stylesheet';
    themeLink.href = `/invoice-css/${urlColor}.css`;
    document.head.appendChild(themeLink); 
   
    const fadeinLink = document.createElement('link');
    fadeinLink.id = 'theme-fadein';
    fadeinLink.rel = 'stylesheet';
    fadeinLink.href = '/invoice-css/a_fadein.css';
    document.head.appendChild(fadeinLink);
    setInitialCssAdded(true);


    if (urlLanguage === 'arabic') {
      const themeLink = document.createElement('link');
      themeLink.id = 'theme-stylesheet2';
      themeLink.rel = 'stylesheet';
      themeLink.href = `/invoice-css/arabic.css`;
      document.head.appendChild(themeLink);
    } else {} */


        // Add 'dark-mode' class to the body if urlMode is 'dark'
        document.body.classList.add('py-xl-2');

       //temporary-neelan-testing
       if (urlMode === 'dark' && urlColor!=='printer') {
       // if (urlMode === 'dark' && urlColor==='yellow') {
          document.body.classList.add('dark-mode');
        } else {
          // Remove 'dark-mode' class if urlMode is not 'dark'
          document.body.classList.remove('dark-mode');
        }

    // Set HTML dir attribute based on urlLanguage
    document.documentElement.dir = urlLanguage === 'arabic' ? 'rtl' : '';
    
    // Clean up when component unmounts
    return () => {
/*       // Remove both links if needed
      const bootstrapLink = document.getElementById('theme-bootstrap');
      const fadeinLink = document.getElementById('theme-fadein');
      if (bootstrapLink) {bootstrapLink.remove();}       
      if (themeLink) {themeLink.remove(); }
      if (fadeinLink) {fadeinLink.remove();}  */
    };
  }, [urlColor, urlLanguage, urlMode]); 

  return (
    <>
    
      {/* <div className='bg-white text-black p-1 text-center'>{urlLanguage}----{urlColor}----{urlMode}</div> */}
      {/* /template/:urlLanguage/:urlColor/:urlMode */}
      {/* ----{simpleClient} */}
       {urlLanguage=='english' ? <InvoiceEnglish />
      :urlLanguage=='hindi'?<InvoiceHindi/>
      :urlLanguage=='spanish'?<InvoiceSpanish/>
      :urlLanguage=='arabic'?<InvoiceArabic/>
      :urlLanguage=='french'?<InvoiceFrench/>
       :''}
       {simpleClient!=='undefined'?
             <style>{`.logo{background-image: url('https://uxdemo.ayatacommerce.com/invotools/invoice-templates/simpledemo/${simpleClient}.png')!important; background-size: auto;}`}</style>
       :''}

    </>
  );
};

export default ARootInvoice;