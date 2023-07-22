import React from 'react';
import { Modal, Box, DialogActions, Button, DialogTitle } from '@mui/material';

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
const MergeDialog = ({ open, handleClose ,handleMergeNFT}) => {

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="Dialog-Doc-Delete">
      <Box sx={boxStyle}>
        <DialogTitle sx={{ fontWeight: 'bold', fontSize: 'h6.fontSize' }}>Do you want to merge these NFTs</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
          <Button
            onClick={(e) => {
              handleClose();
              handleMergeNFT();
            }}
            color="secondary"
          >
           Merge
          </Button>
        </DialogActions>
      </Box>
    </Modal>
  );
};

export default MergeDialog;