import React, { useEffect } from 'react';

import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';



export default function Page_Documentation (){
  const columnClass='col d-flex align-items-start hover-bg-theme-primary-verylight p-2 rounded transition-1';
  return(
  <>       
<div>
    <h6 className="pb-2 border-bottom mb-0" >Features with title</h6>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div className={columnClass}>
      <div className="pe-2"><AlarmIcon style={{ paddingRight: '10px', fontSize:'45px', }} className='text-primary'  /></div>
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
      <DeleteIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary'/>
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
      <FaceIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary'/>
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
      <HomeIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
      <MailIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
        <ShoppingCartIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
      <SearchIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div className={columnClass}>
      <StarIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h4 className="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h4>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>  
  </div>
  </>
  );
};