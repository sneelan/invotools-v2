import React from 'react';

const BottomBar = ({ currentPage, onPageChange }) => {
  const handlePrevClick = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    // Assuming there are a total of 40 pages (4 pages * 10 children per page)
    if (currentPage < 39) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="bottom-bar">
      <button onClick={handlePrevClick} disabled={currentPage === 0}>
        Prev
      </button>
      <button onClick={handleNextClick} disabled={currentPage === 39}>
        Next
      </button>
    </div>
  );
};

export default BottomBar;