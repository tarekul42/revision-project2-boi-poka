import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Root from "./Components/Root/Root.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import BookDetail from "./Components/BookDetail/BookDetail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          {/* Default page when visiting "/" */}
          <Route index element={<Home />} />
          <Route path="books/:bookId" element={<BookDetail />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

        {/* Error Page (Shown for invalid routes) */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
