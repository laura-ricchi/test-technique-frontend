import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import "../App.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

// création d'une modal pour l'oubli du mot de passe (dans la page Login)
const ModalForgetPassword = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleCloseModal = () => {
    setOpen(false);
  };

  const ButtonModal = styled(Button)({
    background: "linear-gradient(45deg, #4183d7 30%, #44b0ea 90%)",
    border: 0,
    borderRadius: 10,
    boxShadow: "0 3px 5px 2px rgba(65, 131, 215, .3)",
    color: "white",
    width: 150,
    height: 44,
    margin: "25px",
  });
  return (
    <Grid>
      <i className="account" onClick={handleOpenModal}>
        Mot de passe oublié ?
      </i>
      <Modal
        open={open}
        onClose={handleCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal">
          <div className="modal-login">
            <div className="modal-forget-password">
              <h3>Réinitialiser votre mot de passe.</h3>
              <p>
                Pour réinitialiser votre mot de passe, nous devons vous envoyer
                un e-mail.
              </p>
              <p>Votre adresse mail</p>
              <div>
                <TextField
                  variant="outlined"
                  className="input-modal"
                  size="small"
                  autoFocus
                />
              </div>
              <div>
                <ButtonModal variant="contained" type="submit">
                  Valider
                </ButtonModal>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Grid>
  );
};

export default ModalForgetPassword;
