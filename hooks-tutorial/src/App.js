import { useState } from "react";
// import Counter from "./Counter";
import Counter from "./CounterReducer";
// import Info from "./Info";
// import Info from "./InfoReducer";
import Info from "./UseInfo";
import Average from "./Average";

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
      <hr />
      <Average />
    </div>
  );
}

export default App;
