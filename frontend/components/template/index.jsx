import React from 'react';
import AppBar from '../app-bar';

const Template = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default Template;
