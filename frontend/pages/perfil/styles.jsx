import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; 
  margin-top: 100px;
`;

export const Form = styled(Paper)`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  width: 400px;
`;

export const ButtonContainer = styled(Button)`
  background-color: ${(props) => props?.backgoundcolor};
`;
