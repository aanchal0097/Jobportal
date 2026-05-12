import Navbar from "./components/navbar";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Jobs from "./pages/jobs";
import JobDetails from "./pages/jobDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <ToastContainer />

    </div>
  );
}

export default App;