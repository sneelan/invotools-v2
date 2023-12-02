import React, { useState } from 'react';
import LeftBar from './LeftBar';
import Content from './Content';
import BottomBar from './BottomBar';
import './scss/diamond.css'; // Import the CSS file
const HomePageDouble = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app-container">
      <LeftBar onPageChange={handlePageChange} />
      <Content currentPage={currentPage} />
      <BottomBar currentPage={currentPage} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePageDouble;
