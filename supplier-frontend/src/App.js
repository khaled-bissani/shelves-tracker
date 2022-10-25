import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Chat from "./pages/home/Chat";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
