import * as React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import AESHashing from "./aes";
import HashingAlgo from "./hash";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HashingAlgo />} />
        <Route path="/aes" element={<AESHashing />} />
      </Routes>
    </div>
  );
};

export default App;
