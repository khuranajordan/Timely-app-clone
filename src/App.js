import "./styles.css";
import Footer from "./Components/Footer/Footer1";
import HomePage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <HomePage />
        <br />
        <br />
        <Footer />
      </div>
    </ChakraProvider>
  );
}
