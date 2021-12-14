import React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import ErrorMessage from '../error-meassage/errorMessage';
import { ButtonContainer } from '../../pages/styles';
import { useForm } from 'react-hook-form';
import { Typography } from '@mui/material';
import {
  ContainerRegister,
  ContainerDialog,
  ContainerCloseIcon,
} from './styles';
import { useDispatch } from 'react-redux';
import { createUserAction } from '../../sagas/actions/user';

const DialogPopUp = ({ title, openPopup, onClose }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSave = (data) => {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    dispatch(createUserAction(user));
  };

  const resetValuesAndClose = () => {
    setValue('name', '');
    setValue('email', '');
    setValue('password', '');
    onClose();
  };

  return (
    <Dialog open={openPopup} maxWidth="md">
      <DialogTitle>
        <div style={{ display: 'flex' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <ContainerCloseIcon onClick={() => resetValuesAndClose()} />
        </div>
      </DialogTitle>
      <ContainerDialog dividers>
        <ContainerRegister>
          <form onSubmit={handleSubmit(onSave)}>
            <TextField
              className={'inputs'}
              fullWidth
              name={'name'}
              error={errors.user}
              id="filled-basic"
              label="Usuário"
              variant="filled"
              {...register('name', { required: true })}
            />
            {errors.user && (
              <ErrorMessage text={'O campo Usuário é obrigatório'} />
            )}
            <TextField
              className={'inputs'}
              type={'email'}
              fullWidth
              name={'email'}
              error={errors.user}
              id="filled-basic"
              label="Email"
              variant="filled"
              {...register('email', { required: true })}
            />
            {errors.user && (
              <ErrorMessage text={'O campo Usuário é obrigatório'} />
            )}
            <TextField
              className={'inputs'}
              fullWidth
              id="filled-password-input"
              label="Senha"
              name={'password'}
              type="password"
              autoComplete="current-password"
              variant="filled"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <ErrorMessage text={'O campo Senha é obrigatório'} />
            )}
            <ButtonContainer
              backgoundcolor={'#354545'}
              className={'inputs buttons-input'}
              fullWidth
              variant="contained"
              type={'submit'}
            >
              CADASTRAR
            </ButtonContainer>
          </form>
        </ContainerRegister>
      </ContainerDialog>
    </Dialog>
  );
};

export default DialogPopUp;
