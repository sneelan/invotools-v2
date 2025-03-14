import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import RotateIcon from '@mui/icons-material/Cached';

const DeviceButtons = ({ onButtonClick }) =>  {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const hideIT = 1;


  //theme change
  const [activeTheme, setActiveTheme] = useState('yellow');
  const handleButtonClick = (theme) => {
    setActiveTheme(theme);
    onButtonClick(theme);
  };


  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Navigate to the corresponding page based on the selected option
    switch (selectedValue) {
      case 'mobile':
        navigate('/mobile');
        break;
      case 'desktop':
        navigate('/demo');
        break;
      case 'tablet':
        navigate('/tablet');
        break;
        case 'tablet-landscape':
          navigate('/tablet-landscape');
          break;
      default:
        // Handle other cases if needed
        break;
    }
  };

  useEffect(() => {
    // Set the selected option based on the current path
    switch (location.pathname) {
      case '/mobile':
        setSelectedOption('mobile');
        break;
      case '/demo':
        setSelectedOption('desktop');
        break;
      case '/tablet':
        setSelectedOption('tablet');
        break;
      case '/tablet-landscape':
        setSelectedOption('tablet-landscape');
        break;
      default:
        setSelectedOption('');
        break;
    }
  }, [location.pathname]);

  return (
    <>
      {(location.pathname === '/' || location.pathname === '/demo' || location.pathname === '/mobile' || location.pathname === '/tablet' || location.pathname === '/tablet-landscape') && (
        <>
          <div className='rounded p-1'>
            <div className='t-c flex-center'>
              <select value={selectedOption} onChange={handleSelectChange} style={{ padding: '0.5em', borderRadius: '0' }}>
                <option value="">Select Device</option>
                <option value="mobile">Mobile</option>
                <option value="tablet">Tablet Portrait</option>
                <option value="tablet-landscape">Tablet Landscape </option>
                <option value="desktop">Desktop</option>                
              </select>
              <div class='flex-center ms-1'>
                  <span>Theme:</span>
                  <span>
                    <span className={`theme-btn ${activeTheme === 'yellow' ? 'active' : ''}`} style={{backgroundColor:'#FFA100'}} onClick={() => handleButtonClick('yellow')}></span>
                    <span className={`theme-btn ${activeTheme === 'blue' ? 'active' : ''}`} style={{backgroundColor:'#55d2ff'}} onClick={() => handleButtonClick('blue')}></span>
                    <span className={`theme-btn ${activeTheme === 'green' ? 'active' : ''}`} style={{backgroundColor:'#80CC20'}} onClick={() => handleButtonClick('green')}></span>
                  </span>                 
              </div>
              
            </div>
            {hideIT === 0 && (
              <div className='t-c drawer-box p-1 flex-center' style={{ marginBottom: '1em' }}>
                <div>
                  <span className='me-1'>Choose Device : </span>
                  <Link to="/" className='btn btn-secondary me-1 rounded' style={{ display: 'inline-block' }}>Desktop</Link>
                  <Link to="/mobile" className='btn btn-secondary me-1 rounded' style={{ display: 'inline-block' }}>Mobile</Link>
                  <Link to="/tablet" className='btn btn-secondary me-1 rounded' style={{ display: 'inline-block' }}>Tablet</Link>
                </div>
                <div className='flex-center ms-1'>
                  <div style={{ color: 'gray' }} className='ms-1 me-1'>Rotate </div>
                  <div className='box-button' aria-label="menu"> <RotateIcon /></div>
                </div>
              </div>
            )}
          </div>

        </>
      )}
    </>
  );
};

export default DeviceButtons;