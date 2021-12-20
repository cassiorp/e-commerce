import React from 'react';
import AppBar from '../app-bar';

const Template = ({ children }) => {
  return (
    <div style={{height:"100vh", display: "flex", flexDirection: "column"}}>
      <AppBar />
      {children}
    </div>
  );
};

export default Template;
