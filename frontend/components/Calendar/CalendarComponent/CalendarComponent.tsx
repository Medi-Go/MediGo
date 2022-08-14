import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import CalendarHeader from '../CalendarHeader/CalendarHeader';

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
  margin-top: 20px;
`;

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);
  return (
    <CalendarContainer>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date) => setSelectedDate(date)}
        inline
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <CalendarHeader
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
      />
    </CalendarContainer>
  );
};

export default CalendarComponent;
