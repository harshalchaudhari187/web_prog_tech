import React, { useState } from "react";

const AddEventComponent = ({ addEvent }) => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({ ...prevEvent, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEvent(event);
    setEvent({
      title: "",
      description: "",
      dueDate: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Event Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={event.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={event.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due Date
          </label>
          <input
            type="date"
            className="form-control"
            id="dueDate"
            name="dueDate"
            value={event.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEventComponent;
