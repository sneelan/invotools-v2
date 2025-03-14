import React from 'react';
import DeviceButtons from './DeviceButtons';
const MobilePreview = ({activeTheme, clientid, invoiceid, language}) => {
  const myUrl = language!=='english' ? language+'/'+activeTheme : activeTheme;
  return (
    <>
            <div class="mt-1" st>
                <div class="tablet">
                <div class="content"> 
                <iframe src={`/${myUrl}`}  width="600" height="960" frameBorder="0" />
                </div>
            </div>
            </div>
           {/*  <DeviceButtons/> */}
    </>
  );
};

export default MobilePreview;