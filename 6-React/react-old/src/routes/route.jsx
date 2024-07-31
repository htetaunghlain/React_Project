import { createBrowserRouter } from "react-router-dom";
import AboutUS from "../pages/AboutUS";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import ProductDetail from "../pages/ProductDetail";
import MainLayout from "../components/MainLayout";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([

 {
  path:"/",
  element:<MainLayout/>,
  errorElement:<ErrorPage/>,
  children : [
    {
      path: "/",
      element:<Home/>
    },
  
    {
      path: "about-us",
      element:<AboutUS/>
    },
  
    {
      path:"my-cart",
      element:<MyCart/>
    },
  
    {
      path:"product-detail/:productId",
      element:<ProductDetail/>
    }
  ],
 },



]);

export default router;