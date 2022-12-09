import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/appLayout";
import Create from "./components/create";
import Update from "./components/update";

function App() {
  return (
    <AppLayout>
        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
    </AppLayout>
  );
}

export default App;
