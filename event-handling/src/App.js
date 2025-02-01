import './App.css';
import EventPractice from './EventPractice';
import { default as EventPracticeFunction } from './EventPracticeFunction';

function App() {
  return (
    <div>
      <div>
        <EventPractice />
      </div>
      <div>
        <EventPracticeFunction />
      </div>
    </div>
  );
}

export default App;
