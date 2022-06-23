import React from "react";
import "./ListOfEvents.css";
import { FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";
import EventCard from "../EventCard/EventCard";

const LIST_OF_EVENTS = [
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    title: "Quisque quis dignissim mauris",
    date: "24 May 2021",
    time: "09:00 AM - 05:00 PM",
    image:
      "https://images.unsplash.com/photo-1610070835951-156b6921281d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

function ListOfEvents({ setEvent }) {
  const [search, setSearch] = React.useState("");

  const handleClear = () => {
    setSearch("");
  };

  const handleClick = (e) => {
    setEvent(e);
  };

  return (
    <div>
      <div className="top_container">
        <h5> Create Fellowship Opportunities In Your Local Community</h5>
        <div className="search_box">
          <FiSearch color={"#91B5FB"} size={24} />
          <input
            type="text"
            placeholder="Search Events by Location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <MdClear size={24} onClick={handleClear} />
        </div>
      </div>
      <div className="cards_div">
        {LIST_OF_EVENTS.map((event) => {
          return <EventCard onClick={() => handleClick(event)} event={event} />;
        })}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button> View More</button>
      </div>
    </div>
  );
}

export default ListOfEvents;
