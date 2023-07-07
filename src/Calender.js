import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
const events = [
    {
      title: 'Meeting 1',
      start: new Date(2023, 6, 10, 10, 0), // Year, Month (0-indexed), Day, Hour, Minute
      end: new Date(2023, 6, 10, 11, 30),
    },
    {
      title: 'Meeting 2',
      start: new Date(2023, 6, 12, 14, 0),
      end: new Date(2023, 6, 12, 15, 30),
    },
    // Add more events as needed
  ];
  const localizer = momentLocalizer(moment);
  const Schedule = () => {
    return (
      <div>
        <h6>Schedule</h6>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 300 }}
        />
      </div>
    );
  };
  
  export default Schedule;