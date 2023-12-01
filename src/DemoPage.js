import React from 'react';
import { useParams } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import RootTheme from './RootTheme';

function DemoPage() {  
  const { activeTheme } = useParams();  
  const { clientid } = useParams();  
  const { invoiceid } = useParams();   

  return (
    <div> 
     {/* <WidgetAll clientid={clientid}/> */}
    {<RootTheme clientid={clientid} activeTheme={activeTheme}  invoiceid={invoiceid} />}
    {/* {activeTheme}---{clientname}--- */}
    </div>
  );
}

export default DemoPage;