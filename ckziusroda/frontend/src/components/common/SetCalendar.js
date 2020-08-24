import React, { useState } from "react";
import Calendar from "react-calendar";

const SetCalendar = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => setDate(date);

  return <Calendar onChange={onChange} value={date} locale="pl" />;
};

export default SetCalendar;
