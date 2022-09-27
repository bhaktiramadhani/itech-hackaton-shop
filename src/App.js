import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedAuth from "./components/protected/ProtectedAuth";
import TambahMenuPage from "./pages/TambahMenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedAuth>
              <DashboardPage />
            </ProtectedAuth>
          }
        />
        <Route
          path="/dashboard/tambah"
          element={
            <ProtectedAuth>
              <TambahMenuPage />
            </ProtectedAuth>
          }
        />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
