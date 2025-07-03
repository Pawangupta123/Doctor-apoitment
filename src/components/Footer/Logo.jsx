import React from 'react';
import { Link } from 'react-router-dom';

function Logo({ width = "120px" }) {
  return (
    <Link to="/" className="inline-block">
      <img 
        src="/logo.svg" 
        alt="Doctor Connect Logo" 
        style={{ width }} 
        className="object-contain"
      />
    </Link>
  );
}

export default Logo;
