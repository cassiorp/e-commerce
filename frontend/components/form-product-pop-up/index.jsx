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
import { createProductAction } from '../../sagas/actions/user';

const DialogPopUp = ({ title, openPopup, onClose, type, product }) => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const success = useSelector((state) => state?.success);
  const idUser = useSelector((state) => state?.id);

  const [productToUpdate, setProductToUpdate] = useState(null);
  
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSave = (data) => {
    const product = {
      name: data.name,
      idUser: idUser,
      description: data.description,
      price: data.price,
    };
    dispatch(createProductAction(product));
  };

  const onUpdate = (data) => {
    const product = {
      name: data.name,
      description: data.description,
      price: data.price,
    };
    console.log(product);
  };

  const resetValuesAndClose = () => {
    setValue('name', '');
    setValue('description', '');
    setValue('price', '');
    onClose();
  };

  useEffect(() => {
    if (!success) return;
    setOpenSuccess(true);
  }, [success]);

  const renderCreateForm = () => {
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
                style={{
                  marginTop: '50px',
                }}
                fullWidth
                name={'name'}
                error={errors.product}
                id="filled-basic"
                label="Nome do produto"
                variant="filled"
                {...register('name', { required: true })}
              />
              {errors.user && (
                <ErrorMessage text={'O campo produto é obrigatório'} />
              )}

              <TextField
                style={{
                  marginTop: '50px',
                }}
                fullWidth
                name={'description'}
                error={errors.product}
                id="filled-basic"
                label="Descrição do produto"
                variant="filled"
                {...register('description', { required: true })}
              />

              {errors.user && (
                <ErrorMessage text={'O campo Descrição é obrigatório'} />
              )}

              <TextField
                style={{
                  marginTop: '50px',
                }}
                fullWidth
                id="filled-basic"
                type={'number'}
                label="Preço"
                name={'price'}
                variant="filled"
                {...register('price', { required: true })}
              />

              {errors.password && (
                <ErrorMessage text={'O campo Preço é obrigatório'} />
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
    );
  };

  const renderUpdateForm = () => {
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
            <form onSubmit={handleSubmit(onUpdate)}>
              
              <TextField
                style={{
                  marginTop: '50px',
                }}
                fullWidth
                name={'name'}
                error={errors.product}
                id="filled-basic"
                label="Nome do produto"
                variant="filled"
                defaultValue={product?.name}
                {...register('name', { required: true })}
              />
              
              {errors.user && (
                <ErrorMessage text={'O campo produto é obrigatório'} />
              )}

              <TextField
                style={{
                  marginTop: '50px',
                }}
                fullWidth
                name={'description'}
                error={errors.product}
                id="filled-basic"
                label="Descrição do produto"
                variant="filled"
                defaultValue={product?.description}
                {...register('description', { required: true })}
              />

              {errors.user && (
                <ErrorMessage text={'O campo Descrição é obrigatório'} />
              )}

              <TextField
                style={{
                  marginTop: '50px',
                }}
                fullWidth
                id="filled-basic"
                type={'number'}
                label="Preço"
                name={'price'}
                variant="filled"
                defaultValue={product?.price}
                {...register('price', { required: true })}
              />

              {errors.password && (
                <ErrorMessage text={'O campo Preço é obrigatório'} />
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
                Editar
              </ButtonContainer>
            </form>
          </ContainerRegister>
        </ContainerDialog>
      </Dialog>
    );
  };


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
          Produto salvo com sucesso
        </Alert>
      </Snackbar>
      {type == 'create' ? renderCreateForm() : renderUpdateForm()}
    </>
  );
};

export default DialogPopUp;
