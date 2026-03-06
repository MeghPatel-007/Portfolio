import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import ScrollToHash from "./components/common/scrolltohash.jsx";
import {lazy} from "react";

const Editing = lazy(() => import("./pages/editing.jsx"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit" element={<Editing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;