import React  from 'react';
import MenuIcon from '@mui/icons-material/Menu';


export default () => (
  <>       
    <footer className='bg-theme-secondary-12 text-center py-3 text-theme-secondary-light align-bottom flex-center size-sm'>
    <span className='fs-6 d-inline-block pt-1 pe-1'>© </span>  
    <span>{new Date().getFullYear()}, All rights reserved by <a className='text-theme-secondary-light hover-text-theme-primary hover-underline' href="https://www.invotools.io" target="_blank" rel="noopener noreferrer">www.invotools.io</a></span>
    </footer>
  </>
);