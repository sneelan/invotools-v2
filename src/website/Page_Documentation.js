import React  from 'react';

import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarIcon from '@mui/icons-material/Star';

export default ( ) => (
  <>       
<div class="container px-4 py-5">
    <h6 class="pb-2 border-bottom">Features with title</h6>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
      <div class="col d-flex align-items-start">
      <div className="pe-2"><AlarmIcon style={{ paddingRight: '10px', fontSize:'45px', }} className='text-primary'  /></div>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <DeleteIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary'/>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <FaceIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary'/>
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <HomeIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <MailIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <ShoppingCartIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <SearchIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
      <div class="col d-flex align-items-start">
      <StarIcon style={{ paddingRight: '10px', fontSize:'45px', }}  className='text-primary' />
        <div>
          <h3 class="fw-bold mb-0 fs-4 text-body-emphasis">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading.</p>
        </div>
      </div>
    </div>
     

  </div>
  </>
);