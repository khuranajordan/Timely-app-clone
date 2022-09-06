import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<Sidebar />}>

      </Route>
    </Routes>
  );
}

export default App;
