import React  from 'react';
 
import Page_Faq from './Page_Faq';


export default ({title, path}) => (
  <>       
    <section className='bg-light py-3'>
        <div className='text-center text-lg-start xbg-theme-secondary-1 text-secondary'>
          <div className="container-xl"><h3 className='m-0 weight-medium fs-5 fs-lg-3'>{title}</h3></div>
        </div>
        
        <div className="container-xl my-3 px-2">
        {path === 'faq' && <Page_Faq />} 
      </div>
    </section>
  </>
);