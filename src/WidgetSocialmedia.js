import React from 'react';
import {
  Facebook as FacebookIcon,
  Twitter,
  YouTube,
  Instagram,
  LinkedIn,
  Pinterest,
  Reddit,
  GitHub,
  WhatsApp,
  Telegram,
} from '@mui/icons-material';

const socialMediaData = [
  { key: 'facebook', color: '#1877f2', icon: <FacebookIcon /> },
  { key: 'twitter', color: '#1da1f2', icon: <Twitter /> },
  { key: 'youtube', color: '#ff0000', icon: <YouTube /> },
  { key: 'instagram', color: '#bc2a8d', icon: <Instagram /> },
  { key: 'linkedin', color: '#0077b5', icon: <LinkedIn /> },
  { key: 'pinterest', color: '#bd081c', icon: <Pinterest /> },
  { key: 'reddit', color: '#ff5700', icon: <Reddit /> },
  { key: 'github', color: '#333', icon: <GitHub /> },
  { key: 'whatsapp', color: '#25d366', icon: <WhatsApp /> },
  { key: 'telegram', color: '#0088cc', icon: <Telegram /> },
];

const WidgetSocialmedia = ({ data }) => {
  return (
    <div>
      {data.title && <h5 className='t-c mb-1 mt-1'>{data.title}</h5>}
      <div className="social-links t-c">
        {socialMediaData.map(({ key, color, icon }) => (
          data[key] && (
            <a key={key} href={data[key]} target="_blank" rel="noopener noreferrer" style={{ color }}>
              {icon}
            </a>
          )
        ))}
      </div>
    </div>
  );
};

export default WidgetSocialmedia;