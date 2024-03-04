import React  from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Aroot_Carousel from './Aroot_Carousel';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Snippet_ErrorLinks from './Snippet_ErrorLinks';
export default () => (
    <>       
      <main>
        <div id="hero" className='row p-0 m-0 align-items-center container-lg m-auto'>
          <div className="col-lg-6 px-5 pe-lg-4 text-center text-lg-start order-last order-lg-first my-3 my-lg-0">
            <h2>Under Maintenance. We’ll be right back! </h2>
            <p className=''>Error code: 503
            </p>            
            <p className='pt-3'>
              <span className="text-theme-secondary-7">Here are few links that may be helpful,
              <br/>
              </span>
            </p>
            <div>
            <Snippet_ErrorLinks/>
            </div>

          </div>
          <div className="col-lg-6 p-0 rder-first order-lg-last mt-3 mt-lg-0 text-center ">
            <img src='/img/website/other-503.png' className='img-fluid' />
          </div>
        </div>
      </main>
    </>
  );