import React from 'react';
import { useLocation } from 'react-router-dom';
import RootTheme from './RootTheme';

function NewDemo() {  
  const location = useLocation();
  const lastPart = location.pathname.split('-').pop(); // Gets last segment of URL

  let clientName = '';
  let activeTheme = '';
  let invoiceid = 'none';

  if (lastPart === '183db8bc4fbb') {
    clientName = 'apparel';
    activeTheme = 'yellow';
  } else if (lastPart === '283db8bc4fbb') {
    clientName = 'electronics';
    activeTheme = 'blue';
  }

  return (
    <div>
      <RootTheme clientName={clientName} activeTheme={activeTheme}  />
    </div>
  );
}

export default NewDemo;