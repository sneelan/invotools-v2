import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
//import DeviceButtons from './DeviceButtons';
const DeviceView = ({activeTheme, clientid, invoiceid, language, invoiceTemplate, deviceName, deviceWidth, deviceHeight, simpleClient, simpleTheme, clientName,font,selectedLayout}) => {
  
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const demoIncludedThemes = params.get('included');
  const demoIncludedLang = params.get('language');
  const [filePath, setFilePath] = useState('');

  useEffect(() => {
 
    const newFilePath =`/template/${language}/${activeTheme}/light/${simpleClient}/${selectedLayout}/${font}/${clientName}`;
      

    setFilePath(newFilePath);
  }, [language, activeTheme, clientid, invoiceid, demoIncludedThemes, demoIncludedLang]);
  return (
    <>
            <div class="mt-1">
                <div className={deviceName}>
                <div className="content">
                  <iframe src={filePath} width={deviceWidth} height={deviceHeight} frameBorder="0" />
                </div>
            </div>
            </div>
            {/* <DeviceButtons/> */}
    </>
  );
};

export default DeviceView;