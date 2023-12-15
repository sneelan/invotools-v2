import React from 'react';
import { useLocation } from 'react-router-dom';
//import DeviceButtons from './DeviceButtons';
const DeviceView = ({activeTheme, clientid, invoiceid, language, invoiceTemplate, deviceName, deviceWidth, deviceHeight}) => {
  
  let templateURL = language!=='english' ? language+'/'+activeTheme : activeTheme;

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const demoIncludedThemes = params.get('included');
  const demoIncludedLang = params.get('language');
  
/*   if (invoiceid) {
    templateURL =
      invoiceid === 'default'
        ? `https://uxdemo.ayatacommerce.com/invotools/invoice-templates/demo/${clientid}/template-${language}-light.html`
        : `https://dev-invodocz.invotools.io/api/v1/invoice/view/${invoiceid}`;
  } */

  ///client/:clientid/:activeTheme/:invoiceid

if (invoiceid) {
  templateURL=`/client/${clientid}/${activeTheme}/${invoiceid}?included=${demoIncludedThemes}&language=${demoIncludedLang}&selectedlanguage=${language}`;
}

  return (
    <>
            <div class="mt-1">
                <div className={deviceName}>
                <div className="content">
                  {/* <div className='bg-white text-black p-1'>----{clientid}---{language}----<br/>templateURL:{templateURL}<br/>---{invoiceTemplate}--{invoiceid}--{demoIncludedThemes}</div> */}
                  <iframe src={`${templateURL}`}  width={deviceWidth} height={deviceHeight} frameBorder="0" />
                </div>
            </div>
            </div>
            {/* <DeviceButtons/> */}
    </>
  );
};

export default DeviceView;