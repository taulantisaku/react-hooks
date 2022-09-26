import { useEffect, useState } from "react";
import "./App.css";
import WindowWidth from "./WindowWidth";

function App() {
  const [show, setShow] = useState();
  useEffect(() => {
    // console.log("useEffect");
  }, [show]);

  return (
    <div className="App">
      {/* <button onClick={() => setShow(!show)}>Toggle Show</button> */}
      <button onClick={() => setShow(!show)}>
        Toggle window width component
      </button>

      {show ? <WindowWidth /> : ""}
    </div>
  );
}

export default App;

//componentdidmount
//componentdidupdate
//componentwillunmount
