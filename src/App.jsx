import React from "react";
import { Route, Routes } from "react-router-dom";
import Table from "./Table";
import Item from "./Item";
import EmployeeContextProvider from "../contexts/EmployeeContext";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Table />} />
      <Route path="/item" element={<Item />} />
    </Routes>
  );
}

export default App;
