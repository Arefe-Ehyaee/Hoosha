import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Mainpage from "./components/Mainpage";
import WhyHoosha from "./components/Pages/whyHoosha";
import AboutHoosha from "./components/Pages/AboutHoosha";
import AboutUs from "./components/Pages/AboutUs";


export default function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/why-hoosha" element={<WhyHoosha />} />
            <Route path="/aboutHoosha" element={<AboutHoosha />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

