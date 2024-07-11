import {
    createBrowserRouter,
  } from "react-router-dom";
import RouteNotFound from "./RouteNotFound";
import Home from "../components/Home";
import Main from "../layout/Main";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<RouteNotFound></RouteNotFound>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        
        
      ]
    },
    // {
    //     path:'/dashboard',
    //     element: <Dashboard></Dashboard>,
    //     children:[
    //         {
    //             path:'/dashboard',
    //             element:<PrivateRoutes><DashboardHome></DashboardHome></PrivateRoutes> 
    //         },
           
            
           
            
           
    //     ]

    // }
  ]);