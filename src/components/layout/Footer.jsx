import React from 'react';
import footerImage from '../../assets/footerimage.png'; // Adjust the path if needed

const Footer = () => (
  <footer
    style={{
      width: '100%',
      maxWidth: '100%',
      boxSizing: 'border-box',
      background: '#1e293b',
      padding: 0,
      margin: 0,
      position: 'static',
      overflow: 'hidden',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <img
      src={footerImage}
      alt="Footer"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  </footer>
);

export default Footer;