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
        <p className='mt-1'>https://invotools-v2.vercel.app/simpledemo/.......clientname......./show</p>
        <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/simpledemo/oliveliving/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/oliveliving/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/simpledemo/dusminute/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/dusminute/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/simpledemo/chanel/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/chanel/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/simpledemo/ckcjewellers/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/ckcjewellers/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/simpledemo/globus/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/globus/show</a></p>
        <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/simpledemo/joyalukkas/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/joyalukkas/show</a></p>
        </div>
     </div>

     <div className='border  rounded overflow-hidden'>     
     <h4 className='fw-bold m-0 bg-dark text-white py-2 px-3'>Custom Html Demo</h4>
      <div className='p-1 ps-3'>               
            <h5 className='text-danger m-0'><b>Dusminute</b></h5>
            <p className='fw-normal  m-0'><a href='https://invotools-v2.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-v2.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            
     </div>
     </div>
    </div>
    </div>
    </div>
  );
}

export default NeelanPage;