import React from "react";

import "./modal.css";

const modal = props => {
  return (
    <div
      className={`${props.show ? "" : "hide"} modal-wrapper`}
      style={{
        transform: props.show ? "translateY(0vh)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0"
      }}
    >
      <div className="modal-header">
        <h3>{props.header}</h3>
        <span className="close-modal-btn" onClick={props.close}>
          x
        </span>
      </div>
      <div className="modal-body">
        <span>{props.children}</span>
      </div>
      <div className="modal-footer">
        <button className="btn-cancel" onClick={props.close}>
          close
        </button>
        <button className="btn-continue">Play again</button>
      </div>
    </div>
  );
};

export default modal;
