import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import ProtectedRoute from "./components/protectedRoute";
import BookBikes from "./pages/BookBikes";
import BookBus from "./pages/BookBus";
import BookTruck from "./pages/BookTruck";
import InterstateDispatch from "./pages/InterstateDispatch";
import Notifications from "./pages/Notifications";
import UsersList from "./pages/Admin/UsersList";
import BookingsList from "./pages/Admin/BookingsList";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import { Error } from "./pages";
import SharedLayout from "./pages/SharedLayout";

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
          path="/admin/users"
          element={
            <ProtectedRoute>
              <UsersList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/bookings"
          element={
            <ProtectedRoute>
              <BookingsList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <Notifications />
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
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/smilga"
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
