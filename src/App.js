import "./styles.css";
import Footer from "./Components/Footer/Footer1";
import HomePage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </ChakraProvider>
  );
}
