import Template from '../../components/template';
import { Container, Form, ButtonContainer } from './styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserAction } from '../../sagas/actions/user';

const Perfil = () => {
  const name = useSelector((state) => state?.name);
  const email = useSelector((state) => state?.email);
  const userId = useSelector((state) => state?.id);
  
  const dispatch = useDispatch();

  const formItemStyle = {
    marginTop: '10px',
    width: '100%',
  };

  const { register, handleSubmit } = useForm();

  const onSave = (data) => {
    const userUpdate = {
      id: userId,
      name: data.name,
      email: data.email,
      password: data.password
    }
    dispatch(updateUserAction(userUpdate));
  };

  return (
    <Template>
      <Container>
        <Typography variant="h3" gutterBottom component="div" color={'#354545'}>
          Editar informações
        </Typography>
        <form onSubmit={handleSubmit(onSave)}>
          <Form elevation={3} width="1000px">
            <TextField
              defaultValue={name}
              label="Nome"
              style={formItemStyle}
              {...register('name', { required: true })}
            />
            <TextField
              defaultValue={email}
              label="Email"
              style={formItemStyle}
              {...register('email', { required: true })}
            />
            <TextField
              label="Senha"
              style={formItemStyle}
              {...register('password', { required: true })}
            />
            <ButtonContainer
              style={{
                backgroundColor: '#354545',
                height: '50px',
                marginTop: '10px',
              }}
              fullWidth
              variant="contained"
              type={'submit'}
            >
              Salvar
            </ButtonContainer>
          </Form>
        </form>
      </Container>
    </Template>
  );
};

export default Perfil;
