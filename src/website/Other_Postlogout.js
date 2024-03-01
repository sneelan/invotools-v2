import React  from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Aroot_Carousel from './Aroot_Carousel';


export default () => (
    <>       
      <main>
        <div id="hero" className='row p-0 m-0 align-items-center container-lg m-auto'>
          <div className="col-lg-6 px-5 pe-lg-4 text-center text-lg-start order-last order-lg-first my-3 my-lg-0">
            <h3>You've Been Successfully Logged Out, See You Next Time!</h3>
            <p className=''>Thank you for using our administrative web portal. Your session has been ended. For security purposes, please close your browser window. <br/>
            If you need to re-access your account, please click on login button.
            </p>
            <a href='#' className='btn btn-primary'>Login</a>
            <p className='pt-3'>
              <span className="text-theme-secondary-7"> Want to know more about the InvoTools, please visit </span><a href='https://www.invotools.io' target='_blank'>www.invotools.io</a>
            </p>

          </div>
          <div className="col-lg-6 p-0 rder-first order-lg-last mt-3 mt-lg-0 text-center ">
            <img src='/img/website/postlogout.png' className='img-fluid' />
          </div>
        </div>
      </main>
    </>
  );