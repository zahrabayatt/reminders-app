import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item.id} className="list-group-item">
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default ReminderList;
