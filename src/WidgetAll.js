import PopupPage from './popup';
import React, { useState, useEffect } from 'react';
import DeviceButtons from './delete-old/DeviceButtons';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import {  
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; // Import the ExpandMore icon
import ReactDOM from 'react-dom';




function ColumnComponent({ column, grid, sm, md, lg, length, columnclass, rowIndex, columnIndex}) { 


  const [expanded, setExpanded] = useState(column.toggleExpand === 'yes');
  //const [expanded, setExpanded] = useState(false); //accordion 
  //const isExpanded = column.toggleExpand === 'yes'; // Check the toggleExpand property
  //const [Expanded, setExpanded] = useState(column.toggleExpand === 'yes');

 
  
  // Generate a unique widget ID based on rowIndex and columnIndex
  const widgetId = `client-widget-en-${rowIndex}-${columnIndex}`;
 
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
            <div className={`widget make-column-height-same ${widgetClassName} ${addClassFixedwidth} `} style={widgetStyle} id={widgetId}>
              {column.title && (<div className='widget-title-border'>
                <h6 class="widget-title " style={{margin:'0 1em'}}>{column.title} {rowIndex}</h6>
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


function WidgetAll  ({ activeTheme, clientid, invoiceid, language, setActiveTheme, simpleClient, simpleTheme}) {
  
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const queryclientforlanguage = params.get('simpleClient');
  if(queryclientforlanguage){simpleClient=queryclientforlanguage;}

  
  const { colorForLanguagePage } = useParams();  
  if(colorForLanguagePage && !activeTheme){activeTheme=colorForLanguagePage;}
  //if(simpleTheme){activeTheme=simpleTheme;}
 
  //if(simpleTheme){setActiveTheme(simpleTheme);}

  //const theme = activeTheme || 'yellow';
  if(!activeTheme){activeTheme='yellow';}


  const [data, setData] = useState(null);
  document.body.classList.add(`theme-${activeTheme}`);

  //for different client demo
  if(clientid){const clientidHypen = clientid + '-';}
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

       if (clientid) {
              //response = await fetch(`https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-${clientidHypen}widget.json`);
              response = await fetch(`/json/client/customer-portal-widget-${clientid}-${language}.json`);
        } else {
              //response = await fetch(`https://raw.githubusercontent.com/sneelan/invo-customer-json/main/customer-portal-widget.json`);
              response = await fetch('/json/customer-portal-widget.json');
        }
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
   <PopupPage activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} language={language} setActiveTheme={setActiveTheme} simpleTheme={simpleTheme} simpleClient={simpleClient} />
    {data && data.widgetAreaCSS && (
      <style dangerouslySetInnerHTML={{ __html: data.widgetAreaCSS }} ></style>
    )}
<div className={`theme-${activeTheme}`} dir={language === 'arabic'?'rtl':''}>
<div className='invoice-wrap' style={{ paddingBottom:'1em'}}>
      {data &&
        data.rows.map((row, rowIndex) => (
          row.columns.filter((column) => column.displayStatus === 'active').length === 2 ? (
              // If it's the first row and there are exactly two columns with "displayStatus": "active," use a grid
              <div className='widget-row'>
              <Grid container spacing={2} className={'invo-2-col'}>
                {row.columns
                  .filter((column) => column.displayStatus === 'active')
                  .map((column, columnIndex) => (
                    <ColumnComponent key={column.displayOrder} column={column} grid={'Show'} sm={12} md={6} lg={6} length={row.columns.length} rowIndex={rowIndex} columnIndex={columnIndex}/>
                  ))}
                </Grid></div>
            ) : row.columns.filter((column) => column.displayStatus === 'active').length === 3 ? (
              // If it's the first row and there are exactly two columns with "displayStatus": "active," use a grid
              <div className='widget-row'>
                <Grid container spacing={2} className={'invo-3-col'}>
                {row.columns
                  .filter((column) => column.displayStatus === 'active')
                  .map((column, columnIndex) => (
                    <ColumnComponent key={column.displayOrder} column={column} grid={'Show'} md={4} lg={4} length={row.columns.length} rowIndex={rowIndex} columnIndex={columnIndex} />
                  ))}
                </Grid></div>
            ) : (
              // For other rows or when there are multiple columns with "displayStatus": "active," use ColumnComponent directly
              row.columns
                .filter((column) => column.displayStatus === 'active')
                .map((column, columnIndex) => (
                  <>
                  <ColumnComponent key={column.displayOrder} column={column} rowIndex={rowIndex} columnIndex={columnIndex} /> 
                  </>
                )))          
        ))}
       {/*  <DeviceButtons onButtonClick={handleButtonClick} /> */}


    </div>     
    </div>     

    </>
  );
}

export default WidgetAll;