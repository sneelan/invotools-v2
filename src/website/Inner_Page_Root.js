import React  from 'react';
 
import Page_Faq from './Page_Faq';


export default ({title, path}) => (
  <>       
    <section className='bg-light py-3'>
        <div className='text-center text-lg-start xbg-theme-secondary-1 text-secondary'>
          <div className="container-xl"><h3 className='m-0 weight-medium'>{title}</h3></div>
        </div>
        
        <div className="container-xl my-3">
        {path === 'faq' && <Page_Faq />} 
      </div>
    </section>
  </>
);