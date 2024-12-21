import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const routes = createBrowserRouter([
      {
            path:'/',
            element: <Root></Root> ,
            children : [
                  {
                        path : '/' ,
                        element : <Home></Home>
                  } ,
                  {
                        path: 'login' ,
                        element: <Login></Login>
                  }
            ]
      }
])

export default routes