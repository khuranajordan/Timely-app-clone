import logo from './logo.svg';
import './App.css';
// import Task from './component/Task/Task';
import Login from './Components/Login/Login';
import HomePage from './Components/Homepage/Homepage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (

    
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
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