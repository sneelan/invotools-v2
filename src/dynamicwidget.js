import PopUp from './popup';
import React, { useState, useEffect } from 'react';
import {  
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
//import jsonData from './customer-portal-widget.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMore icon

function ColumnComponent({ column, grid, sm, md, lg, length, columnclass}) {
  const [expanded, setExpanded] = useState(false); //accordion 

  if (column.displayState === 'Hide') {
    return null; // Hide the column
  }

  const isExpanded = column.expandState === 'Yes'; // Check the expandState property
  
  const widgetStyle = {};
  let addClassFixedwidth='';
  if (column.width && !grid) {
    widgetStyle.width = `${column.width}px`;
    addClassFixedwidth = 'set-custom-width';
  }
  
  if (column.height) {
    widgetStyle.height = `${column.height}px`;
  }
  
  if (!length) {
    widgetStyle.margin = '0 auto';
  }

  const displayDevice = column.displayDevice;
  let widgetClassName = '';
  if (!displayDevice.includes('mobile')) {widgetClassName += ' mob-hide';}
  if (!displayDevice.includes('tablet')) {widgetClassName += ' tab-hide';}
  if (!displayDevice.includes('desktop')) {widgetClassName += ' des-hide';}

  
  const InnerContent = (   
    <>
    {column.contentHTML && ( <div className='t-c' dangerouslySetInnerHTML={{ __html: column.contentHTML }} style={{overflow: 'hidden'}} />  )}
    {column.contentCSS && ( <style className='t-c' dangerouslySetInnerHTML={{ __html: column.contentCSS }} />  )}
    </>
    );
  

    const handleChange = () => {
      setExpanded(!expanded);//accordion
    }; 
  

  const AccordionComponent = (      
        <>
          {column.showexpand === 'Show' ? (                   
            <Accordion expanded={expanded} onChange={handleChange} defaultExpanded={isExpanded} 
            classes={{ content: 'p-0 m-0', root: expanded ? 'expanded-accordion' : 'collapsed-accordion' }}>
              <AccordionSummary  expandIcon={<ExpandMoreIcon />} classes={{ content: 'p-0 m-0' }}>  
              <h6 class="widget-title">{column.title}</h6>
              </AccordionSummary>
              <AccordionDetails>
              {InnerContent}
              </AccordionDetails>
            </Accordion>                     
          ) : (
            // Display without Accordion when showexpand is 'No'
            <div className={`widget make-column-height-same ${widgetClassName} ${addClassFixedwidth}`} style={widgetStyle}>
              {column.title && (<div className='widget-title-border'>
                <h6 class="widget-title " style={{margin:'0 1em'}}>{column.title}</h6>
                </div>)}              
              {InnerContent}
              {/* Display a white box without any content */}
              </div>
          )}
        </>
  );
  if (grid==='Show') {
    return (
      <Grid item xs={12} sm={sm} md={md} lg={lg} className={widgetClassName}>{columnclass}{AccordionComponent}</Grid>
    )
  }else if (column.showexpand === 'Hide' || (column.displayState === 'Show' && column.showexpand === 'Show')) {
    return (<
      div className='widget-row'>   
        {AccordionComponent}
      </div>);
  }else{
    return (
    <div className='widget-row'>
      {AccordionComponent}
      </div>
    )    
  }


}

const InvoiceTemplate='<iframe src="https://uxdemo.ayatacommerce.com/invotools/invoice-templates/modern-v1/template.html" style="width:100%;" height="1165" frameborder="0"></iframe>';


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-widget.json');
       //const response = await fetch('/customer-portal-widget1.json');
        const data = await response.json();
        setData(data); // Corrected to use setData instead of setJsonData
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null; // Return early if data is not available yet
  }

  return (
    <>
    <PopUp/>
    <div className='t-c' dangerouslySetInnerHTML={{ __html: InvoiceTemplate }} /> 
    {data && data.widgetAreaCSS && (
      <style dangerouslySetInnerHTML={{ __html: data.widgetAreaCSS }} ></style>
    )}

    <div className='invoice-wrap' style={{ marginBottom:'1em'}}>
      {data &&
        data.rows.map((row, rowIndex) => (
          row.columns.filter((column) => column.displayState === 'Show').length === 2 ? (
              // If it's the first row and there are exactly two columns with "displayState": "Show," use a grid
              <div className='widget-row'>
              <Grid container spacing={2} className={'invo-2-col'}>
                {row.columns
                  .filter((column) => column.displayState === 'Show')
                  .map((column, columnIndex) => (
                    <ColumnComponent key={column.displayOrder} column={column} grid={'Show'} sm={6} md={6} lg={6} length={row.columns.length} />
                  ))}
                </Grid></div>
            ) : row.columns.filter((column) => column.displayState === 'Show').length === 3 ? (
              // If it's the first row and there are exactly two columns with "displayState": "Show," use a grid
              <div className='widget-row'>
                <Grid container spacing={2} className={'invo-3-col'}>
                {row.columns
                  .filter((column) => column.displayState === 'Show')
                  .map((column, columnIndex) => (
                    <ColumnComponent key={column.displayOrder} column={column} grid={'Show'} md={4} lg={4} length={row.columns.length} />
                  ))}
                </Grid></div>
            ) : (
              // For other rows or when there are multiple columns with "displayState": "Show," use ColumnComponent directly
              row.columns
                .filter((column) => column.displayState === 'Show')
                .map((column, columnIndex) => (
                  <>
                  <ColumnComponent key={column.displayOrder} column={column} /> 
                  </>
                )))          
        ))}
    </div>
    <footer className='t-c'>
      <p>&copy; {new Date().getFullYear()} Invotools. All rights reserved by <a href="https://www.invotools.io" target="_blank" rel="noopener noreferrer">Invotools.io</a></p>
    </footer>
    </>
  );
}

export default App;