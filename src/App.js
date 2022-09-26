import "./App.css";
import { useState } from "react";
import Header from "./Header";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <Header title="test" />
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
}

export default App;
