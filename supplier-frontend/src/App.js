import Signup from "./pages/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
