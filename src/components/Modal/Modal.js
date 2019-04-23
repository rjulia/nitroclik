import React from 'react';
import './Modal.scss';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #FFA59E;
  border-radius: none;
  border: none;
`
const Modal = ({ handleClose, show, children, otherClass }) => {

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={`${showHideClassName} ${otherClass}`}>
      <section className="modal-main">
        {children}
        <Button onClick={handleClose}>close</Button>
      </section>
    </div>
  );
};

export default Modal