import React from 'react';

const Header = () => (
  <header style={{
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
    <div style={{ fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '1px' }}>
      DFCC Credit Card Portal
    </div>
    <nav>
      <a href="/" style={{ color: '#fff', marginRight: '24px', textDecoration: 'none' }}>Home</a>
      <a href="/cards" style={{ color: '#fff', marginRight: '24px', textDecoration: 'none' }}>Cards</a>
      <a href="/profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</a>
    </nav>
  </header>
);

export default Header;