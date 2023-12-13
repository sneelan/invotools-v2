import React from 'react';
import { useEffect,useState  } from 'react';
import { useParams } from 'react-router-dom';
import InvoiceEnglish from './InvoiceEnglish.js';
import InvoiceHindi from './InvoiceHindi.js';
import InvoiceSpanish from './InvoiceSpanish.js';
import InvoiceArabic from './InvoiceArabic.js';
import InvoiceFrench from './InvoiceFrench.js';

const ARootInvoice = () => {
  const { urlLanguage, urlColor, urlMode } = useParams();
  const [initialCssAdded, setInitialCssAdded] = useState(false);







  useEffect(() => {      
    if (!initialCssAdded) {
      const bootstrapLink = document.createElement('link');
      bootstrapLink.id = 'theme-bootstrap';
      bootstrapLink.rel = 'stylesheet';
      bootstrapLink.href = '/invoice-css/bootstrap52.css';
      document.head.appendChild(bootstrapLink);
  
  
      const fadeinLink = document.createElement('link');
      fadeinLink.id = 'theme-fadein';
      fadeinLink.rel = 'stylesheet';
      fadeinLink.href = '/invoice-css/a_fadein.css';
      document.head.appendChild(fadeinLink);
      setInitialCssAdded(true);
    }
    
    const existingThemeLink = document.getElementById('theme-stylesheet');
    if (existingThemeLink) {
      existingThemeLink.remove();      
    }

    // Add new theme CSS file
    const themeLink = document.createElement('link');
    themeLink.id = 'theme-stylesheet';
    themeLink.rel = 'stylesheet';
    themeLink.href = `/invoice-css/${urlColor}.css`;
    document.head.appendChild(themeLink); 
   


    if (urlLanguage === 'arabic') {
      const themeLink = document.createElement('link');
      themeLink.id = 'theme-stylesheet2';
      themeLink.rel = 'stylesheet';
      themeLink.href = `/invoice-css/arabic.css`;
      document.head.appendChild(themeLink);
    } else {
  
    }


        // Add 'dark-mode' class to the body if urlMode is 'dark'
        document.body.classList.add('py-xl-2');

       //temporary-neelan-testing
       //if (urlMode === 'dark' && urlColor!=='printer') {
        if (urlMode === 'dark' && urlColor==='yellow') {
          document.body.classList.add('dark-mode');
        } else {
          // Remove 'dark-mode' class if urlMode is not 'dark'
          document.body.classList.remove('dark-mode');
        }

    // Set HTML dir attribute based on urlLanguage
    document.documentElement.dir = urlLanguage === 'arabic' ? 'rtl' : '';
    
    // Clean up when component unmounts
    return () => {
      // Remove both links if needed
      const bootstrapLink = document.getElementById('theme-bootstrap');
      const fadeinLink = document.getElementById('theme-fadein');
      if (bootstrapLink) {bootstrapLink.remove();} 
      if (fadeinLink) {fadeinLink.remove();} 
      if (themeLink) {themeLink.remove(); }
    };
  }, [urlColor, urlLanguage, urlMode]);

  return (
    <>
      {/* <div className='bg-white text-black p-1 text-center'>{urlLanguage}----{urlColor}----{urlMode}</div> */}
      {/* /template/:urlLanguage/:urlColor/:urlMode */}
      
       {urlLanguage=='english' ? <InvoiceEnglish />
      :urlLanguage=='hindi'?<InvoiceHindi/>
      :urlLanguage=='spanish'?<InvoiceSpanish/>
      :urlLanguage=='arabic'?<InvoiceArabic/>
      :urlLanguage=='french'?<InvoiceFrench/>
       :''}

    </>
  );
};

export default ARootInvoice;