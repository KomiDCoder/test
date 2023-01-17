import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Farnoosh from "./pages/farnoosh";
import AllMovies from "./pages/allMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all",
    element: <AllMovies />,
  },
  {
    path: "/farnoosh",
    element: <Farnoosh />,
  },
  {
    path: "/aboutus",
    element: <ContactUs />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
