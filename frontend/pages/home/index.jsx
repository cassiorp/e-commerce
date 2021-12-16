import Template from '../../components/template';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const Home = () => {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  return (
   <Template>
     Home
     <Box>
      <Fab style={fabStyle} color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
   </Template>
  );
   
}

export default Home;