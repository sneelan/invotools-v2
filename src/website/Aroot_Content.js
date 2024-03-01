import React  from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Aroot_Carousel from './Aroot_Carousel';


export default () => (
    <>       
      <main>
        <div id="hero" className='row p-0 m-0 align-items-center'>
          <div className="col-lg-5 px-5 pe-lg-4 text-center text-lg-start order-last order-lg-first my-3 my-lg-0">
            <h3>Welcome to the Invoice and Store Management Portal by InvoTools</h3>
            <p className=''>Click the login button to redirect to the login page, where you can enter the credentials set by your organization.</p>
            <a href='#' className='btn btn-primary'>Login</a>
            <p className='pt-3'>
              <span className="text-theme-secondary-7"> Want to know more about the InvoTools, please visit </span><a href='https://www.invotools.io' target='_blank'>www.invotools.io</a>
            </p>

          </div>
          <div className="col-lg-7 p-0 rder-first order-lg-last mt-3 mt-lg-0">
            <Aroot_Carousel/>
          </div>
        </div>

      </main>
    </>
  );