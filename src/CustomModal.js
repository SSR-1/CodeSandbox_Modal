import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    position: "relative",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2)
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2)
  },
  content: {
    marginBottom: theme.spacing(2)
  },
  footer: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

const CustomModal = ({ isOpen, onClose, onSubmit, children }) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen} onClose={onClose} className={classes.modal}>
      <Paper className={classes.paper}>
        <div className={classes.header}>
          <Typography variant="h7">
            Let's create a new user for Texas Chicken
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.content}>{children}</div>
        <div className={classes.footer}>
          <button onClick={onSubmit}>Submit</button>
          <button onClick={onClose}>Close</button>
        </div>
      </Paper>
    </Modal>
  );
};

CustomModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export default CustomModal;
