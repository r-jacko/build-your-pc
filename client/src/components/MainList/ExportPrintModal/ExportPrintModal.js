import React, {useState} from 'react';
import { Box, Button, Typography, Modal } from '@mui/material';

const testStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ExportPrintModal = ({mode}) => {
  const [openModal, setOpenModal] = useState(false)
  const handleCloseModal = ()=> setOpenModal(false)
  const handleOpenModal = ()=> setOpenModal(true)
  return ( 
    <>
    <Button variant="outlined" disabled={mode} onClick={handleOpenModal}>EXPORT/PRINT</Button>
    <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title">
      <Box sx={testStyle}>
      <Typography id="modal-modal-title" variant='h6' component="h2">Choose an option</Typography>
      <Button>PRINT</Button>
      <Button>DOWNLOAD PDF</Button>
      </Box>
    </Modal>
    </>
   );
}
 
export default ExportPrintModal;