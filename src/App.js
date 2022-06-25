import * as React from "react";
import { Home } from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { HowItWorks } from './Components/How_It_Works/How_it_works';
function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-work" element={<HowItWorks />} />
        </Routes>
      </>
  );
}

export default App;
