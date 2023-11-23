import React from 'react';
import DeviceButtons from './DeviceButtons';

const MobilePreview = ({activeTheme}) => {
  return (
    <>
            <div class="mt-1" >
              <div class="smartphone mt-1" id="mydevice">
                <div class="content"> 
                  <iframe title="invoice" src={`/${activeTheme}`}  width="330" height="540" frameBorder="0" />
                </div>
            </div>
            </div>
            {/* <DeviceButtons/> */}
    </>
  );
};

export default MobilePreview;