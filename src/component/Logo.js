import React from 'react';

const Logo = (props) => {
  return (
    <img
      src="/images/logo.png"
      alt="Logo"
      {...props}
      style={{ width: "100%", maxWidth: "200px" }}
    />
  );
};

export default Logo;
