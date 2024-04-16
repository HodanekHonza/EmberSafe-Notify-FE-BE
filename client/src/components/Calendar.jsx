import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({ setDateState }) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    const modifiedDate = new Date(startDate);
    modifiedDate.setHours(2, 0, 0, 0); // Set time to start of day

    setDateState(modifiedDate.toISOString());
  }, [startDate, setDateState]);

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}
