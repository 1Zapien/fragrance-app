import Modal from "react-modal";
import { useState } from "react";
import classes from "./Account.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

function Account(props) {
  const [modalIsOpen, setIsOpen] = useState(false);
  let userName = localStorage.getItem("userName");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleDelete(event) {
    event.preventDefault();
    closeModal();
    console.log("You deleted account");
  }

  return (
    <div className={classes.account}>
      <h1>Hello, {userName}</h1>
      <button className={classes.delete_button_secondary} onClick={openModal}>
        Delete Account
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Delete Your Account</h2>
        <p className={classes.modal_text}>
          We're sorry to see you go. Account deletion is final. There will be no
          way to restore your account.
        </p>
        <button className={classes.delete_button_primary} onClick={closeModal}>
          Cancel
        </button>
        <button
          className={classes.delete_button_secondary}
          onClick={handleDelete}
        >
          Delete Account
        </button>
      </Modal>
    </div>
  );
}

export default Account;
