import React from 'react';
import DeviceButtons from './DeviceButtons';
const MobilePreview = () => {
  return (
    <>
            <div class="mt-1">
              <div class="smartphone mt-1">
                <div class="content">
                  <iframe src="/invoice"  width="330" height="540" frameBorder="0" />
                </div>
            </div>
            </div>
            <DeviceButtons/>
    </>
  );
};

export default MobilePreview;