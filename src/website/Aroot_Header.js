import React, { useEffect,useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';

const Aroot_Header = ( ) => {
  const location = useLocation();
  const urlpath = location.pathname.split('/');

  const [menuState, setMenuState] = useState('');
  const toggleMenu = () => {
    if (menuState === '') {
      setMenuState('show');      
    }
      if (menuState === 'show') {
      setMenuState('hiding');      
      setTimeout(() => {
        setMenuState('');
      }, 500);
    }
  };
    // Reset menu state after 3 seconds when in 'hiding' state
    //useEffect(() => {let timer;if (menuState === 'hiding') {timer = setTimeout(() => {setMenuState('');}, 3000);}return () => clearTimeout(timer);}, [menuState]);

    const DropDownMenuClick = (event) => {
      const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
      const dropdownMenus = document.querySelectorAll('.dropdown-menu');
  
      let isOutsideDropdown = true;
  
      dropdownToggle.forEach((toggle) => {
        if (toggle.contains(event.target)) {
          isOutsideDropdown = false;
          toggle.classList.toggle('show'); // Toggle 'show' class on the clicked toggle
          const dropdownMenu = toggle.nextElementSibling;
          if (dropdownMenu && dropdownMenu.classList.contains('dropdown-menu')) {
            dropdownMenu.classList.toggle('show');
          }
        }
      });
  
      dropdownMenus.forEach((menu) => {
        if (menu.contains(event.target)) {
          isOutsideDropdown = false;
        }
      });
  
      if (isOutsideDropdown) {
        dropdownToggle.forEach((toggle) => {
          toggle.classList.remove('show');
        });
        dropdownMenus.forEach((menu) => {
          menu.classList.remove('show');
        });
      } else {
        const clickedToggle = event.target.closest('.dropdown-toggle');
        if (!clickedToggle) {
          dropdownToggle.forEach((toggle) => {
            toggle.classList.remove('show');
          });
          dropdownMenus.forEach((menu) => {
            menu.classList.remove('show');
          });
        }
      }
    };

    const LinkClicked = (title) => {
      if (menuState === 'show') {toggleMenu();}
      if(title){
        document.title = `${title} - Admin Dashboard | Invotools`;
      }else{
        document.title = 'Admin Dashboard | Invotools.io';
      }
      
    };

    useEffect(() => {    
      document.addEventListener('click', DropDownMenuClick);
      return () => {
        document.removeEventListener('click', DropDownMenuClick);
      };
    }, []);

  return (
    <>       
        <header>
            <nav className="navbar navbar-expand-md" >
                <div className="container-fluid p-0">
                  <Link className="navbar-brand" to="/website/home" onClick={() => {LinkClicked();}}>Invotools</Link >
                  <button className="navbar-toggler" onClick={toggleMenu} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                  <MenuIcon />
                  </button>
                  <div className={` ${menuState=='show' ? 'overlay' : 'd-none'}`}></div>
                  <div className={`mobile-menu offcanvas offcanvas-end ${menuState}`}>
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
                      <a data-bs-dismiss="offcanvas" aria-label="Close" onClick={toggleMenu}><CloseIcon sx={{ width: 35, height: 35 }}/></a>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-0">
                        <li className="nav-item"><NavLink activeClassName="active" onClick={() => {LinkClicked();}} className="nav-link" to="/website/home" >Home</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="active" onClick={() => {LinkClicked('FAQ');}} className="nav-link" to="/website/faq">FAQ</NavLink></li>

                        <li className="nav-item"><NavLink activeClassName="active" onClick={() => {LinkClicked('Tutorials');}} className="nav-link" to="/website/tutorials">Tutorials</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="active" onClick={() => {LinkClicked('Documentation');}} className="nav-link" to="/website/documentation">Documentation</NavLink></li>
                        <li className="nav-item"><NavLink activeClassName="active" onClick={() => {LinkClicked('Support');}} className="nav-link" to="/website/support">Support</NavLink></li>

                        <li className="nav-item dropdown">                        
                          <Link 
                          className={`nav-link dropdown-toggle ${urlpath[2] === 'other' ? 'active' : ''}`}
                          role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Dropdown
                          </Link>
                          <ul className="dropdown-menu">
                            <li><NavLink activeClassName="active" onClick={() => {LinkClicked('Logged Out');}} className="dropdown-item" to="/website/other/postlogout">Post Logout</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={() => {LinkClicked('Not Found');}} className="dropdown-item" to="/website/other/404">Not Found</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={() => {LinkClicked('Access Denied');}} className="dropdown-item" to="/website/other/403">Access Denied</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={() => {LinkClicked('Server Error');}} className="dropdown-item" to="/website/other/500">Server Error</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={() => {LinkClicked('Maintenance');}} className="dropdown-item" to="/website/other/503">Maintenance</NavLink></li>
                            <li><NavLink activeClassName="active" onClick={() => {LinkClicked('Help');}} className="dropdown-item" to="/website/help">Help</NavLink></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
        </header>
    </>
  );
}; 

export default Aroot_Header;