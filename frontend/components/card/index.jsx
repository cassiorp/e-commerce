import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { buyAction } from '../../sagas/actions/user';

const CardComponent = ({ product, onClick }) => {
  const user = useSelector((state) => state?.id);
  const dispatch = useDispatch();

  const onClickBuyOrEdit = () => {
    if (user === product?.userId) {
      return onClick();
    }
    const purchase = {
      productId: product?.id,
      userId: user,
    };
    return dispatch(buyAction(purchase));
  };

  return (
    <Card sx={{ maxWidth: 300 }} style={{ height: 400 }}>
      <CardMedia component="img" image={product?.urlImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClickBuyOrEdit} size="small">
          {user === product?.userId ? 'Editar' : 'Comprar'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
