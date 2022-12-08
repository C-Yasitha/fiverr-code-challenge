import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/appLayout";
import Create from "./components/create";

function App() {
  return (
    <AppLayout>
        <Routes>
          <Route path="/" element={<Create />} />
        </Routes>
    </AppLayout>
  );
}

export default App;