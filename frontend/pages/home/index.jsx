import Template from '../../components/template';
import Fab from '../../components/fab';

import { Container } from './styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import redirect from 'nextjs-redirect';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const Redirect = redirect('http://localhost:3000/login');
  const login = useSelector((state) => state?.logged);

  return (
    <>
      {!login ? (
        <Redirect>
          <div>Logout...</div>
        </Redirect>
      ) : (
        <Template>
          <Container>
            home
            <Fab onClick={() => alert('fab clicado')} />
          </Container>
        </Template>
      )}
    </>
  );
};

export default Home;
