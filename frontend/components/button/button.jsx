import React from 'react';
import ButtonContainer from './styles';

const Button = ({ type, title, onClick }) => {
  return (
    <ButtonContainer onClick={() => onClick()} type={type}>
      {title}
    </ButtonContainer>
  );
};

export default Button;
