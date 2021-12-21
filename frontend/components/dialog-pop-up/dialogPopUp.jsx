import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import ErrorMessage from '../error-meassage/errorMessage';
import { useForm } from 'react-hook-form';
import { Alert, Snackbar, Typography } from '@mui/material';
import {
  ContainerRegister,
  ContainerDialog,
  ContainerCloseIcon,
  ButtonContainer,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createUserAction } from '../../sagas/actions/user';

const DialogPopUp = ({ title, openPopup, onClose }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const success = useSelector((state) => state?.success);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSave = (data) => {
    console.log(data);
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

  useEffect(() => {
    if (!success) return;
    setOpenSuccess(true);
  }, [success]);

  return (
    <>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={() => setOpenSuccess(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setOpenSuccess(false)}
          severity="success"
          sx={{ width: '100%' }}
        >
          Usuário cadastrado com sucesso
        </Alert>
      </Snackbar>
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
                style={{
                  marginTop: '50px',
                }}
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
                style={{
                  marginTop: '50px',
                }}
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
                style={{
                  marginTop: '50px',
                }}
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
                style={{
                  backgroundColor: '#354545',
                  marginTop: '50px',
                  height: '50px',
                }}
                backgoundcolor={'#354545'}
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
    </>
  );
};

export default DialogPopUp;
