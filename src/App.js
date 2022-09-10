import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Invoice from "./Components/Sidebar/Invoice";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="" element={<Sidebar />}>
        

      </Route>
      <Route path="/invoice" element={<Invoice />}></Route>
    </Routes>
  );
}

export default App;
