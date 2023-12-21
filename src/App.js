import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import HomePage from "./Pages/HomePage";
import ErrorPage from "./Pages/ErrorPage";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import CarsPage from "./Pages/CarsPage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
