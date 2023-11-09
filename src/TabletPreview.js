import React from 'react';
import DeviceButtons from './DeviceButtons';
const MobilePreview = () => {
  return (
    <>
            <div class="mt-1" st>
                <div class="tablet">
                <div class="content">
                  <iframe src="/invoice"  width="570" height="798" frameBorder="0" />
                </div>
            </div>
            </div>
            <DeviceButtons/>
    </>
  );
};

export default MobilePreview;