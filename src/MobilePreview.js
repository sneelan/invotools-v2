import React from 'react';
//import DeviceButtons from './DeviceButtons';

const MobilePreview = ({activeTheme, clientid, invoiceid, language}) => {
  const myUrl = language!=='english' ? language+'/'+activeTheme : activeTheme;

  return (
    <>
{/*     mmmm{activeTheme}-----mmmm{clientid}-----mmmm{invoiceid}----- */}
            <div class="mt-1" >
              <div class="smartphone mt-1" id="mydevice">
                <div class="content">
                  <iframe title="invoice" src={`/${myUrl}`}  width="330" height="540" frameBorder="0" />
                </div>
            </div>
            </div>
            {/* <DeviceButtons/> */}
    </>
  );
};

export default MobilePreview;