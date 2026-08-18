import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderSuccess from "./components/OrderSuccess";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import HiddenPage from "./pages/HiddenPage";

function App() {

  // instance id to help detect remounts/rerenders
  const instanceId = String(Math.random()).slice(2, 8);
  console.log(`App render - instance ${instanceId}`);
  return (
    <>
      <Navbar />

      <Routes>
  <Route path="/" element={<Home />} />

  <Route path="/shop" element={<Shop />} />

  <Route path="/login" element={<Login />} />

  <Route path="/signup" element={<Signup />} />

  <Route
    path="/cart"
    element={
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    }
  />


  <Route
    path="/checkout"
    element={
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    }
  />

  <Route
  path="/order-success/:orderId"
  element={
    <ProtectedRoute>
      <OrderSuccess />
    </ProtectedRoute>
  }
/>
</Routes>
    </>
  );
}

export default App;