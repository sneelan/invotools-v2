import React, { useEffect } from 'react';
import Aroot_Header from './Aroot_Header.js'; 
import Aroot_Footer from './Aroot_Footer';

export default ({ children, myclass }) => {
  useEffect(() => {    
    const bootstrapStylesheet = document.createElement('link');
    bootstrapStylesheet.rel = 'stylesheet';
    bootstrapStylesheet.id = 'theme-stylesheet-bootstrap';
    bootstrapStylesheet.href = '/scss/website/bootstrap5_2_3-scss/bootstrap.css';
    document.head.appendChild(bootstrapStylesheet);

    const existingStyle = document.getElementById('theme-stylesheet');
    if (existingStyle) { existingStyle.remove(); }  
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.id = 'theme-stylesheet';
    link.href = '/scss/website/website.css';
    document.head.appendChild(link);
    return () => {
      if (link) { link.remove(); }
      if (bootstrapStylesheet) { bootstrapStylesheet.remove(); }
    };
  }, []);

  return (
    <>
      <div className="px-2" ><Aroot_Header /></div>      
      <div id="myfill-height" className={`container-fluid ${myclass}`}>{children}</div>
      <Aroot_Footer/>
    </>
  );
};