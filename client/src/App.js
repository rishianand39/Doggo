import  "./App.css"
import Navbar from "./components/Navbar/Navbar";
import BreadLists from "./pages/BreadLists/BreadLists";
import BreadDetail from "./pages/BreadDetail/BreadDetail";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// react router
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <BreadLists />,
      },
      {
        path: "/bread-detail",
        element: <BreadDetail />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);


// wrapping entire app with react router
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
