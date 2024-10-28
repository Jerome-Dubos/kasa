import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider } from "react-router-dom";
import App from './App'
import Home from './pages/Home'
import Logement from './pages/logement'
import Error from './components/Error'
import About from './pages/about'
import './index.scss'

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

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

