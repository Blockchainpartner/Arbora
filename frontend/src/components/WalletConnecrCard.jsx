import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const WalletConnectCard = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Card>
        <CardContent>
            <Box sx={{m:4}}>
        <Typography   textAlign="center"  variant="h2" component="div">
            
            Welcome to Arbora 
          </Typography>
          <Typography textAlign="center" variant="h6" component="div">

            Please connect your wallet
          </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WalletConnectCard;
