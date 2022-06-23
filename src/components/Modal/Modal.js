import React from "react";
import "./Modal.css";
import {
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaTwitter,
  FaRegCopy,
} from "react-icons/fa";

function Modal({ closeModal }) {
  return (
    <div className="modal_container" onClick={() => closeModal(false)}>
      <div className="modal">
        <h5> Share with friends</h5>
        <div className="icons_div">
          <FaFacebook />
          <FaGoogle />
          <FaLinkedinIn />
          <FaTwitter />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <p>Event url:</p>
            <FaRegCopy />
          </div>
          <p>https://www.google.com/zoom.us</p>
        </div>
      </div>
    </div>
  );
}

export default Modal;
