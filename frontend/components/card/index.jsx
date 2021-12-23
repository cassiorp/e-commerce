import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({ product, onClick }) => {
  const cardStyle = {
    width: 300,
    height: 320,
    margin: 'auto',
  };

  const imageDivStyle = {
    width: '100%',
    height: '50%',
    padding: '5px',
    borderBottom: 'solid 0.1px #00FFFF',
  };

  return (
    <Card style={cardStyle}>
      <div style={imageDivStyle}>
        <CardMedia
          component="img"
          image={product?.urlImage}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap={true}>
          {product?.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`R$${product?.price}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={onClick} size="small">
          Editar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
