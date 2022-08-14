import type { NextPage } from 'next';
import styled from 'styled-components';
import CalendarComponent from '../../components/Calendar/CalendarComponent/CalendarComponent';

const CalendarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Calendar: NextPage = () => {
  return (
    <CalendarContainer>
      <CalendarComponent />
    </CalendarContainer>
  );
};

export default Calendar;
