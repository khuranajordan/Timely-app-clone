import { Route, Routes } from "react-router-dom";


import "./App.css";
import MainDashboard from "./pages/MainDashboard/MainDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainDashboard />} />
    </Routes>
  );
}

export default App;
