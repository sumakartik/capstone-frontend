import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./calendar.css";

export default function OurCalendar() {
  const [value, onChange] = useState(new Date());

  return (
    <div className=".ourCalendar">

      <Calendar onChange={onChange} value={value} />
    </div>
  );
}