import React from "react";

import "./modal.css";

const modal = ({ handleClose, show, children, modalTitle }) => {
  const showHideModal = show ? "display-modal" : "hide";

  return (
    <div className={showHideModal}>
      <div className="modal-main">
        <section className="modal-header">
          <span class="close">&times;</span>
        </section>
        <section className="modal-body">
          <h3>{modalTitle}</h3>
          <span>{children}</span>
        </section>
        <section className="modal-footer">
          <button className="btn-continue">New Game</button>
          <button className="btn-close" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    </div>
  );
};

export default modal;
