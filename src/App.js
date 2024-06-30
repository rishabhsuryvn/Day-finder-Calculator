import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [date, setDate] = useState()
  const [day, setDay]= useState()

  const findDay = (event) => {
    event.preventDefault();
    const inputDate = new Date(date);
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    const dayOfWeek = daysOfWeek[inputDate.getDay()];
    setDay(dayOfWeek);
  };

  return (
     <div className="App">
      <header className="App-header">
        <h1>Day Finder Calculator</h1>
        <form onSubmit={findDay}>
          <label>
            Select a date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <button type="submit">Find Day</button>
        </form>
        {day && (
          <p>
            The day of the week for {date} is <strong>{day}</strong>.
          </p>
        )}
      </header>
    </div>
  );
}

export default App;
