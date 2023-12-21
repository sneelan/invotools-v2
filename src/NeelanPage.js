import React from 'react';

function NeelanPage() {  
  const cssFilePath = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';

  return (
    <div className='py-xl-2'> 
     <link rel="stylesheet" type="text/css" href={cssFilePath} />

    <div className='container-xl shadow p-3 bg-white rounded invoice-wrap overflow-hidden  '> 
    <div className='h1 mb-2'>Neelan Page</div>
     <h4>Url Structure:</h4>

     <div className='border p-3'>
      <h4 className='fw-bold'>Simple Demo </h4>
      <p>https://invotools-customer.vercel.app/simpledemo/.......clientname......./show</p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/simpledemo/oliveliving/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/oliveliving/show</a></p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/simpledemo/dusminute/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/dusminute/show</a></p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/simpledemo/chanel/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/chanel/show</a></p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/simpledemo/ckcjewellers/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/ckcjewellers/show</a></p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/simpledemo/globus/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/globus/show</a></p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/simpledemo/joyalukkas/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/joyalukkas/show</a></p>
      
     </div>

     <div className='border p-3'>
      <h4 className='fw-bold'>Custom Html Demo</h4>
      <p>https://invotools-customer.vercel.app/demo/clientname/COLOR/default?included=...themenames....&language=..filepathname...</p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/demo/oliveliving/maroon/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-customer.vercel.app/demo/oliveliving/maroon/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
      <p className='h5 fw-normal '><a href='https://invotools-customer.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-customer.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>

     </div>

    </div>
    </div>
  );
}

export default NeelanPage;