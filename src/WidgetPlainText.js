import React from 'react';

const WidgetPlainText = ({ data }) => {
  return (
    <div className="p-1 t-c">
      {data.title && <p className='t-c'><b>{data.title}</b></p>}
      <p dangerouslySetInnerHTML={{ __html: data.text }} />
    </div>
  );
};

export default WidgetPlainText;