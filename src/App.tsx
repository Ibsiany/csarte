import React from "react";
import { Routes } from "./routes";
import { AuthContextProvider } from "./contexts/AuthContext";
import Global from "./styles/global";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
      <Global />
    </AuthContextProvider>
  );
}

export default App;
