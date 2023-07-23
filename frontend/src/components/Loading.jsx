import { Box } from '@mui/material';
import { ThreeCircles } from 'react-loader-spinner';

const Loading = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: ' 50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <ThreeCircles color="#00000" width="100" visible={true} />
    </Box>
  );
};
export default Loading;