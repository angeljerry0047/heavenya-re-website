import React from "react";
import "./EventCard.css";
import UploadIcon from "../UploadIcon/UploadIcon";

export default function EventCard({ event, onClick }) {
  return (
    <div className="card_container" onClick={onClick}>
      <UploadIcon
        styles={{
          position: "absolute",
          top: "10px",
          left: "20px",
          width: "40px",
          height: "40px",
          borderRadius: "20px",
        }}
        iconSize={24}
      />
      <img className="image_div" src={event.image} alt="image..." />
      <h3 id="title">{event.title}</h3>
      <div className="details_container">
        <pre>{event.date}</pre>
        <pre>{event.time}</pre>
      </div>
    </div>
  );
}
