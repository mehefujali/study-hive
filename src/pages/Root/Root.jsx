import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "../../Components/Footer/Footer";
import { useContext, useEffect } from "react";
import { themeContext } from "../../context/ThemeProvider";


const Root = () => {
      const {theme} = useContext(themeContext)

      // Update the theme on the HTML tag
      useEffect(() => {
            document.documentElement.setAttribute('data-theme', theme);
      }, [theme]);
      return (
            <div className=" dark:text-white">
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
                  <footer className=" mt-12">
                        <Footer></Footer>
                  </footer>
            </div>
      );
};

export default Root;