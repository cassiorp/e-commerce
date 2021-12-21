import Template from '../../components/template';
import Fab from '../../components/fab';
import Card from '../../components/card/index';
import { Container } from './styles';
import Typography from '@mui/material/Typography';
import redirect from 'nextjs-redirect';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const Redirect = redirect('http://localhost:3000/login');
  const login = useSelector((state) => state?.logged);
  const products = useSelector((state) => state?.productsFromUser);

  return (
    <>
      {!login ? (
        <Redirect>
          <div>Logout...</div>
        </Redirect>
      ) : (
        <Template>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            color={'#354545'}
            style={{ margin: '10px' }}
          >
            Meus Produtos
          </Typography>
          <Container>
            {products?.map((product) => (
              <>
                <Card product={product} />
              </>
            ))}
          </Container>
          <Fab onClick={() => alert('fab clicado')} />
        </Template>
      )}
    </>
  );
};

export default Home;
