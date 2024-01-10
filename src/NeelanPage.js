import React from 'react';

function NeelanPage() {  
  const cssFilePath = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';

  return (
    <div className='py-xl-2 bg-light '> 
     <link rel="stylesheet" type="text/css" href={cssFilePath} />

    <div className='container-xl shadow bg-white rounded invoice-wrap overflow-hidden p-0'>
    <div className='h3 fw-bold ps-3 py-2 bg-warning m-0'>Neelan's Page</div>
    <div className='p-3'>
     <div className='border rounded mb-2 overflow-hidden '>
      <h4 className='fw-bold m-0 bg-dark text-white py-2 px-3'>Simple Demo </h4>
        <div className='p-1 ps-3'>
        <p className='mt-1'>https://invotools-customer.vercel.app/simpledemo/.......clientname......./show</p>
        <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/simpledemo/oliveliving/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/oliveliving/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/simpledemo/dusminute/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/dusminute/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/simpledemo/chanel/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/chanel/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/simpledemo/ckcjewellers/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/ckcjewellers/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/simpledemo/globus/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/globus/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/simpledemo/joyalukkas/show' target='_blank'>https://invotools-customer.vercel.app/simpledemo/joyalukkas/show</a></p>
        </div>
     </div>

     <div className='border  rounded overflow-hidden'>     
     <h4 className='fw-bold m-0 bg-dark text-white py-2 px-3'>Custom Html Demo</h4>
      <div className='p-1 ps-3'>
            <p className='mt-1'>https://invotools-customer.vercel.app/demo/clientname/COLOR/default?included=...themenames....&language=..filepathname...</p>
            <hr className='border-secondary'/>         
            <h5 className='text-danger m-0'><b>ckcjewellers</b></h5>      
            <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/demo/ckcjewellers/gray/default?included=yellow,blue,green,maroon,red,black,printer&language=English' target='_blank'>https://invotools-customer.vercel.app/demo/ckcjewellers/gray/default?included=yellow,blue,green,maroon,red,black,gray,printer,diwali,christmas,thanks,ads&language=English</a></p>
            <hr className='border-secondary'/>         
            <h5 className='text-danger m-0'><b>Oliveliving</b></h5>      
            <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/demo/oliveliving/maroon/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-customer.vercel.app/demo/oliveliving/maroon/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/demo/oliveliving/gray/default?included=yellow,blue,green,maroon,red,black,printer&language=English' target='_blank'>https://invotools-customer.vercel.app/demo/oliveliving/gray/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            <hr className='border-secondary'/>     
            <h5 className='text-danger m-0'><b>Dusminute</b></h5>
            <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-customer.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            <hr className='border-secondary'/>     
            <h5 className='text-danger m-0'><b>Chanel</b></h5>
            <p className='fw-normal  m-0'><a href='https://invotools-customer.vercel.app/demo/chanel/gray/default?included=printer&language=English-Arabic,English,Arabic' target='_blank'>https://invotools-customer.vercel.app/demo/chanel/gray/default?included=printer&language=English-Arabic,English,Arabic</a></p>
            <hr className='border-secondary'/> 
     </div>
     </div>
    </div>
    </div>
    </div>
  );
}

export default NeelanPage;