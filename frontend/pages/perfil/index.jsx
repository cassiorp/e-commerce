import Template from '../../components/template';
import { Container, Form, ButtonContainer } from './styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';

const Perfil = () => {
  const formItemStyle = {
    marginTop: '10px',
    width: '100%',
  };

  const { register, handleSubmit } = useForm();

  const onSave = (data) => {
    console.log(data);
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
              label="Nome"
              style={formItemStyle}
              {...register('nome', { required: true })}
            />
            <TextField
              label="Email"
              style={formItemStyle}
              {...register('email', { required: true })}
            />
            <TextField
              label="Senha"
              style={formItemStyle}
              {...register('senha', { required: true })}
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
