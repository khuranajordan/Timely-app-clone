import logo from './logo.svg';
import './App.css';
// import Task from './component/Task/Task';
import Login from './Components/Login/Login';
import HomePage from './Components/Homepage/Homepage';

import { Routes, Route } from "react-router-dom";
import MainDashboard from './Components/MainDashboard/MainDashboard';
import Task from './Components/Task/Task';
import {Project} from './Components/Project/Project';

function App() {
  return (

    
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<MainDashboard/> } />
          <Route path="/task" element={<Task /> } />
          <Route path="/project" element={<Project/> } />
        </Routes>
        {/* <Login/> */}
      </div>
    
  );
}

export default App;

// <div className="App">
//   {/* <Task /> */}
//   <Login />
// </div>