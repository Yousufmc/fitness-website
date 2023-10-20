import {createBrowserRouter } from "react-router-dom";
import MainLaout from "../component/MainLaout";
import Home from "../pages/Home/Home";
import Aboutme from "../component/Aboutme";
import CartDetails from "../component/cartDetails";
import Login from "../pages/login/Login";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";
import Store from "../component/Store";
import Class from "../component/Class";
import Schedule from "../component/Schedule";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLaout></MainLaout>,
      children:[
        {
            path:"/",
            element:<Home></Home>,
            loader: ()=>fetch('/yoga.json')
        },

        {
            path:"/aboutme",
            element:<Aboutme></Aboutme>
        },
        {
            path:"/class",
            element:<Class></Class>
        },
        {
            path:"/store",
            element:<PrivateRoute><Store></Store></PrivateRoute>
        },
        {
            path:"/schedule",
            element:<PrivateRoute><Schedule></Schedule></PrivateRoute>
        },
        {
            path:"/cardDetails/:id",
            element:<CartDetails></CartDetails>,
            loader: ()=>fetch('/yoga.json')
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
            path:"/error",
            element:<Error></Error>
        },
      ]
    },
  ]);

export default router;