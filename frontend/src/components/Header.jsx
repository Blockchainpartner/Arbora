import { AppBar, Toolbar, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Web3Button, Web3NetworkSwitch } from "@web3modal/react";
import CustomButton from "../components/CustomButton";
const Header = () => {
  

  return (
    <AppBar elevation={2} sx={{ backgroundColor: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} position="fixed">
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          mx: 2,
          justifyContent: 'space-between',
        }}
      >

       <Web3Button></Web3Button>
      <Web3NetworkSwitch></Web3NetworkSwitch>
      </Toolbar>
    
    </AppBar>
  );
};
export default Header;