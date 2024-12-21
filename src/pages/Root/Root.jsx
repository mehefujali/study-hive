import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";


const Root = () => {
      return (
            <div>
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