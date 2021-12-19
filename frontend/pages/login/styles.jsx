import styled from 'styled-components';
import { Button } from '@mui/material';

export const BodyLoginPage = styled.div`
  display: flex;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.65) 50%,
      transparent 50%
    ),
    url('/backImage.png') no-repeat center;
  height: 100%;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  .container-input {
    width: 288px;
  }
`;

export const ButtonContainer = styled(Button)`
  background-color: ${(props) => props?.backgoundcolor};
`;
