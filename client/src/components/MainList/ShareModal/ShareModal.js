import React, { useState } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { CopyToClipboard } from "react-copy-to-clipboard";

const testStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ShareModal = ({ mode }) => {
  const [openModal, setOpenModal] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);
  const handleCloseModal = () => {
    setCopyStatus(false);
    setOpenModal(false);
  };
  const handleOpenModal = () => setOpenModal(true);
  return (
    <>
      <Button onClick={handleOpenModal} variant="outlined" disabled={mode}>
        SHARE
      </Button>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={testStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share link
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Here is your link: LINK LINK LINK.
          </Typography>
          <CopyToClipboard
            text={"LINK LINK LINK"}
            onCopy={() => setCopyStatus(true)}
          >
            <Button variant={!copyStatus? 'outlined': 'contained'} color={!copyStatus? 'primary': 'success'}>
              {!copyStatus? 'COPY' : 'COPIED'}
              </Button>
          </CopyToClipboard>
        </Box>
      </Modal>
    </>
  );
};

export default ShareModal;
