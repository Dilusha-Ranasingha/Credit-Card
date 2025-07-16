import React from 'react';
import logo from '../../assets/logo.png';

const Header = () => (
  <header style={{
    width: '100%',
    maxWidth: '100%',
    boxSizing: 'border-box',
    background: '#ffffffff',
    color: '#fff',
    padding: '16px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,
    position: 'static',
    overflow: 'hidden'
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={logo}
        alt="DFCC Logo"
        style={{ height: '40px', marginRight: '16px' }}
      />
    </div>
    <nav>
      <a href="/" style={{ color: '#592015ff', marginRight: '24px', textDecoration: 'none' }}>Home</a>
      <a href="/cards" style={{ color: '#592015ff', marginRight: '24px', textDecoration: 'none' }}>Cards</a>
      <a href="/profile" style={{ color: '#592015ff', textDecoration: 'none' }}>Profile</a>
    </nav>
  </header>
);

export default Header;