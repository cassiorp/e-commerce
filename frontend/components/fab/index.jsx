import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const FabButton = (props) => {
  const fabStyle = {
    position: 'absolute',
    bottom: 16,
    right: 16,
  };
  return (
    <Box>
      <Fab onClick={props.onClick} style={fabStyle} color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default FabButton;
