import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PriveteRoute from "../Private/PriveteRoute";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import Assignments from "../pages/Assignments/Assignments";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import Mysubmited from "../pages/Mysubmited/Mysubmited";

const routes = createBrowserRouter([
      {
            path: '/',
            element: <Root></Root>,
            children: [
                  {
                        path: '/',
                        element: <Home></Home>
                  },
                  {
                        path: 'login',
                        element: <Login></Login>
                  },
                  {
                        path: 'register',
                        element: <Register />
                  },
                  {
                        path: 'create-assignment',
                        element: <PriveteRoute>
                              <CreateAssignment />
                        </PriveteRoute>
                  },
                  {
                        path: 'assignments',
                        element: <Assignments />
                  },
                  {
                        path: 'assignment-details/:id',
                        element: <PriveteRoute>
                              <AssignmentDetails />
                        </PriveteRoute> ,
                        loader : ({params})=> fetch(`${import.meta.env.VITE_backend_URL}/assignment-details/${params.id}`)
                        
                  },
                  {
                        path : 'my-submited-assignment' ,
                        element : <PriveteRoute>
                              <Mysubmited/>
                        </PriveteRoute>
                  }
            ]
      }
])

export default routes