import React from 'react';

function ViewId({ src }) {
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      height: '100%',
      overflow: 'hidden',
    },
    iframeContainer: {
      width: '100%',
      height: '100vh',overflow: 'hidden',
    },
    iframe: {
      width: '100%',
      height: '100%',
      border: 'none',
    },
  };

  return (
    <div style={styles.iframeContainer}>
      <iframe
        src={src}
        title="Invotools Customer Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={styles.iframe}
      ></iframe>
    </div>
  );
}

export default ViewId;