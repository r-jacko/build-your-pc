import React from "react";
import { Box, Modal, Typography } from "@mui/material";

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

const ShareModal = ({isAlert, setIsAlert, alertMessages}) => {
  const handleCloseModal = () => {
    setIsAlert(false);
  };
  return (
      <Modal
        open={isAlert}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={testStyle}>
          <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom color="error"> 
            Form validation error
          </Typography>
          {alertMessages.map((alertMessage, index)=>(
            <Typography key={index}>{alertMessage}</Typography>
          ))}
        </Box>
      </Modal>
  );
};

export default ShareModal;
