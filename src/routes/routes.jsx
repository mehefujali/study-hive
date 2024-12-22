import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PriveteRoute from "../Private/PriveteRoute";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";

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
                  },
                  {
                        path: 'register' ,
                        element: <Register/>
                  },
                  {
                        path : 'create-assignment' ,
                        element : <PriveteRoute>
                              <CreateAssignment/>
                        </PriveteRoute>
                  }
            ]
      }
])

export default routes