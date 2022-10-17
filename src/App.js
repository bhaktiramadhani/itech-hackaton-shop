import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedAuth from "./components/protected/ProtectedAuth";
import TambahMenuPage from "./pages/TambahMenuPage";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/config/firebase-config";

function App() {
  // get data from firebase
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const productsCollectionRef = collection(db, "products");
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedAuth>
              <DashboardPage products={products} />
            </ProtectedAuth>
          }
        />

        <Route
          path="/dashboard/tambah"
          element={
            <ProtectedAuth>
              <TambahMenuPage products={products} />
            </ProtectedAuth>
          }
        />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
