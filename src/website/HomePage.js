import React, { useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Aroot_Header from './Aroot_Header';
import Aroot_Content from './Aroot_Content';
import Aroot_Footer from './Aroot_Footer';
import { useLocation } from 'react-router-dom';
import Inner_Page from './Inner_Page_Root.js';
import Other_Postlogout from './Other_Postlogout.js';
import Other_404 from './Other_404.js';
import Other_500 from './Other_500.js';
import Other_503 from './Other_503.js';
import Other_403 from './Other_403.js';

const HomePage = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/');
  let title;
  if(pathname[2] === 'faq'){title='Frequently Asked Questions';}
  if(pathname[2] === 'tutorials'){title='Tutorials';}
  if(pathname[2] === 'documentation'){title='Documentation';}
  if(pathname[2] === 'support'){title='Support';}


  useEffect(() => {    
    const bootstrapStylesheet = document.createElement('link');
    bootstrapStylesheet.rel = 'stylesheet';
    bootstrapStylesheet.id = 'theme-stylesheet-bootstrap';
    bootstrapStylesheet.href = '/scss/website/bootstrap5_2_3-scss/bootstrap.css';
    document.head.appendChild(bootstrapStylesheet);

    const existingStyle = document.getElementById('theme-stylesheet');
    if (existingStyle) {existingStyle.remove();}  
    const link = document.createElement('link');link.rel = 'stylesheet';link.id = 'theme-stylesheet';link.href = '/scss/website/website.css';
    document.head.appendChild(link);
    return () => {if (link) {link.remove();}if (bootstrapStylesheet) {bootstrapStylesheet.remove();}};
  }, []);
 
  return (
    <>   
    
     <div className="container-fluid px-2" >
      <Aroot_Header/>    
      {!pathname[2] && <Aroot_Content />}     
      {pathname[2]==='home' && <Aroot_Content />}     
      {pathname[3]==='postlogout' && <Other_Postlogout />}     
      {pathname[3]==='404' && <Other_404 />}     
      {pathname[3]==='403' && <Other_403 />}     
      {pathname[3]==='500' && <Other_500 />}     
      {pathname[3]==='503' && <Other_503 />}     
    </div>
    {pathname[2] && pathname[2] != 'home' && pathname[2] != 'other' && <Inner_Page title={title} path={pathname[2]}/>} 
    <Aroot_Footer/>
    </>
  );
}; 

export default HomePage;