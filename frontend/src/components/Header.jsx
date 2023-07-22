import { AppBar, Toolbar, Typography } from '@mui/material';
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import Image from 'next/image'
import {Box} from '@mui/material';
import CustomButton from "../components/CustomButton";
const Header = () => {
  

  return (
    <AppBar elevation={2} sx={{ backgroundColor: 'white',position:'fixed' }} >
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mx: 2,
          justifyContent: 'space-between',
        }}
      >
        <Box   sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mx: 2,
        }}>
<Image src="/full_logo.png" alt="LOGO" width="224" height="69" />
<Typography> COLLECTIONS</Typography>
</Box>
<Box  sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mx: 2,
        }}>
 <Box>
      <Web3NetworkSwitch></Web3NetworkSwitch></Box>
      <Box sx={{mx:2}}>  <Web3Button></Web3Button></Box>
      </Box>
      </Toolbar>
    
    </AppBar>
  );
};
export default Header;