import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import Todos from "../components/Todos";

function App() {
  return (
    <>
      <CssBaseline />
      <h1>Todos</h1>
      <Todos />
    </>
  );
}

export default App;
