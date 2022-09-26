import { useState, useRef } from "react";
import Animation from "./Animation";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const inputRef = useRef(null);
  // console.log(inputRef);
  return (
    <div className="App">
      <h1>{value}</h1>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <hr />
      <Animation />
    </div>
  );
}

export default App;
