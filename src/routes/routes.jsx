import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root";

const routes = createBrowserRouter([
      {
            path:'/',
            element: <Root></Root>
      }
])

export default routes