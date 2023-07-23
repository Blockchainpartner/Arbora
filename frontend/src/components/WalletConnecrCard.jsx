import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';
const WalletConnectCard = () => {
  return (
    <Box
      display="flex"
      justifyContent="right"
      alignItems="center"
      minHeight="100vh"
      mr={20}
    >
      <Card>
        <CardContent>
            <Box sx={{m:4}}>
  
          <Typography sx={{mb:4}} textAlign="center" variant="h6" component="div">
            Please connect your wallet
          </Typography>
          <WalletIcon fontSize="medium"color="primary"></WalletIcon>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WalletConnectCard;
