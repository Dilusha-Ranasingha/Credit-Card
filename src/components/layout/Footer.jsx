import React from 'react';

const Footer = () => (
  <footer
  style={{
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    background: '#592015ff',
    color: '#fff',
    padding: '16px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    position: 'static',
    overflow: 'hidden'
  }}>
    <div className="max-w-[1200px] mx-auto">
      <span className="text-sm tracking-wide">
        © {new Date().getFullYear()} DFCC Bank. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;