import React from 'react';
import DeviceButtons from './DeviceButtons';
const TabletPreviewLands = ({activeTheme, clientid, invoiceid, language}) => {

  const myUrl = language!=='english' ? language+'/'+activeTheme : activeTheme;
  return (
    <>
            <div class="mt-1">
                <div class="tablet tablet1">
                <div class="content">
                  <iframe src={`/${myUrl}`}  width="960" height="600" frameBorder="0" />
                </div>
            </div>
            </div>
            {/* <DeviceButtons/> */}
    </>
  );
};

export default TabletPreviewLands;