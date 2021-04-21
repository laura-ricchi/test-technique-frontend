import React, { useState } from "react";
import "../assets/css/Common.css";
import "../assets/css/Modal.css";
import { Button, Container, Grid, Modal, TextField
} from "@material-ui/core";

// création d'une modal pour l'oubli du mot de passe (dans la page Login)
const ModalForgetPassword = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <Container style={{backgroundColor:"red"}}>
      <p style={{cursor:"pointer"}} onClick={handleOpenModal}>
        Mot de passe oublié ?
      </p>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal">
            <div className="modal-forget-password">
              <h3>Reset your password.</h3>
              <p>
              To reset your password we have to send you
                an email.
              </p>
              <p>Your email: </p>
              <div>
                <TextField
                  variant="outlined"
                  className="input-modal"
                  size="small"
                  autoFocus
                />
              </div>
              <div>
                <Button    onClick={() => {
         alert("Request sent ")
        }} variant="contained" type="submit" className="button">
                  Ok
                </Button>
              </div>
            </div>

        </div>
      </Modal>
    </Container>
  );
};

export default ModalForgetPassword;
