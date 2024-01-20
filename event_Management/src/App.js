import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import AddEventComponent from "./components/AddEventComponent";
import EventListComponent from "./components/EventListComponent";

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };
  return (
    <div className="App">
      <AddEventComponent addEvent={addEvent} />
      <EventListComponent events={events} />
    </div>
  );
}

export default App;
