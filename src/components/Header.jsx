import React, { useState } from "react";
import "../assets/styles/components/Header.css";
import Modal from "./Modal";

const Header = ({ handleSubmit }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");

  function handleTitle(e) {
    setTitle(e.target.value);
  }

  function sendData(e) {
    handleSubmit(title);
    e.preventDefault();
    setOpen(false);
    setTitle("");
  }

  return (
    <header className="Header">
      <div className="Header-wrapper">
        <h1 className="Header-title">To Do</h1>
        <button className="Header-button" onClick={() => setOpen(true)}>
          +
        </button>
        {open && (
          <Modal isOpen={open}>
            <button className="Modal-button" onClick={() => setOpen(false)}>
              x
            </button>

            <form className="Modal-form" onSubmit={sendData}>
              <h2 className="Form-title">Nuevo to do</h2>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitle}
                placeholder="Title"
                className="Modal-input"
                autoFocus
              />
              <button type="submit" className="Form-button">
                Agregar
              </button>
            </form>
          </Modal>
        )}
      </div>
    </header>
  );
};

export default Header;
