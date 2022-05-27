import React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import Basic from "../Form/Form";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid inherit",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
  "&:focus": {
    outline: "none",
  },
};

const CreatePostModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Basic onClose={handleClose} />
      </Box>
    </Modal>
  );
};

export default CreatePostModal;
