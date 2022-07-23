import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";
import PublicRoutes from "./components/publicRoutes";
import BookBikes from "./pages/BookBikes";
import BookBus from "./pages/BookBus";
import BookTruck from "./pages/BookTruck";
import InterstateDispatch from "./pages/InterstateDispatch";

function App() {
  const { loading } = useSelector((state) => state.alerts);
  return (
    <BrowserRouter>
      {loading && (
        <div className="spinner-parent">
          <div className="spinner-border" role="status"></div>
        </div>
      )}

      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-bikes"
          element={
            <ProtectedRoute>
              <BookBikes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-bus"
          element={
            <ProtectedRoute>
              <BookBus />
            </ProtectedRoute>
          }
        />
        <Route
          path="/book-truck"
          element={
            <ProtectedRoute>
              <BookTruck />
            </ProtectedRoute>
          }
        />
        <Route
          path="/interstate-dispatch"
          element={
            <ProtectedRoute>
              <InterstateDispatch />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoutes>
              <Register />
            </PublicRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
