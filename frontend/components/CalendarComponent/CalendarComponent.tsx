import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  useEffect(() => {
    console.log(startDate);
  }, [startDate]);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      inline
    />
  );
};

export default CalendarComponent;
