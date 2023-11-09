import React from 'react';
import { useLocation } from 'react-router-dom';
import {Link } from 'react-router-dom';


const DeviceButtons = () => {
  const location = useLocation();
  return (
    <>
    {(location.pathname === '/' || location.pathname === '/mobile' || location.pathname === '/tablet') &&(
      <div className='invoice-wrap mt-1'>
                        <div className='t-c drawer-box bg-theme-secondary p-1' style={{marginBottom:'1em'}}>
                          <span className='text-white p-1 me-1'>See in different Device : </span>
                          <Link to="/" className='button me-1' style={{display:'inline-block'}}>Desktop</Link>
                          <Link to="/mobile" className='button me-1' style={{display:'inline-block'}}>Mobile</Link>
                          <Link to="/tablet" className='button me-1' style={{display:'inline-block'}}>Tablet</Link> 
                        </div>
                        </div>
                        )}
    </>
  );
};

export default DeviceButtons;