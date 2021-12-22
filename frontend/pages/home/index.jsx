import { useEffect, useState } from 'react';
import Template from '../../components/template';
import Fab from '../../components/fab';
import Card from '../../components/card/index';
import { Container } from './styles';
import Typography from '@mui/material/Typography';
import redirect from 'nextjs-redirect';
import React from 'react';
import { useSelector } from 'react-redux';
import DialogPopUp from '../../components/form-product-pop-up';

const Home = () => {
  const Redirect = redirect('http://localhost:3000/login');
  const login = useSelector((state) => state?.logged);
  const productsFromUser = useSelector((state) => state?.productsFromUser);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [openPopUpUpdate, setOpenPopUpUpdate] = useState(false);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (!productsFromUser) return;
    setProducts(productsFromUser);
  }, [productsFromUser]);

  const closePopUp = () => {
    setOpenPopUp(false);
  };
  const closePopUpUpdate = () => {
    setOpenPopUpUpdate(false);
  };

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
                <Card
                  product={product}
                  onClick={() => {
                    setOpenPopUpUpdate(true);
                    setProduct(product);
                  }}
                />
              </>
            ))}
          </Container>
          <Fab onClick={() => setOpenPopUp(true)} />
          <DialogPopUp
            title={`Cadastro de produto`}
            openPopup={openPopUp}
            onClose={closePopUp}
            type={'create'}
          />
          {openPopUpUpdate && (
            <DialogPopUp
              title={`Editar produto`}
              openPopup={openPopUpUpdate}
              onClose={closePopUpUpdate}
              type={'update'}
              product={product}
            />
          )}
        </Template>
      )}
    </>
  );
};

export default Home;
