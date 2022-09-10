import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import {Project} from "./Components/Project/Project"
import {Task} from "./Components/TopBar/topbar"

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="" element={[<Sidebar />, <Task/>, <Project />]}></Route>
    </Routes>
  );
}

export default App;
