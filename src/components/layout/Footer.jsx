import React from 'react';

const Footer = () => (
  <footer className="bg-[#222] text-white py-4 fixed left-0 bottom-0 w-full text-center z-[100]">
    <div className="max-w-[1200px] mx-auto">
      <span className="text-sm tracking-wide">
        © {new Date().getFullYear()} DFCC Bank. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;