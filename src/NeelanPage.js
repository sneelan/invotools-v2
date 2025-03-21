import React from 'react';

function NeelanPage() {  
  const cssFilePath = 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css';

  return (
    <div className='py-xl-2 bg-light '> 
     <link rel="stylesheet" type="text/css" href={cssFilePath} />

    <div className='container-xl shadow bg-white rounded invoice-wrap overflow-hidden p-0'>
    <div className='h3 fw-bold ps-3 py-2 bg-warning m-0'>Neelan's Page</div>
    <div className='p-3'>

     <div className='border  rounded overflow-hidden'>     
     <h4 className='fw-bold m-0 bg-dark text-white py-2 px-3'>Demo</h4>
      <div className='p-1 ps-3 pt-3'>    
            <h5 className='text-danger m-0'><b>Apparel Store Demo</b></h5>      
            <p className='fw-normal  m-0'><a href='/view/508587d1-347c-46c3-9f45-183db8bc4fbb' target='_blank'>https://invotools-v2.vercel.app/view/508587d1-347c-46c3-9f45-183db8bc4fbb</a></p>
            
            
            
            <hr className='border-secondary'/>     

     </div>
     </div>
    </div>
    </div>
    </div>
  );
}

export default NeelanPage;