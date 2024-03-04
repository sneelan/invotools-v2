import React  from 'react';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';


export default () => (
  <>       
    <NavLink className="me-3 btn btn-primary" onClick={() => window.history.back()}><ArrowBackIcon /> Go Back</NavLink>
    <NavLink className="me-3 btn btn-primary" to="/website/home"><HomeIcon /> Home</NavLink>
    <NavLink className=" btn btn-primary" to="/website/help"><HelpOutlineIcon /> Help</NavLink>
  </>
);