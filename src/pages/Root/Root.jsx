import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";


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
                  <main className=" min-h-[90vh]">
                        <Outlet></Outlet>
                  </main>
                  <footer>
                        <Footer></Footer>
                  </footer>
            </div>
      );
};

export default Root;