import React, { useEffect } from 'react';
 
import Aroot_Header from './Aroot_Header.js'; 
 
import Aroot_Footer from './Aroot_Footer';
import { useLocation } from 'react-router-dom';
import Inner_Page from './Inner_Page_Root.js';
 
 
export default ({ children }) => {
  const location = useLocation();
  const urlpath = location.pathname.split('/');

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
      <div className="container-fluid px-2" >
        <Aroot_Header urlpath2={urlpath[2]}  />  
      </div> 
      <div className="container-fluid px-2" >
        {children}
      </div>
      <Aroot_Footer/>
    </>
  );
};