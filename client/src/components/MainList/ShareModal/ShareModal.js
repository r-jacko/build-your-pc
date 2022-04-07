import React, {useState} from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';

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
}

const ShareModal = ({mode}) => {
  const [openModal, setOpenModal] = useState(false)
  const handleCloseModal = ()=> setOpenModal(false)
  const handleOpenModal = ()=> setOpenModal(true)
  return ( 
    <>
    <Button onClick={handleOpenModal} variant="outlined" disabled={mode}>SHARE</Button>
    <Modal open={openModal} onClose={handleCloseModal} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={testStyle}>
        <Typography id="modal-modal-title" variant='h6' component="h2">
          Share link
        </Typography>
        <Typography id="modal-modal-description" sx={{mt:2}}>
          Here is your link: LINK LINK LINK. You can save this to see your setup on other device or share it to your friend.
        </Typography>
      </Box>
    </Modal>
    </>
   );
}
 
export default ShareModal;