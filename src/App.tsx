import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ChatPage from "./components/ChatPage";
import io from "socket.io-client";
import "./App.css";

const socket = io("https://ranjan-socketio.herokuapp.com");
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          {/* <Route path="/chat" element={<ChatPage socket={socket} />}></Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
