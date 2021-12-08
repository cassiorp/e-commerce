import React from 'react';
import PropTypes from 'prop-types';
import { InputContainer, Container } from './styles';

const Input = function ({ type, placeHolder }) {
  return <Container><InputContainer type={type} placeholder={placeHolder} /></Container>;
};
Input.defaultProps = {
  type: 'text',
  placeHolder: '',
};

Input.propTypes = {
  type: PropTypes.string,
  placeHolder: PropTypes.string,
};

export default Input;
