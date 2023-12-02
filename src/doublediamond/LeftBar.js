import React, { useState } from 'react';
import LeftBarData from './LeftBarData';

const LeftBar = ({ onPageChange }) => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (page, child = 0) => {
    onPageChange(page * 10 + child);
    setActiveLink(`${page}-${child}`);
  };

  const handleDropdownChange = (selectedOption) => {
    // Handle dropdown change if needed
    console.log('Selected option:', selectedOption);
  };

  return (
    <div className="left-bar">
      {/* Logo */}
      <div className="logo">
      <img  src='/img/dd/splash.png' width='100' />
      </div>

      {/* Dropdown */}
      <div className="dropdown-container">
        <label htmlFor="projectType">Type:</label>
        <select id="projectType" onChange={(e) => handleDropdownChange(e.target.value)}>
          <option value="website">Website</option>
          <option value="webApp">Web App</option>
          <option value="mobileApp">Mobile App</option>
        </select>
        <br/>
        <label htmlFor="projectType">Industry:</label>
        <select id="projectType" onChange={(e) => handleDropdownChange(e.target.value)}>
              <option value="website">E-Commerce</option>
              <option value="financeApp">FinTech</option>
              <option value="healthTechApp">Healthtech</option>
              <option value="edTechApp">EdTech</option>
              <option value="travelApp">Travel</option>     
        </select>

      </div>

      {/* Tree Structure */}
      <ul>
        {LeftBarData.map((node, pageIndex) => (
          <li key={pageIndex}>
            <a
              href={`#${node.label.toLowerCase()}`}
              className={activeLink === `${pageIndex}` ? 'active' : ''}
              onClick={() => handleLinkClick(pageIndex)}
            >
              {node.label}
            </a>
            {node.children.length > 0 && (
              <ul>
                {node.children.map((child, childIndex) => (
                  <li key={childIndex} onClick={() => handleLinkClick(pageIndex, childIndex + 1)}>
                    <a
                      href={`#${node.label.toLowerCase()}-child-${childIndex + 1}`}
                      className={activeLink === `${pageIndex}-${childIndex + 1}` ? 'active' : ''}
                    >
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftBar;