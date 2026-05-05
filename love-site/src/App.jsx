import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Story from "./pages/Story";
import Secret from "./pages/Secret";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/story" element={<Story />} />
        <Route path="/secret" element={<Secret />} />

      </Routes>
    </BrowserRouter>
  );
}