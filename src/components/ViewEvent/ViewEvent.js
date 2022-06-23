import React from "react";
import "./ViewEvent.css";
import Avatar from "react-avatar";
import UploadIcon from "../UploadIcon/UploadIcon";
import Modal from "../Modal/Modal";

function ViewEvent() {
  const [modal, setModal] = React.useState(false);

  const showModal = () => {
    setModal(true);
  };

  return (
    <div className="main_container">
      {modal && <Modal closeModal={setModal} />}
      <UploadIcon
        styles={{ position: "absolute", left: "50px", top: "150px" }}
      />
      <div className="gradient">
        <img
          src="images\logo.png"
          alt="logo..."
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="image_container">
        <img src="images\gathering.jpg" alt="..." />
      </div>
      <div className="bottom_container">
        <div>
          <h2>Featured Event</h2>
          <h3>Event Title</h3>
          <pre>{`24 May 2021       09:00 AM - 05:00 PM`}</pre>
        </div>
        <div style={{ minWidth: "300px" }}>
          <h4>LOCATION ADDRESS</h4>
          <h6>1498 Twin Oaks Drive, Orlando</h6>
        </div>
        <div className="details_div">
          {" "}
          <h4 style={{ marginRight: "15px" }}>DETAILS</h4>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa.
          </p>
        </div>
        <button onClick={showModal}>Attend</button>
        {/* <div className="avatar_container">
          <Avatar
            className="avatar"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            size="70"
            round={true}
          />
          <Avatar
            className="avatar"
            src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7sdcTt6c_aTwb7Sb9oWQDiWia7kCtfVfBTw&usqp=CAU"
            size="70"
            round={true}
          />
          <Avatar
            className="avatar"
            src="data:image/jpeg;base64,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"
            size="70"
            round={true}
          />
        </div> */}
      </div>
    </div>
  );
}

export default ViewEvent;
