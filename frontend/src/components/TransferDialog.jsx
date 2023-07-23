import React from 'react';
import { Modal, Box, DialogActions, Button, DialogTitle,DialogContentText,TextField,DialogContent  } from '@mui/material';

const boxStyle = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: 2,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 1,
};
const TransferDialog = ({ open, handleClose ,handleSenfNFT}) => {

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="Dialog-Doc-Delete">
      <Box sx={boxStyle}>
        <DialogTitle sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize' }}>Transfer this NFT ?</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Type the address of te person you want to transfer the NFTs to .
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Address"

            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary"> Cancel </Button>
          <Button
            onClick={(e) => {
              handleClose();
              handleSenfNFT();
            }}
            color="secondary"
          >
           Send
          </Button>
        </DialogActions>
      </Box>
    </Modal>
  );
};

export default TransferDialog;