import { useState } from "react";

const NewReminder = () => {
  const [title, setTitle] = useState("");

  return (
    <form>
      <label htmlFor="title"></label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn btn-primary my-3 rounded-pill">
        Add Reminder
      </button>
    </form>
  );
};

export default NewReminder;
