import React, { useEffect } from 'react';

const PopupChatScript = () => {
  useEffect(() => {
    // This function will run after the component mounts

    // Add the script dynamically
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'zsiqchat';
    script.innerHTML = `
      var $zoho = $zoho || {};
      $zoho.salesiq = $zoho.salesiq || {
        widgetcode: "siq24cff1a1ead850aacb2d578ad17e675588886273af3c420f058709ed8cd0dd76",
        values: {},
        ready: function() {}
      };
      var d = document;
      var s = d.createElement("script");
      s.type = "text/javascript";
      s.id = "zsiqscript";
      s.defer = true;
      s.src = "https://salesiq.zohopublic.in/widget";
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(s, t);
    `;

    // Append the script to the document
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    // Your component JSX
    <div>
      {/* Your component content */}
    </div>
  );
};

export default PopupChatScript;