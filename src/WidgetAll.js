import PopupPage from './popup';
import React, { useState, useEffect } from 'react';
import DeviceButtons from './DeviceButtons';
import {  
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMore icon
import WidgetSocialmedia from './WidgetSocialmedia';
import WidgetPlainText from './WidgetPlainText';

function ColumnComponent({ column, grid, sm, md, lg, length, columnclass}) { 
  const [expanded, setExpanded] = useState(column.toggleExpand === 'yes');
  //const [expanded, setExpanded] = useState(false); //accordion 
  //const isExpanded = column.toggleExpand === 'yes'; // Check the toggleExpand property
  //const [Expanded, setExpanded] = useState(column.toggleExpand === 'yes');
 
  if (column.displayStatus === 'inactive') {
    return null; // Hide the column
  }

  

  
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
    {column.contentHTML && ( <div className='t-c h-100' dangerouslySetInnerHTML={{ __html: column.contentHTML }} style={{overflow: 'hidden', xlineHeight:'50%'}} />  )}
    {column.contentCSS && ( <style className='t-c' dangerouslySetInnerHTML={{ __html: column.contentCSS }} />  )}
    {column.customWidget && column.customWidget==='socialicons' && ( <WidgetSocialmedia data={column.customWidgetData} /> )}
    {column.customWidget && column.customWidget==='plaintext' && ( <WidgetPlainText data={column.customWidgetData} /> )}
    </>
    );
  

    const handleChange = () => {
      setExpanded(!expanded);//accordion
    }; 
  

  const AccordionComponent = (      
        <>
          {column.toggleStatus === 'active' ? (    
            <Accordion expanded={expanded} onChange={handleChange} 
            classes={{ content: 'p-0 m-0', root: expanded ? 'expanded-accordion' : 'collapsed-accordion' }}>
              <AccordionSummary  expandIcon={<ExpandMoreIcon />} classes={{ content: 'p-0 m-0' }}>  
              <h6 class="widget-title">{column.title}</h6>
              </AccordionSummary>
              <AccordionDetails>
              {InnerContent}
              </AccordionDetails>
            </Accordion>                     
          ) : (
            // Display without Accordion when toggleStatus is 'inactive'
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
  }else if (column.toggleStatus === 'inactive' || (column.displayStatus === 'active' && column.toggleStatus === 'active')) {
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


function WidgetAll() {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
       //const response = await fetch('https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-widget.json');
       const response = await fetch('/customer-portal-widget.json');
        const data = await response.json();
        setData(data); // Corrected to use setData instead of setJsonData
      } catch (error) {
        console.error('Error fetching json data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null; // Return early if data is not available yet
  }

  return (
    <>
     
    <PopupPage/>    
    {data && data.widgetAreaCSS && (
      <style dangerouslySetInnerHTML={{ __html: data.widgetAreaCSS }} ></style>
    )}

    <div className='invoice-wrap' style={{ marginBottom:'1em'}}>
      {data &&
        data.rows.map((row, rowIndex) => (
          row.columns.filter((column) => column.displayStatus === 'active').length === 2 ? (
              // If it's the first row and there are exactly two columns with "displayStatus": "active," use a grid
              <div className='widget-row'>
              <Grid container spacing={2} className={'invo-2-col'}>
                {row.columns
                  .filter((column) => column.displayStatus === 'active')
                  .map((column, columnIndex) => (
                    <ColumnComponent key={column.displayOrder} column={column} grid={'Show'} sm={6} md={6} lg={6} length={row.columns.length} />
                  ))}
                </Grid></div>
            ) : row.columns.filter((column) => column.displayStatus === 'active').length === 3 ? (
              // If it's the first row and there are exactly two columns with "displayStatus": "active," use a grid
              <div className='widget-row'>
                <Grid container spacing={2} className={'invo-3-col'}>
                {row.columns
                  .filter((column) => column.displayStatus === 'active')
                  .map((column, columnIndex) => (
                    <ColumnComponent key={column.displayOrder} column={column} grid={'Show'} md={4} lg={4} length={row.columns.length} />
                  ))}
                </Grid></div>
            ) : (
              // For other rows or when there are multiple columns with "displayStatus": "active," use ColumnComponent directly
              row.columns
                .filter((column) => column.displayStatus === 'active')
                .map((column, columnIndex) => (
                  <>
                  <ColumnComponent key={column.displayOrder} column={column} /> 
                  </>
                )))          
        ))}
    </div>
    <DeviceButtons/>
    <footer className='t-c'>
      <p>&copy; {new Date().getFullYear()}, All rights reserved by <a href="https://www.invotools.io" target="_blank" rel="noopener noreferrer"><u>www.Invotools.io</u></a></p>
    </footer>
    </>
  );
}

export default WidgetAll;