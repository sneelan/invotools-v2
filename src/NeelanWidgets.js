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
        <p className='mt-1'>https://invotools-v2.vercel.app/simpledemo/.......clientName......./show</p>
        <p className='fw-normal  m-0'><a href='/simpledemo/oliveliving/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/oliveliving/show</a></p>
        <p className='fw-normal  m-0'><a href='/simpledemo/dusminute/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/dusminute/show</a></p>
        <p className='fw-normal  m-0'><a href='/simpledemo/chanel/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/chanel/show</a></p>
        <p className='fw-normal  m-0'><a href='/simpledemo/ckcjewellers/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/ckcjewellers/show</a></p>
        <p className='fw-normal  m-0'><a href='/simpledemo/globus/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/globus/show</a></p>
        <p className='fw-normal  m-0'><a href='/simpledemo/joyalukkas/show' target='_blank'>https://invotools-v2.vercel.app/simpledemo/joyalukkas/show</a></p>
        </div>
     </div>

     <div className='border  rounded overflow-hidden'>     
     <h4 className='fw-bold m-0 bg-dark text-white py-2 px-3'>Custom Html Demo</h4>
      <div className='p-1 ps-3'>
            <p className='mt-1'>https://invotools-v2.vercel.app/demo/clientName/COLOR/default?included=...themenames....&language=..filepathname...</p>
            <hr className='border-secondary'/>         
            
            
  
                
            <h5 className='text-danger m-0'><b>Jewllery - ckcjewellers</b></h5>      
            <p className='fw-normal  m-0'><a href='/demo/ckcjewellers/gray/default?included=yellow,blue,green,maroon,red,black,printer&language=English' target='_blank'>https://invotools-v2.vercel.app/demo/ckcjewellers/gray/default?included=yellow,blue,green,maroon,red,black,gray,printer,diwali,christmas,thanks,ads&language=English</a></p>
            
            
            <hr className='border-secondary'/>         
            <h5 className='text-danger m-0'><b>Restaurant - Oliveliving</b></h5>      
            <p className='fw-normal  m-0'><a href='/demo/oliveliving/maroon/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-v2.vercel.app/demo/oliveliving/maroon/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            <p className='fw-normal  m-0'><a href='/demo/oliveliving/gray/default?included=yellow,blue,green,maroon,red,black,printer&language=English' target='_blank'>https://invotools-v2.vercel.app/demo/oliveliving/gray/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            <hr className='border-secondary'/>     
            <h5 className='text-danger m-0'><b>Dusminute</b></h5>
            <p className='fw-normal  m-0'><a href='/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English' target='_blank'>https://invotools-v2.vercel.app/demo/dusminute/green/default?included=yellow,blue,green,maroon,red,black,gray,printer&language=English</a></p>
            <hr className='border-secondary'/>     

     </div>
     </div>
    </div>
    </div>
    </div>
  );
}

export default NeelanPage;