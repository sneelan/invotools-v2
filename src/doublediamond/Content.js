import React from 'react';

const Content = ({ currentPage }) => {
  return (
    <div className="content p-1">
      {`page_${Math.floor(currentPage / 10)}_${currentPage % 10}.html`}
      {/* <iframe title={`Page ${currentPage}`} src={`page_${Math.floor(currentPage / 10)}_${currentPage % 10}.html`} /> */}
    </div>
  );
};

export default Content;