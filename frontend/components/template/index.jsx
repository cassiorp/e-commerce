import React from 'react';
import AppBar from '../app-bar';

const Template = ({ children }) => {
  return (
    <div >
      <AppBar />
      {children}
    </div>
  );
};

export default Template;
