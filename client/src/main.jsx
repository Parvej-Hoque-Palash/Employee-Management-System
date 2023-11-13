import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import UserInfo from './pages/UserInfo.jsx';
import AddEmployee from './pages/AddEmployee.jsx';
import UpdateUser from './pages/UpdateUser.jsx';
import Dashboard from './pages/Dashboard.jsx';
import { SecureRoute } from './routes/SecureRoute.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';

const secureRouteWrapper = (element) => <SecureRoute>{element}</SecureRoute>;

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    children: [
      {
        path: "/",
        element:<Home />,
      },
      {
        path: '/login',
        element:<Login/>,
      },
      {
        path: '/register',
        element:<Register/>,
      },
      {
        path: "/user/:id",
        element:<UserInfo />,
        loader:({params})=>fetch(`http://localhost:5000/api/employee/${params.id}`)
      },
      {
        path: "/addEmployee",
        element:secureRouteWrapper(<AddEmployee />),
      },
      {
        path: "/update/:id",
        element:secureRouteWrapper(<UpdateUser />),
        loader:({params})=>fetch(`http://localhost:5000/api/employee/${params.id}`)
      },
      {
        path: "/dashboard",
        element:secureRouteWrapper(<Dashboard />),
        loader:()=>fetch("http://localhost:5000/api/employee")
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
