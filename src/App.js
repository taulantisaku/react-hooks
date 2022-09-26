import { useState } from "react";
import "./App.css";
import ClassCounter from "./ClassCounter";
import FunctionCounter from "./FunctionCounter";
import Quantity from "./Quantity";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "taulant" },
    { id: 2, name: "user2" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    formData: {
      email: "",
      password: "",
    },
  });

  // const [formData, setFormData] = useState({
  //   email:"",
  //   password: ""
  // })

  const handleDeleteUser = (id) => {
    console.log("id", id);
    setUsers(users.filter((user) => user.id !== id));

    // setUsers(
    //   users.filter((user) => {
    //     if (user.id !== id) {
    //       return user;
    //     }
    //   })
    // );
  };

  const handleOnChange = (event) => {
    setState({
      ...state.formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateUser = (id) => {
    // const newUsers = users.map((user) => {
    //   if (user.id === id) {
    //     return { ...user, name: "name changed" };
    //   }
    //   return user;
    // });
    // setUsers(newUsers);

    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, name: "name changed" };
        }
        return user;
      })
    );
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <pre>useState</pre>

      <button onClick={handleToggle}>
        {isOpen ? "Hide input" : "Show input"}
      </button>
      {isOpen && <input type="text" name="email" onChange={handleOnChange} />}

      <div>
        <ClassCounter />
        <FunctionCounter />
        <Quantity/>
      </div>

      <div>
        <h1>useState Array</h1>
        {users.map((user) => (
          <div key={user.id}>
            <strong>{user.name}</strong>
            <button onClick={() => handleDeleteUser(user.id)}>X</button>
            <button onClick={() => handleUpdateUser(user.id)}>update</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

//useState
//useEffect
//useRef
//useMemo
