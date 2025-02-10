import { useState } from "react";
// import Counter from "./Counter";
import Counter from "./CounterReducer";
import Info from "./Info";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Counter />
      <hr/>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? 'Hide' : 'Display'}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}

export default App;
