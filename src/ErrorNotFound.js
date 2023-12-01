import React from 'react';

function ErrorNotFound() {  

  return (
    <div className='theme-yellow' style={{height:'100vh'}}>    
      <div className='invoice-wrap flex-center' style={{height:'100vh'}}>
          <div className='t-c'>
              <img src='/img/404.png' />
              <div className='rounded p-1 bg-white mt-1 shadow' style={{maxWidth:'600px'}}>
                  <div className='p-1'>
                    <h3  className=' p-0 mb-1' style={{color:'Crimson', marginTop:'0'}}>Invoice Not Found</h3>
                    <p  className='mb-1'><b>We're sorry, but the invoice with the provided code is not found in our system. The invoice code you entered is incorrect, and as a result, we are unable to load the invoice.</b></p>
                    <p>Please double-check the invoice code you've entered and try again. If you believe this is an error, or if you need assistance, please click the following button for report a problem. Thank you for your understanding.</p>                
                  </div>
              </div>
              <div className='drawer-box'>
                  <a className='button mt-1'  style={{display:'inline-block'}} href='/'> Go to Home</a>
                </div>
          </div>
      </div>
    </div>
  );
}

export default ErrorNotFound;
