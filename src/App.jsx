import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Home from "./pages/home.jsx";
import ScrollToHash from "./components/common/scrolltohash.jsx";

const Editing = lazy(() => import("./pages/editing.jsx"));

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <Suspense fallback={<div className="bg-black h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Editing />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;