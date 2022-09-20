import React from "react";
import { Route, Routes } from "react-router-dom";

import { Project } from "./project/project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
