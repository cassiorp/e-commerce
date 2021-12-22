import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CardComponent = ({ product, onClick }) => {
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
        <Button onClick={onClick} size="small">
          Editar
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
