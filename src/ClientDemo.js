import React from 'react';
import { useParams } from 'react-router-dom';
import WidgetAll from './WidgetAll';

function ClientDemo() {
  const { id } = useParams();  
  const clientid = id; 

  return (
    <div> 
     <WidgetAll clientid={clientid}/>
    </div>
  );
}

export default ClientDemo;