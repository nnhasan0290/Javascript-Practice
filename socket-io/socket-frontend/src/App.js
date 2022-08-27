import './App.css';
import io from "socket.io-client";
import nanoid from "nanoid";
import {useState, useEffect} from "react";

const socket = io.connect("https://5000-nnhasan0290-javascriptp-u7413wnmdqn.ws-us63.gitpod.io")
function App() {
  const [message,setMessage] = useState("");
  const [chat, setChat] = useState([]);
  console.log(chat);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat",{message});
    setMessage("")
  }
  useEffect(() => {
    socket.on("chat",(payload) => {
      console.log("data");
      setChat([...chat,payload])
    })
  });
  return (
    <div className="App">
      <h1>Chat application</h1>
      <form onSubmit={sendChat} action="">
        <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" />
        <button type='submit'>submit</button>
      </form>
      {
        chat.map((payload) => {
          return(
            <p>{payload.message}</p>
          )
        })
      }
    </div>
  );
}

export default App;
