import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Client from "./pages/home/Client";
import Expiry from "./pages/home/Expiry";
import Profile from "./pages/home/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/client" element={<Client/>} />
          <Route path="/expiry" element={<Expiry/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/edit_profile" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
