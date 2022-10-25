import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedAuth from "./components/protected/ProtectedAuth";
import TambahMenuPage from "./pages/TambahMenuPage";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../src/config/firebase-config";
import DetailPage from "./pages/DetailPage";
import { onAuthStateChanged } from "firebase/auth";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  // cart
  const [cartItem, setCartItem] = useState([]);
  const onAdd = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  // auth
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

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

        <Route
          path="/login"
          element={user ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/product/:nama"
          element={
            <DetailPage products={products} onAdd={onAdd} cartItem={cartItem} />
          }
        />
        <Route
          path="/checkout"
          element={<CheckOutPage cartItem={cartItem} />}
        />
        <Route path="*" element={<p>404 page</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
