import React from 'react';
import { useParams } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import { useLocation } from 'react-router-dom';


function ClientPage() {  
  const { activeTheme } = useParams();  
  const { clientid } = useParams();  
  const { invoiceid } = useParams();   

  //searching extra parameter in the url ?included=printer....
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const selectedlanguage= params.get('selectedlanguage');


  return (
    <div> 
     {/* <WidgetAll clientid={clientid}/> */}
     {/* ----{clientid}--{activeTheme}--{invoiceid}--{selectedlanguage}----11 */}
    {<WidgetAll  activeTheme={activeTheme} clientid={clientid} invoiceid={invoiceid} language={selectedlanguage} />}
    {/* {<WidgetAll  activeTheme='gray' clientid='chanel' invoiceid='default' language='english' />} */}
    {/* {activeTheme}---{clientName}--- */}
    </div>
  );
}

export default ClientPage;