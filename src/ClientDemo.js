import React from 'react';
import { useParams } from 'react-router-dom';
import WidgetAll from './WidgetAll';
import RootTheme from './RootTheme';

function ClientDemo() {
  const { id } = useParams();  
  const clientid = id; 

  return (
    <div> 
     {/* <WidgetAll clientid={clientid}/> */}
     {<RootTheme clientid={clientid}/>}
    </div>
  );
}

export default ClientDemo;