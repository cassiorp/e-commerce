import styled from 'styled-components';
import DialogContent from '@material-ui/core/DialogContent/DialogContent';
import CloseIcon from '@material-ui/icons/Close';

export const ContainerRegister = styled.div`
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 70%;
  form {
    padding-bottom: 20px;
  }
`;

export const ContainerDialog = styled(DialogContent)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
