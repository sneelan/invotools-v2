import React from 'react';
import DeviceButtons from './DeviceButtons';
const TabletPreviewLands = ({activeTheme}) => {
  return (
    <>
            <div class="mt-1" st>
                <div class="tablet tablet1">
                <div class="content"> 
                  <iframe src={`/${activeTheme}`}  width="960" height="600" frameBorder="0" />
                </div>
            </div>
            </div>
            {/* <DeviceButtons/> */}
    </>
  );
};

export default TabletPreviewLands;