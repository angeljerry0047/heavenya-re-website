import React from "react";
import Footer from "../../components/Footer/Footer";
import HeaderEvent from "../../components/HeaderEvent/HeaderEvent";
import ListOfEvents from "../../components/ListOfEvents/ListOfEvents";
import ViewEvent from "../../components/ViewEvent/ViewEvent";

function Home() {
  const [event, setEvent] = React.useState(null);

  let screen;
  if (event) {
    screen = <ViewEvent />;
  } else {
    screen = (
      <>
        <HeaderEvent />
        <ListOfEvents setEvent={setEvent} />
      </>
    );
  }
  return (
    <div>
      {screen}
      <Footer />
    </div>
  );
}

export default Home;
