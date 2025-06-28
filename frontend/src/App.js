import Home from "./components/Home";
import History from "./components/History";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
 


  return (
    <Router>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
    </Routes>
    </Router>
  );
}

export default App;

