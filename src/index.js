import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider } from "react-router-dom";
import App from './App'
import Home from './pages/Home/Home.jsx'
import Error from './components/Error/Error.jsx'
import About from './pages/about/about.jsx'
import './index.scss'
import Logement from "./pages/logement/Logement.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
   
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement",
        element: <Logement />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

