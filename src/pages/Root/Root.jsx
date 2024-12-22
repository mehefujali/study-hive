import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {
      return (
            <div>
                  <Toaster
                        position="top-center"
                        reverseOrder={false}
                  />
                  <header>
                        <Navbar></Navbar>
                  </header>
                  <main>
                        <Outlet></Outlet>
                  </main>
                  <footer>

                  </footer>
            </div>
      );
};

export default Root;