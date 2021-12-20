import Template from '../../components/template';
import { Container, Form, ButtonContainer } from './styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Perfil = () => {
  const formItemStyle = {
    marginTop: '10px',
    width: '100%',
  };

  return (
    <Template>
      <Container>
        <Typography variant="h3" gutterBottom component="div" color={"#354545"}>
          Editar informações
        </Typography>
        <form>
          <Form elevation={3} width="1000px">
            <TextField label="Nome" style={formItemStyle} />
            <TextField label="Email" style={formItemStyle} />
            <TextField label="Nome" style={formItemStyle} />
            <ButtonContainer
              style={{
                backgroundColor: '#354545',
                height: '50px',
                marginTop: '10px',
              }}
              fullWidth
              variant="contained"
              type={'button'}
              onClick={() => alert('salvou')}
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
