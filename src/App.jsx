import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profilepage from "./pages/Profilepage";
import Signup from "./pages/Signup";
import Loginpage from "./pages/Loginpage";
import Welcomepage from "./pages/Welcomepage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Routes>
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profilepage />} />
          <Route path="/" element={<Welcomepage />} />
        </Routes>
      </div>
    </Router>
  );
}
