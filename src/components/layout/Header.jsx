import React from 'react';
import logo from '../../assets/logo.png';
import headerImage from '../../assets/headerimage.png';

const Header = () => (
  <>
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
    <div style={{
      width: '100%',
      minWidth: '0',
      height: 'auto',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f5f5f5'
    }}>
      <img
        src={headerImage}
        alt="Header"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '320px',
          objectFit: 'cover',
          display: 'block'
        }}
      />
    </div>
  </>
);

export default Header;