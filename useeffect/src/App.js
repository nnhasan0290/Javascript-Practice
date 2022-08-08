import { createContext, useState } from "react";
import "./App.css";
import First from "./components/First";
import Third from "./components/Third";

export const UserContext = createContext("hasan");

function App() {
  const[user, setUser] = useState({name: "nazmul"});
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <First />
        <Third />
      </UserContext.Provider>
      <button onClick={() => setUser({name: "hasan"})}>btn</button>
    </div>
  );
}

export default App;
