import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router";

import Layout from "../routes/Layout";
import Home from "../routes/Home";

const App: FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
