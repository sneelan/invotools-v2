import React  from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Aroot_Carousel from './Aroot_Carousel';


export default () => (
    <>       
      <main>
        <div id="hero" className='row p-0 m-0 align-items-center'>
          <div className="col-lg-5 px-5 pe-lg-4 text-center text-lg-start order-last order-lg-first my-3 my-lg-0">
            <h2>Welcome to the Invoice and Store Management Portal by <span class="curve-line"> InvoTools</span>
            </h2>
            <p className=''>Click the login button to redirect to the login page, where you can enter the credentials set by your organization.</p>
            <a href='https://ayatacommerce.auth.ap-south-1.amazoncognito.com/login?client_id=3ne1tt8ls87dk6ruk7ridnk6o&response_type=code&scope=email+openid+phone&redirect_uri=https://admin.invotools.io/' className='btn btn-primary'>Login</a>
            <p className='pt-3'>
              <span className="text-theme-secondary-7"> Want to know more about the InvoTools, please visit </span><a href='https://www.invotools.io' target='_blank'>www.invotools.io</a>
            </p>

          </div>
          <div className="col-lg-7 p-0 rder-first order-lg-last mt-3 mt-lg-0">
            <Aroot_Carousel/>

            {/* if one image */}
            {/* <img src='/img/website/postlogout.png' className='img-fluid' /> */}
          </div>
        </div>

      </main>
    </>
  );