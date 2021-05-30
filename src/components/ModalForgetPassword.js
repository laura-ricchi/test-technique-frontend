import React, { useState } from "react";
import "../assets/css/Common.css";
import "../assets/css/Modal.css";
import { Button, Container, Modal, TextField } from "@material-ui/core";

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
    <Container>
      <p style={{ cursor: "pointer" }} onClick={handleOpenModal}>
        Forget your password ?
      </p>
      <Modal
        open={open}
        onClose={handleCloseModal}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-labelledby="contained-modal-title-vcenter"
        aria-describedby="simple-modal-description"
      >
        <div
          className="modal"
          style={{ height: "15rem", backgroundColor: "#FFF", padding: "2rem" }}
        >
          <div className="modal-forget-password">
            <h3>Reset your password.</h3>
            <p>To reset your password we have to send you an email.</p>
            <div className="modal-forget-field">
              <TextField
              style={{textAlignLast:"left"}}
                variant="outlined"
                className="input-modal"
                size="small"
                type="email"
                placeholder="youremail@email.com"
                autoFocus
              />
            </div>
            <div>
              <Button
                onClick={() => {
                  alert("Request sent ");
                }}
                variant="contained"
                type="submit"
                className="button"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default ModalForgetPassword;
